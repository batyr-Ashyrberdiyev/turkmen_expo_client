import React from 'react';

import { PageLayout } from '@/components/page/PageLayout';
import { NewsSec } from '@/components/news/NewsSec';

const News = () => {
  return (
    <div>
      <PageLayout path={'news'} title={'Новости'}>
        <NewsSec />
      </PageLayout>
    </div>
  );
};

export default News;
