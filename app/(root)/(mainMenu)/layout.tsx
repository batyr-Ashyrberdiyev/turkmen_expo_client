import React from "react";

import { Sidebar } from "@/components/Sidebar";
import { PageLayout } from "@/components/PageLayout";

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blueBg">
      <div className="container">
        <div className="flex w-full">
          <main className="pt-[20px] w-[25%]">
            <Sidebar />
          </main>
          <div className="bg-navyBlueBg pt-[20px] px-[20px] w-[75%]">
            {/* <PageLayout /> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
