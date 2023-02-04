import { Account, Client } from 'appwrite';

import logger from './logger';
//create client
const client = new Client();
client.setEndpoint('http://axstudios.ml/v1').setProject('percive-htf');

//create account
const account = new Account(client);

//authenticate user with phone number
export const emailAuth = (email: string, password: string) => {
  return account.createEmailSession(email, password);
};

//validate phone session
export const validateAuth = (): void => {
  // const data = await account.get();
  // const res = data.email;
  // logger({ res });
  // return res;
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
