import React from "react";

import { Sidebar } from "@/components/Sidebar";

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blueBg h-full">
      <div className="container h-full">
        <div className="flex w-full h-full">
          <main className="pt-[20px] w-[25%]">
            <Sidebar />
          </main>
          <div className="bg-navyBlueBg pt-[20px] pl-[56px] w-[75%] relative main-abs-bg h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
