"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { menuData } from "@/lib/database/contactsData";
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
    <div className="flex flex-col items-start">
      {menuData.map((item) => (
        <ContactsDropDown
          key={item.title} // Ensure each dropdown has a unique key
          openContacts={openContacts}
          {...item}
        />
      ))}
    </div>
  );
};
