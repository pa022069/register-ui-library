import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useCalendar } from "../../stores/useCalendarStore";
import { MONTHS } from "../../base/date-format";
import { Button, Container } from "./styles";
import { DateType } from "../../enums/date";
import { ControlButtonProps, DirectionType, SizeType } from "./types";
import { YEAR_RANGE_COUNT } from "../../base/unit";
import { useCallback } from "react";

function ControlButton({ direction, onClick }: ControlButtonProps) {
  return (
    <Button size={SizeType.FIT} onClick={onClick}>
      {direction === DirectionType.LEFT ? <FaAngleLeft /> : <FaAngleRight />}
    </Button>
  );
}

function ControlGroup() {
  const { currentYear, currentMonth, setViewMode, viewMode } = useCalendar();
  const decadeStart = currentYear - (currentYear % YEAR_RANGE_COUNT);
  const decadeEnd = decadeStart + YEAR_RANGE_COUNT - 1;

  const handleClick = useCallback(() => {
    switch (viewMode) {
      case DateType.DAY:
        setViewMode(DateType.MONTH);
        break;
      case DateType.MONTH:
        setViewMode(DateType.YEAR);
        break;
    }
  }, [setViewMode, viewMode]);

  const Title = () => {
    switch (viewMode) {
      case DateType.DAY:
        return `${MONTHS[currentMonth]} ${currentYear}`;
      case DateType.MONTH:
        return `${currentYear}`;
      case DateType.YEAR: {
        return `${decadeStart} - ${decadeEnd}`;
      }
    }
  };

  return (
    <Button size={SizeType.FULL} onClick={handleClick}>
      <Title />
    </Button>
  );
}

export default function CalendarNav() {
  const {
    nextMonth,
    prevMonth,
    viewMode,
    nextYear,
    prevYear,
    currentYear,
    setYear,
  } = useCalendar();

  const handleNext = useCallback(() => {
    switch (viewMode) {
      case DateType.DAY:
        nextMonth();
        break;
      case DateType.MONTH:
        nextYear();
        break;
      case DateType.YEAR:
        setYear(currentYear + YEAR_RANGE_COUNT);
        break;
    }
  }, [viewMode, currentYear, setYear, nextMonth, nextYear]);

  const handlePrev = useCallback(() => {
    switch (viewMode) {
      case DateType.DAY:
        prevMonth();
        break;
      case DateType.MONTH:
        prevYear();
        break;
      case DateType.YEAR:
        setYear(currentYear - YEAR_RANGE_COUNT);
        break;
    }
  }, [viewMode, currentYear, setYear, prevMonth, prevYear]);

  return (
    <Container>
      <ControlButton direction={DirectionType.LEFT} onClick={handlePrev} />
      <ControlGroup />
      <ControlButton direction={DirectionType.RIGHT} onClick={handleNext} />
    </Container>
  );
}
