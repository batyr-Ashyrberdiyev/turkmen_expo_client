'use client';

import React from 'react';

import Image from 'next/image';
import { v4 } from 'uuid';
import clsx from 'clsx';

import { newsPageData } from '@/lib/database/newsData';

import message from '@/public/assets/icons/news/message.svg';
import search from '@/public/assets/icons/news/search.svg';
import col from '@/public/assets/icons/news/col.svg';
import gridIco from '@/public/assets/icons/news/grid.svg';

import { PageLayout } from '@/components/page/PageLayout';
import { BorderBtn } from '@/components/ui/Buttons';
import Pagination from '@/components/ui/Pagination';
import Card from '@/components/news/Card';

const News = () => {
  const menu = ['Новости', 'СМИ о нас'];

  const [grid, setGrid] = React.useState(true);

  return (
    <div>
      <PageLayout path={'news'} title={'Новости'}>
        <div>
          <div className="flex flex-col">
            <input className="bid-input w-full max-w-[461px] mb-[60px]" type="text" />

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-[24px] pb-[5px]">
                {/* <div className="flex items-center gap-5">
                {menu.map((item) => (
                  <p className="cursor-pointer leading-[130%]">{item}</p>
                  ))}
                </div> */}
                <Image
                  onClick={() => setGrid(!grid)}
                  className="cursor-pointer"
                  src={!grid ? gridIco : col}
                  alt="сетка"></Image>
              </div>

              <div className="flex w-full max-w-[184px] items-center cursor-pointer justify-center mx-auto mb-[24px] gap-[10px]">
                <Image src={message} alt="Письмо"></Image>
                <p className="leading-[125%] text-extraSm">подписаться на новости</p>
              </div>

              <div
                className={clsx('mb-[108px]', {
                  'flex flex-col gap-6': !grid,
                  'grid grid-cols-2 gap-y-[85px] gap-x-6': grid,
                })}>
                {newsPageData.map((item) => (
                  <Card grid={grid} key={v4()} {...item} />
                ))}
              </div>

              <div className="flex flex-col gap-6 w-full max-w-[180px] mx-auto justify-center">
                <BorderBtn text={'Показать ещё'} />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default News;
