import { ScrollText } from "lucide-react"

const activities = [
  {
    id: 1,
    description: "Data Import Completed - Interactive Brokers",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    description: "Theme Added - Technology",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    description: "Holdings Updated - 28 positions",
    timestamp: "5 hours ago",
  },
]

export function ActivityFeed() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <ScrollText className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </div>
        <div className="mt-4 space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <span className="text-sm">{activity.description}</span>
              <span className="text-xs text-muted-foreground">
                {activity.timestamp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}