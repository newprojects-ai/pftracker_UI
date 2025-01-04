import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const positionData = {
  symbol: "AAPL",
  quantity: 100,
  averageCost: 150.25,
  marketValue: 17500,
  totalReturn: 16.5,
}

const marketData = {
  currentPrice: 175.00,
  dayChange: { value: 2.50, percent: 1.45 },
  high52w: 182.50,
  low52w: 132.75,
  volume: "52.3M",
}

const themeData = {
  category: "Technology",
  theme: "Software",
  subTheme: "Mobile",
}

export function HoldingDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Position Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Symbol</dt>
              <dd className="text-sm font-medium">{positionData.symbol}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Quantity</dt>
              <dd className="text-sm font-medium">{positionData.quantity}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Average Cost</dt>
              <dd className="text-sm font-medium">${positionData.averageCost}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Market Value</dt>
              <dd className="text-sm font-medium">${positionData.marketValue}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Total Return</dt>
              <dd className="text-sm font-medium text-success">+{positionData.totalReturn}%</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Market Data</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Current Price</dt>
              <dd className="text-sm font-medium">${marketData.currentPrice}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Day Change</dt>
              <dd className="text-sm font-medium text-success">
                +${marketData.dayChange.value} (+{marketData.dayChange.percent}%)
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">52W High</dt>
              <dd className="text-sm font-medium">${marketData.high52w}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">52W Low</dt>
              <dd className="text-sm font-medium">${marketData.low52w}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Volume</dt>
              <dd className="text-sm font-medium">{marketData.volume}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Theme Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Category</dt>
              <dd className="text-sm font-medium">{themeData.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Theme</dt>
              <dd className="text-sm font-medium">{themeData.theme}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted-foreground">Sub-theme</dt>
              <dd className="text-sm font-medium">{themeData.subTheme}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}