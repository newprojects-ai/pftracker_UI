const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function CalendarHeader() {
  return (
    <div className="grid grid-cols-7 gap-px bg-muted">
      {DAYS.map((day) => (
        <div key={day} className="bg-card p-3 text-center text-sm font-medium">
          {day}
        </div>
      ))}
    </div>
  )
}