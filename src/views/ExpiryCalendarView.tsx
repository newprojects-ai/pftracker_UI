import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CalendarHeader } from '@/components/calendar/CalendarHeader'
import { CalendarGrid } from '@/components/calendar/CalendarGrid'
import { format, addMonths, subMonths } from 'date-fns'

export function ExpiryCalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Expiry Calendar</h2>
        <div className="flex items-center gap-4">
          <h3 className="text-xl">{format(currentDate, 'MMMM yyyy')}</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <CalendarHeader />
        <CalendarGrid
          date={currentDate}
          onSelectDay={(date) => {
            console.log('Selected date:', date)
          }}
        />
      </div>
    </div>
  )
}