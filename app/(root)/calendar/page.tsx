import React from 'react';
import { Suspense } from 'react';

import { CalendarSec } from '@/components/calendar/CalendarSec';

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
