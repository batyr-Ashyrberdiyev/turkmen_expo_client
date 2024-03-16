"use client";

import React from "react";
import { v4 } from "uuid";
import { useSearchParams, useRouter } from "next/navigation";

import { EventCard } from "../cards/EventCard";
import { BorderBtn } from "../ui/Buttons";

import { eventPagination } from "@/lib/database/eventsData";
import Link from "next/link";
import { Pathnames } from "../page/Pathnames";

export const CalendarSec = ({}: {}) => {
  const [showCards, setShowCards] = React.useState(false);

  const showEventCards = () => {
    setShowCards(!showCards);
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") || 1;
  const per_page = searchParams.get("per_page") || 5;

  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = eventPagination.slice(start, end);

  const hasNextPage = end < eventPagination.length;
  const hasPrevPage = start > 0;

  return (
    <div className="mb-[100px]">
      <div className="container flex flex-col items-start pt-[20px] gap-12">
        <div>
          <div className="mb-[24px]">
            <Pathnames sort="calendar" />
          </div>
          <h2 className="text-extra font-semibold leading-[100%]">
            Календарь мероприятий
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {entries
            .filter((item, index) => index < 3 || (showCards && item))
            .map((item) => (
              <Link href="/calendar/event" key={v4()}>
                <EventCard dark {...item} />
              </Link>
            ))}
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <BorderBtn text={showCards ? "Скрыть" : "Показать ещё"} mt="24" px />
          <div className="flex items-center gap-5">
            <button
              onClick={() =>
                router.push(
                  `/events/?page=${Number(page) - 1}&per_page=${per_page}`
                )
              }
              disabled={!hasPrevPage}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M18 22L12 16L18 10L19.4 11.4L14.8 16L19.4 20.6L18 22Z"
                  fill="#5D6A77"
                />
              </svg>
            </button>
            <div className="flex items-center gap-[5px]">
              <div className="border-[1px] border-navyBlue5 rounded-sm px-3 py-[9px]">
                {page}
              </div>
              <p>из {Math.ceil(10 / Number(per_page))}</p>
              <button
                onClick={() =>
                  router.push(
                    `/events/?page=${Number(page) + 1}&per_page=${per_page}`
                  )
                }
                disabled={!hasNextPage}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180 cursor-pointer"
                >
                  <path
                    d="M18 22L12 16L18 10L19.4 11.4L14.8 16L19.4 20.6L18 22Z"
                    fill="#059784"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
