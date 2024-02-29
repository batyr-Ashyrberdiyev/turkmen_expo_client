import React from "react";

import { useForm } from "react-hook-form";

interface Props {
  text: string;
  name: "title" | "sitename" | "person" | "phone" | "email" | "space";

  star?: boolean;
  type?: string;
  area?: boolean;
}

type formProps = {
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
  //
  // const { register, handleSubmit } = useForm<formProps>();

  return (
    <div className="">
      {area ? (
        <>
          <label htmlFor="area">{text}</label>
          <textarea
            // {...register(name, {
            //   required: true,
            // })}
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
            // {...register(name, {
            //   required: true,
            //   // validate:()
            // })}
            type={type}
            id="name"
            className="bid-input"
          />
        </div>
      )}
    </div>
  );
};
