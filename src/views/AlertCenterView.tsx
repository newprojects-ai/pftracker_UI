import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const alertCategories = [
  { id: "price", label: "Price Alerts", count: 5 },
  { id: "expiry", label: "Expirations", count: 3 },
  { id: "system", label: "System Status", count: 2 },
  { id: "data", label: "Data Updates", count: 4 },
]

const alerts = [
  {
    id: 1,
    priority: "high",
    message: "AAPL price above $180 threshold",
    timestamp: "2 minutes ago",
    category: "price",
  },
  {
    id: 2,
    priority: "medium",
    message: "TSLA.WR expires in 7 days",
    timestamp: "15 minutes ago",
    category: "expiry",
  },
]

export function AlertCenterView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Alert Center</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertCategories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={category.id} defaultChecked />
                  <label
                    htmlFor={category.id}
                    className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label} ({category.count})
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 border rounded-lg space-y-2 ${
                    alert.priority === 'high'
                      ? 'border-destructive'
                      : alert.priority === 'medium'
                      ? 'border-warning'
                      : 'border-primary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        alert.priority === 'high'
                          ? 'destructive'
                          : alert.priority === 'medium'
                          ? 'warning'
                          : 'default'
                      }
                    >
                      {alert.priority} Priority
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Dismiss
                    </Button>
                  </div>
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}