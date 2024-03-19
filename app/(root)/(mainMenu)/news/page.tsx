import React from 'react';

import { PageLayout } from '@/components/page/PageLayout';
import { NewsSec } from '@/components/news/NewsSec';

const News = () => {
  return (
    <div>
      <PageLayout pathname={'Главная / Пресс-центр'} title={'Новости'}>
        <NewsSec />
      </PageLayout>
    </div>
  );
};

export default News;
