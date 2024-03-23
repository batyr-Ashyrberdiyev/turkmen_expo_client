import React from 'react';

import { FormSec } from '@/components/bid/FormSec';
import { PageLayout } from '@/components/page/PageLayout';

const Bid = () => {
  return (
    <div className="h-full w-full">
      <PageLayout title="Выставочная деятельность" path="members/bid">
        <FormSec />
      </PageLayout>
    </div>
  );
};

export default Bid;
