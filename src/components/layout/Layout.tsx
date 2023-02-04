import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='relative mx-auto flex h-screen max-w-lg flex-col overflow-hidden rounded-2xl border-2 border-primary-500 bg-[hsl(222,46%,11%)]'>
      {children}
    </div>
  );
}
