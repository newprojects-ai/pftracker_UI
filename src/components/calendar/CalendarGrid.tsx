import { CalendarCell } from "./CalendarCell"
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isToday,
  format
} from "date-fns"

interface CalendarGridProps {
  date: Date
  onSelectDay?: (date: Date) => void
}

export function CalendarGrid({ date, onSelectDay }: CalendarGridProps) {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })
  const startingDayIndex = getDay(monthStart)

  // Create empty cells for days before the first of the month
  const emptyCells = Array(startingDayIndex).fill(null)

  return (
    <div className="grid grid-cols-7 gap-px bg-muted">
      {emptyCells.map((_, index) => (
        <div key={`empty-${index}`} className="bg-card p-3 min-h-[100px]" />
      ))}
      {days.map((day) => (
        <CalendarCell
          key={format(day, "yyyy-MM-dd")}
          day={parseInt(format(day, "d"))}
          isToday={isToday(day)}
          hasExpiry={Math.random() > 0.8} // Example condition
          onClick={() => onSelectDay?.(day)}
        />
      ))}
    </div>
  )
}