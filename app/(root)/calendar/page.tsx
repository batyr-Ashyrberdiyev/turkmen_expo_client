import React from "react";
import { Suspense } from "react";

import { CalendarSec } from "@/components/sections/CalendarSec";

const Calendar = () => {
  return (
    <div>
      <Suspense>
        <CalendarSec />
      </Suspense>
    </div>
  );
};

export default Calendar;
