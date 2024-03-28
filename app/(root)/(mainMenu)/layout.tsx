import React from 'react';

import { Sidebar } from '@/components/ui/Sidebar';

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mob:bg-blueBg bg-navyBlueBg h-full">
      <div className="container h-full">
        <div className="flex w-full h-full">
          <aside className="w-[25%] hidden mob:block">
            <Sidebar />
          </aside>
          <div className="bg-navyBlueBg pt-[20px] mob:pl-[56px] pl-0 mob:w-[75%] w-full relative main-abs-bg h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
