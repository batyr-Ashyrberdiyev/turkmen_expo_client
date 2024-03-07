'use client';

import React from 'react';
import { v4 } from 'uuid';

import { innerContactData, menuData } from '@/lib/database/contactsData';
import { ContactsDropDown } from '../ContactsDropDown';

import { useAppDispatch } from '@/redux/hooks';
import { setActiveMenu, setContactTitle } from '@/redux/slices/contactsSlice';

export const ContactsSec = () => {
  const dispatch = useAppDispatch();

  const openContacts = (name: string) => {
    dispatch(setContactTitle(name));
    dispatch(setActiveMenu(name)); // Set the active menu to the clicked menu's name
  };

  return (
    <div className="flex flex-col items-start w-full">
      {menuData.map((item) => (
        <ContactsDropDown key={v4()} openContacts={openContacts} {...item} />
      ))}
      <div className="flex flex-col items-start mt-[20px] w-full">
        {innerContactData.map((item) => (
          <div className="py-[30px] border-t-[1px] border-navyBlue5 w-full" key={v4()}>
            <h4 className="font-medium text-[18px] mb-[30px]">{item.subtitle}</h4>
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
