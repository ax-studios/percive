import { Account, Client, ID } from 'appwrite';

import logger from './logger';
//create client
const client = new Client();
client.setEndpoint('https://axstudios.ml/v1').setProject('percive-htf');

//create account
const account = new Account(client);

//authenticate user with phone number
export const emailAuth = async (email: string, password: string) => {
  await account.createEmailSession(email, password);
};

// login account
// eslint-disable-next-line unused-imports/no-unused-vars
export const login = async (email: string, password: string) => {
  await account.create(ID.unique(), 'team@appwrite.io', 'password');
};

//validate phone session
export const validateAuth = async (): Promise<string | undefined> => {
  try {
    const data = await account.get();
    const res = data.email;
    logger({ res });
    return res;
  } catch {
    return undefined;
  }
};

export const logout = () => {
  const promise = account.deleteSessions();

  promise.then(
    function (response) {
      logger(response);
    },
    function (error) {
      logger(error);
    }
  );
};
