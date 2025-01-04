import { cn } from "@/lib/utils"

interface CalendarCellProps {
  day: number
  isToday?: boolean
  hasExpiry?: boolean
  onClick?: () => void
}

export function CalendarCell({ day, isToday, hasExpiry, onClick }: CalendarCellProps) {
  return (
    <div
      className={cn(
        "bg-card p-3 min-h-[100px] relative cursor-pointer hover:bg-accent/50",
        hasExpiry && "border-l-2 border-primary",
        isToday && "bg-accent"
      )}
      onClick={onClick}
    >
      <span className={cn(
        "text-sm",
        isToday && "font-bold"
      )}>
        {day}
      </span>
      {hasExpiry && (
        <div className="mt-2 text-xs text-primary">
          2 Warrants Expiring
        </div>
      )}
    </div>
  )
}