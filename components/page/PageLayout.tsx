import React from "react";

interface Props {
  children: React.ReactNode;
  pathname: string;
  title: string;
}

export const PageLayout = ({ children, title, pathname }: Props) => {
  return (
    <div className="flex flex-col gap-y-[24px] mb-[100px]">
      <p className="text-[12px] text-gray4">{pathname}</p>
      <h2 className="text-extra font-semibold leading-[100%]">{title}</h2>
      {children}
    </div>
  );
};
