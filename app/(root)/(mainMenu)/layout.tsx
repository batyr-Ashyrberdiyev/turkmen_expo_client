import React from "react";

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <main className="bg-blueBg"></main>
      {children}
    </div>
  );
};

export default CompanyLayout;
