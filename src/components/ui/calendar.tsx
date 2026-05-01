"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ShadcnButton as Button } from "@/src/components/ui/shadcn-button";
import { cn } from "@/src/lib/utils";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  const randomBgWhite =
    !isHeader && Math.random() < 0.3
      ? "bg-growth-green text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]"
      : "text-muted-text";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-xl"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-[10px]" : "text-xs"}`}>
        {day}
      </span>
    </div>
  );
};

export function Calendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const bookingLink = `/contact`;

  const renderCalendarDays = () => {
    let days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array.from({ length: firstDayOfWeek }).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array.from({ length: daysInMonth })
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <BentoCard height="h-auto" linkTo={bookingLink}>
      <div className="grid h-full gap-8">
        <div className="relative z-10">
          <h2 className="mb-4 text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight">
            Any questions <br/>about <span className="gradient-text">Scaling?</span>
          </h2>
          <p className="mb-6 text-sm text-muted-text leading-relaxed">
            Feel free to reach out to our team of strategists for a free audit!
          </p>
          <Button className="rounded-full bg-white text-black font-bold uppercase transition-transform hover:scale-105">Book Now</Button>
        </div>
        <div className="transition-all duration-500 ease-out relative">
          <div>
            <div className="h-full w-full rounded-[24px] border border-white/5 bg-white/5 p-2 transition-colors duration-100 group-hover:border-growth-green">
              <div
                className="h-full rounded-2xl border border-white/10 p-4"
              >
                <div className="flex items-center space-x-2">
                  <p className="text-xs">
                    <span className="font-bold text-white uppercase tracking-widest">
                      {currentMonth}, {currentYear}
                    </span>
                  </p>
                  <span className="h-1 w-1 rounded-full bg-growth-green">&nbsp;</span>
                  <p className="text-[10px] text-muted-text uppercase tracking-widest font-bold">30 min call</p>
                </div>
                <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
  hideOverflow?: boolean;
  linkTo?: string;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
  hideOverflow = true,
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={cn(
        `group relative flex flex-col rounded-[32px] border border-white/10 bg-[#1A1A1A]/40 backdrop-blur-xl p-8 hover:bg-white/5 transition-all duration-300`,
        hideOverflow && "overflow-hidden",
        height,
        `row-span-${rowSpan} col-span-${colSpan}`,
        className
      )}
    >
      {linkTo && (
        <div className="absolute bottom-6 right-8 z-[999] flex h-12 w-12 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100 shadow-xl">
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.25 15.25V6.75H8.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 7L6.75 17.25"
            ></path>
          </svg>
        </div>
      )}
      {showHoverGradient && (
        <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-growth-green/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block group">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
