import React, { ReactNode } from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center gap-[5px] justify-center">
      <button disabled type="button">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-360 cursor-pointer">
          <path d="M18 22L12 16L18 10L19.4 11.4L14.8 16L19.4 20.6L18 22Z" fill="#059784" />
        </svg>
      </button>

      <div className="border-[1px] border-navyBlue5 rounded-sm px-3 py-[9px]">1</div>
      <p>из 2</p>
      <button type="button">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 cursor-pointer">
          <path d="M18 22L12 16L18 10L19.4 11.4L14.8 16L19.4 20.6L18 22Z" fill="#059784" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
