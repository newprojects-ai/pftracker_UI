import { AlertTriangle } from "lucide-react"

const alerts = [
  {
    id: 1,
    message: "2 Warrants Expiring in 30 days",
    type: "error",
  },
  {
    id: 2,
    message: "Market Data Update Required",
    type: "warning",
  },
]

export function AlertsList() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Alerts</h3>
        </div>
        <div className="mt-4 space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <span className={`text-sm ${
                alert.type === 'error' ? 'text-destructive' : 'text-warning'
              }`}>
                {alert.message}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}