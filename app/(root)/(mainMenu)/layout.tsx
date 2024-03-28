import React from "react";

import { Sidebar } from "@/components/ui/Sidebar";

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tab:bg-blueBg bg-navyBlueBg h-full">
      <div className="container h-full">
        <div className="flex w-full h-full">
          <aside className="w-[25%] hidden tab:block ">
            <Sidebar />
          </aside>
          <div className="bg-navyBlueBg pt-[20px] lg:pl-10 md:pl-6 pl-0 lg:w-[75%] w-full relative main-abs-bg h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
