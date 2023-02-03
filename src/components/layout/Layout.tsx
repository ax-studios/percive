import * as React from 'react';

import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='relative max-w-lg border border-red-400'>
      {children}
      <FixedBottomNavigation />
    </div>
  );
}
