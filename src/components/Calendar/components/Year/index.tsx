import { SHORT_MONTHS } from "../../base/date-format";
import { useCalendar } from "../../stores/useCalendarStore";
import { DateType } from "../../enums/date";
import { Container, Month } from "./styles";
import { useCallback } from "react";

export default function Year({ current }: { current?: string }) {
  const { setMonth, setViewMode, markedDate, currentMonth } = useCalendar();

  const handleClick = useCallback(
    (month: number) => {
      setMonth(month);
      setViewMode(DateType.DAY);
    },
    [setMonth, setViewMode]
  );

  const marked = new Date(markedDate || current || Date.now());
  const markedMonth = marked.getMonth();

  return (
    <Container>
      {SHORT_MONTHS.map((month: string, idx: number) => (
        <Month
          key={month}
          isCurrentMonth={(markedMonth || currentMonth) === idx}
          onClick={() => handleClick(idx)}
        >
          {month}
        </Month>
      ))}
    </Container>
  );
}
