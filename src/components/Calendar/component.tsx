import { SIZE } from './enums/size';
import { FONTSIZE, GAP } from './base/design-tokens';
import Month from './components/Month';
import Year from './components/Year';
import Decade from './components/Decade';
import Nav from './components/Nav';
import { DateType } from './enums/date';
import { CalendarProvider, useCalendar } from './stores/useCalendarStore';
import { useCallback, useEffect, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type CalendarProps = {
  current?: string;
  onChange?: (date: string) => void;
};

type StyledCalendarProps = {
  size?: SIZE;
};

function StyledCalendar({
  size = SIZE.BASE,
  children,
}: StyledCalendarProps & { children: React.ReactNode }) {
  return (
    <div
      className={twMerge(
        `${FONTSIZE[size]}`,
        'w-fit min-w-[220px]',
        'flex flex-col',
        `${GAP['BASE']}`,
      )}
    >
      {children}
    </div>
  );
}

function Calendar({ current, onChange }: CalendarProps) {
  const { markedDate, viewMode } = useCalendar();

  const handleDateChange = useCallback(
    (date: string) => {
      if (onChange) {
        const [year, month, day] = date.split('-');
        onChange(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
      }
    },
    [onChange],
  );

  useEffect(() => {
    if (markedDate) {
      handleDateChange(markedDate);
    }
  }, [handleDateChange, markedDate]);

  const CalendarContent = useMemo(() => {
    switch (viewMode) {
      case DateType.DAY:
        return <Month current={current} />;
      case DateType.MONTH:
        return <Year current={current} />;
      default:
        return <Decade current={current} />;
    }
  }, [viewMode, current]);

  return (
    <StyledCalendar size={SIZE.XS}>
      <Nav />
      {CalendarContent}
    </StyledCalendar>
  );
}

export function CalendarContainer({ current, onChange }: CalendarProps) {
  return (
    <CalendarProvider current={current}>
      <Calendar current={current} onChange={onChange} />
    </CalendarProvider>
  );
}
