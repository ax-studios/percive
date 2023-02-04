import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative mx-auto flex h-screen max-w-lg flex-col overflow-hidden border-0 border-primary-500  md:rounded-2xl md:border-2'>
      {children}
    </div>
  );
}
