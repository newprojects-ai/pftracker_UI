import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const dataProviders = [
  {
    name: "NYSE Data Feed",
    status: "online",
    lastUpdate: "2 seconds ago",
    latency: "150ms",
  },
  {
    name: "NASDAQ Data Feed",
    status: "online",
    lastUpdate: "5 seconds ago",
    latency: "180ms",
  },
  {
    name: "Crypto Data Feed",
    status: "error",
    lastUpdate: "5 minutes ago",
    error: "Connection Error",
  },
]

const systemLogs = [
  {
    type: "error",
    timestamp: "12:45:23",
    message: "Crypto Feed Connection Failed",
  },
  {
    type: "info",
    timestamp: "12:45:20",
    message: "NYSE Feed Data Updated",
  },
  {
    type: "info",
    timestamp: "12:45:15",
    message: "NASDAQ Feed Data Updated",
  },
]

export function MarketDataStatusView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Market Data Status</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Systems Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5/6</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Latency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">235ms</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">0.02%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Data Provider Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="flex items-start justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={provider.status === 'online' ? 'success' : 'destructive'}
                      >
                        {provider.status}
                      </Badge>
                      <span className="font-medium">{provider.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last Update: {provider.lastUpdate}
                    </div>
                    {provider.latency && (
                      <div className="text-sm text-muted-foreground">
                        Latency: {provider.latency}
                      </div>
                    )}
                    {provider.error && (
                      <div className="text-sm text-destructive">
                        {provider.error}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Log</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] rounded-md border p-4">
              <div className="space-y-4">
                {systemLogs.map((log, index) => (
                  <div key={index} className="space-y-1">
                    <div className={`text-sm ${
                      log.type === 'error' ? 'text-destructive' : 'text-muted-foreground'
                    }`}>
                      [{log.timestamp}] {log.message}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}