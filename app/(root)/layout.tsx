import React from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <div className="flex-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
