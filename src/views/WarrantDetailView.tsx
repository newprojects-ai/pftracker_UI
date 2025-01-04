import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockPriceHistory = [
  { date: '2023-01', price: 1.5 },
  { date: '2023-02', price: 1.8 },
  { date: '2023-03', price: 1.6 },
  { date: '2023-04', price: 2.0 },
  { date: '2023-05', price: 2.2 },
  { date: '2023-06', price: 2.0 },
]

export function WarrantDetailView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">AAPL.WR $150 Call</h2>
          <p className="text-muted-foreground">Expires: December 31, 2024</p>
        </div>
        <Button>Trade</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Position Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Quantity</dt>
                <dd className="font-medium">100</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Average Cost</dt>
                <dd className="font-medium">£1.50</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Current Price</dt>
                <dd className="font-medium">£2.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Total Value</dt>
                <dd className="font-medium">£200.00</dd>
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
                <dt className="text-muted-foreground">Underlying Price</dt>
                <dd className="font-medium">$145.23</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Strike Price</dt>
                <dd className="font-medium">$150.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Days to Expiry</dt>
                <dd className="font-medium">45</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Implied Vol</dt>
                <dd className="font-medium">32%</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Price History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockPriceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}