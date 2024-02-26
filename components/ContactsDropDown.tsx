// "use client";

// import React from "react";
// import Image from "next/image";

// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import {
//   selectContacts,
//   setActiveMenu,
//   setContactTitle,
// } from "@/redux/slices/contactsSlice";

// import arrow from "@/public/assets/icons/contact-arrow.svg";

// interface Props {
//   title: string;
//   subtitle: string;
//   phone: string;
//   email: string;
//   openContacts: any;
// }

// export const ContactsDropDown = ({
//   title,
//   subtitle,
//   phone,
//   email,
//   openContacts,
// }: Props) => {
//   const { activeMenu, contactTitle } = useAppSelector(selectContacts);
//   const dispatch = useAppDispatch();

//   console.log(2);

//   const openMenu = () => {
//     openContacts(contactTitle);
//   };

//   return (
//     <div className="w-full">
//       <div
//         onClick={openContacts}
//         className="cursor-pointer flex items-center justify-between py-[20px] mb-[30px] border-navyBlue border-y-[1px]"
//       >
//         <h3 onClick={openMenu} className="text-[21px] font-semibold  ">
//           {title}
//         </h3>
//         <Image src={arrow} alt="arrow" />
//       </div>
//       {activeMenu === title && (
//         <div className="ml-[40px] mb-[30px]">
//           <h4 className="font-medium text-[18px] mb-[20px]">{subtitle}</h4>
//           <div className="flex flex-col items-start gap-y-[5px]">
//             <p>Тел: {phone}</p>
//             <p>Email: {email}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import React from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectContacts,
  setActiveMenu,
  setContactTitle,
} from "@/redux/slices/contactsSlice";

import arrow from "@/public/assets/icons/contact-arrow.svg";

interface Props {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  openContacts: any;
}

export const ContactsDropDown = ({
  title,
  subtitle,
  phone,
  email,
  openContacts,
}: Props) => {
  const { activeMenu, contactTitle } = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();

  const [rotate, setRotate] = React.useState(false);

  const openMenu = () => {
    if (contactTitle === title) {
      // Close the menu if it's already open
      dispatch(setActiveMenu(activeMenu === title ? "" : title));
      setRotate(true);
    } else {
      openContacts(title);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={openMenu} // Change to openMenu instead of openContacts
        className="cursor-pointer flex items-center justify-between py-[20px] mb-[30px] border-navyBlue border-y-[1px]"
      >
        <h3 className="text-[21px] font-semibold">{title}</h3>
        <Image
          src={arrow}
          alt="arrow"
          className={`${
            rotate && "rotate-[360deg]"
          } transition-all duration-200 rotate-[180deg]`}
        />
      </div>
      {activeMenu === title && ( // Only display content if the current menu matches the active menu
        <div className="ml-[40px] mb-[30px]">
          <h4 className="font-medium text-[18px] mb-[20px]">{subtitle}</h4>
          <div className="flex flex-col items-start gap-y-[5px]">
            <p>Тел: {phone}</p>
            <p>Email: {email}</p>
          </div>
        </div>
      )}
    </div>
  );
};
