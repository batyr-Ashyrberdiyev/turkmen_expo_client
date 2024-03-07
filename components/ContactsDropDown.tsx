'use client';

import React from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectContacts, setActiveMenu } from '@/redux/slices/contactsSlice';

import arrow from '@/public/assets/icons/contact-arrow.svg';
import { innerContactData } from '@/lib/database/contactsData';

interface Props {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  site?: string;
  openContacts: any;
}

export const ContactsDropDown = ({ title, subtitle, phone, email, site, openContacts }: Props) => {
  const { activeMenu, contactTitle } = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();

  const [rotate, setRotate] = React.useState(false);

  const openMenu = () => {
    setRotate(!rotate);
    if (contactTitle === title) {
      dispatch(setActiveMenu(activeMenu === title ? '' : title));
    } else {
      openContacts(title);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={openMenu} // Change to openMenu instead of openContacts
        className="cursor-pointer flex items-center justify-between py-[20px] mb-[30px] border-t-navyBlue5 border-b-navyBlue border-y-[1px]">
        <h3 className="text-[21px] font-semibold">{title}</h3>
        <Image
          src={arrow}
          alt="arrow"
          className={`${rotate && 'rotate-[360deg]'} transition-all duration-300 rotate-[180deg]`}
        />
      </div>
      {activeMenu === title && ( // Only display content if the current menu matches the active menu
        <div className="mx-[40px] mb-[30px]">
          <h4 className="font-medium text-[18px] mb-[30px]">{subtitle}</h4>
          <div className="flex flex-col items-start gap-y-[6px] text-[16px]">
            <p>Тел: {phone}</p>
            <p>Email: {email}</p>
            {site && <p>{site}</p>}
          </div>
          {title === 'Комплекс услуг для экспонентов' && (
            <div className="mt-[30px]">
              {innerContactData.map((item) => (
                <div className="py-[30px] border-t-[1px] border-navyBlue5" key={v4()}>
                  <h4 className="font-medium text-[18px] mb-[30px]">{item.subtitle}</h4>
                  <div className="flex flex-col items-start gap-y-[6px] text-[16px]">
                    <p>Тел: {item.phone}</p>
                    <p>Email: {item.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
