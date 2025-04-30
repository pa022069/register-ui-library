import { TDate } from "../../types/date";
import { useCalendar } from "../../stores/useCalendarStore";
import { WEEKDAYS } from "../../base/date-format";
import { getMonthDays } from "../../utils/calendar-utils";
import { WeekProps, WeekdayProps } from "./types";
import { Months, Weeks, Days, Headers } from "./styles";

function Week({ date }: WeekProps) {
  return (
    <Weeks>
      {date.map((day: TDate) => (
        <Weekday key={`${day.year}-${day.month}-${day.day}`} date={day} />
      ))}
    </Weeks>
  );
}

function Weekday({ date }: WeekdayProps) {
  const { setMarkDate, setMonth, setYear, currentYear, currentMonth } =
    useCalendar();
  const { day, year, isCurrentMonth, isToday, isSelected, month } = date;

  const handleSelectDate = () => {
    setMarkDate(`${year}-${month}-${day}`);
    if (month !== currentMonth + 1) {
      setMonth(month - 1);
    }
    if (year !== currentYear) {
      setYear(year);
    }
  };

  return (
    <Days
      onClick={handleSelectDate}
      isCurrentMonth={isCurrentMonth}
      isToday={isToday}
      isSelected={isSelected}
    >
      <span>{day}</span>
    </Days>
  );
}

function Header() {
  return (
    <Headers>
      {WEEKDAYS.map((day: string) => (
        <div key={day}>{day}</div>
      ))}
    </Headers>
  );
}

export default function Month({ current }: { current?: string }) {
  const { currentYear, currentMonth, markedDate } = useCalendar();
  const matrix = getMonthDays(
    currentYear,
    currentMonth + 1,
    markedDate || current
  );
  return (
    <>
      <Header />
      <Months>
        {matrix.map((week: TDate[], index: number) => (
          <Week key={`${week[1].year}-${week[1].month}-${index}`} date={week} />
        ))}
      </Months>
    </>
  );
}
