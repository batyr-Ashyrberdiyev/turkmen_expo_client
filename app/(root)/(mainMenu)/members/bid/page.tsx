import React from "react";

import { FormSec } from "@/components/sections/FormSec";
import { PageLayout } from "@/components/PageLayout";

const Bid = () => {
  return (
    <div className="h-full w-full">
      <PageLayout
        title="Выставочная деятельность"
        pathname="Главная / Участникам / Онлайн заявка для участников"
      >
        <FormSec />
      </PageLayout>
    </div>
  );
};

export default Bid;
