import React from "react";

export const Title = ({ text }: { text: string }) => {
  return (
    <h2 className="text-[26px] leading-[115%] min-[380px]:text-extra font-semibold min-[375px]:leading-[100%]">
      {text}
    </h2>
  );
};
