import React from "react";

import { FormSec } from "@/components/bid/FormSec";
import { PageLayout } from "@/components/page/PageLayout";

const Bid = () => {
  return (
    <div className="h-full w-full">
      <PageLayout title="Онлайн-заявка для участников" path="members/bid">
        <FormSec />
      </PageLayout>
    </div>
  );
};

export default Bid;
