import React from "react";

export const BidForm = ({
  title,
  star = false,
  type = "text",
}: {
  title: string;
  star?: boolean;
  type?: string;
}) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor="name" className="mb-[15px]">
        {title}
        {star && <span className="text-lightRed">*</span>}
      </label>
      <input type={type} id="name" className="bid-input" />
    </div>
  );
};
