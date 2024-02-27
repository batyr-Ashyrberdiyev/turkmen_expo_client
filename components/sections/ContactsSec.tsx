"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { innerContactData, menuData } from "@/lib/database/contactsData";
import { ContactsDropDown } from "../ContactsDropDown";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectContacts,
  setActiveMenu,
  setContactTitle,
} from "@/redux/slices/contactsSlice";

export const ContactsSec = () => {
  const dispatch = useAppDispatch();
  const { contactTitle, activeMenu } = useAppSelector(selectContacts);

  const openContacts = (name: string) => {
    dispatch(setContactTitle(name));
    dispatch(setActiveMenu(name)); // Set the active menu to the clicked menu's name
  };

  return (
    <div className="flex flex-col items-start w-full">
      {menuData.map((item) => (
        <ContactsDropDown
          key={item.title} // Ensure each dropdown has a unique key
          openContacts={openContacts}
          {...item}
        />
      ))}
      <div className="flex flex-col items-start mt-[20px] w-full">
        {innerContactData.map((item) => (
          <div className="py-[30px] border-t-[1px] border-navyBlue5 w-full">
            <h4 className="font-medium text-[18px] mb-[30px]">
              {item.subtitle}
            </h4>
            <div className="flex flex-col items-start gap-y-[6px] text-[16px]">
              <p>Тел: {item.phone}</p>
              <p>Email: {item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
