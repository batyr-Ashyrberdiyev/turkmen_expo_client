import React from 'react';

import { Header } from '@/components/colontitle/Header';
import { Footer } from '@/components/colontitle/Footer';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full wrapper w-full overflow-x-hidden relative">
      <Header />
      <main className="flex-auto bg-blueBg main">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
