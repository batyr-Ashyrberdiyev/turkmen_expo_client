"use client";

import React from "react";
import Image from "next/image";

import aboutImg from "@/public/assets/images/about.png";
import { aboutData } from "@/lib/database/about";
import { v4 } from "uuid";
import { Pathnames } from "@/components/page/Pathnames";
import { LayoutWithSidebar } from "@/components/page/LayoutWithSidebar";

const About = () => {
  return (
    <LayoutWithSidebar sortBy="about" title="Коротко о нас">
      <Image src={aboutImg} width={1000} height={500} alt="about image" />
      <div className="flex flex-col items-start gap-y-[24px] text-p">
        {aboutData.map((text) => (
          <p key={v4()} className="text-[16px] leading-[150%]">
            {text}
          </p>
        ))}
      </div>
    </LayoutWithSidebar>
  );
};

export default About;
