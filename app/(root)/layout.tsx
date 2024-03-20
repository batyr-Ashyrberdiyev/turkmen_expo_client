import React from "react";

import { Header } from "@/components/colontitle/Header";
import { Footer } from "@/components/colontitle/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full overflow-x-hidden">
      <Header />
      <div className="flex-auto bg-blueBg">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
