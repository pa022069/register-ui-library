import { useCalendar } from "../../stores/useCalendarStore";
import { DateType } from "../../enums/date";
import { YEAR_RANGE_COUNT } from "../../base/unit";
import { Container, Year } from "./styles";
import { useCallback } from "react";

export default function Decade({ current }: { current?: string }) {
  const { markedDate, setViewMode, setYear, currentYear } = useCalendar();

  const handleClick = useCallback(
    (year: number) => {
      setYear(year);
      setViewMode(DateType.MONTH);
    },
    [setYear, setViewMode]
  );

  const marked = new Date(markedDate || current || Date.now());
  const markedYear = marked.getFullYear();
  const decadeStart = currentYear - (currentYear % YEAR_RANGE_COUNT) - 1;
  const years = Array.from(
    { length: YEAR_RANGE_COUNT + 2 },
    (_, i) => decadeStart + i
  );

  return (
    <Container>
      {years.map((year, idx) => (
        <Year
          key={year}
          isCurrentYear={(markedYear || currentYear) === year}
          isCurrentDecade={idx === 0 || idx === years.length - 1}
          onClick={() => handleClick(year)}
        >
          <span>{year}</span>
        </Year>
      ))}
    </Container>
  );
}
