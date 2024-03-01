'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import search from '@/public/assets/icons/search.svg';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectHeader, setShowInput } from '@/redux/slices/headerSlice';

const Search = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      params.set('query', e.target.value);
    } else {
      params.delete('query');
    }

    replace(pathname + '?' + params.toString());
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        dispatch(setShowInput(false));
      }
    };
    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  return (
    <input
      onChange={updateValue}
      defaultValue={searchParams.get('query')?.toString()}
      ref={inputRef}
      type="text"
      placeholder="Поиск..."
      className="rounded-[2px] py-[5px] px-[10px] focus:outline-none text-black placeholder:text-black"
    />
  );
};

export const Input = () => {
  const { showInput } = useAppSelector(selectHeader);
  const dispatch = useAppDispatch();

  return (
    <div className="cursor-pointer">
      <div className="">
        {!showInput && (
          <Image
            src={search}
            alt="search"
            width={25}
            height={25}
            className="px-[5px]"
            onClick={() => {
              dispatch(setShowInput(true));
            }}
          />
        )}
      </div>
      {showInput && (
        <Suspense>
          <Search />
        </Suspense>
      )}
    </div>
  );
};
