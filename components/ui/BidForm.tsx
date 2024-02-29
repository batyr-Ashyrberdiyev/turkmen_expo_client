import React from "react";

interface Props {
  text: string;
  name: "title" | "sitename" | "person" | "phone" | "email" | "space";
  star?: boolean;
  type?: string;
  area?: boolean;
}

type FormProps = {
  title: string;
  sitename: string;
  phone: string;
  email: string;
  space: string;
  person: string;
};

export const BidForm = ({
  text = "",
  star = false,
  type = "text",
  name = "title",
  area = false,
}: Props) => {
  return (
    <div className="">
      {area ? (
        <>
          <label htmlFor="area">{text}</label>
          <textarea
            className="bid-input"
            name="Демонстрируемая продукция / оборудование / услуги"
            id="area"
            cols={30}
            rows={5}
          />
        </>
      ) : (
        <div className="flex flex-col items-start">
          <label htmlFor="name" className="mb-[15px]">
            {text}
            {star && <span className="text-lightRed">*</span>}
          </label>
          <input
            defaultValue={"test"}
            type={type}
            id="name"
            className="bid-input"
          />
        </div>
      )}
    </div>
  );
};
