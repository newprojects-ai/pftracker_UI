import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const performanceData = [
  { date: '2023-06', value: 100000 },
  { date: '2023-07', value: 105000 },
  { date: '2023-08', value: 103000 },
  { date: '2023-09', value: 108000 },
  { date: '2023-10', value: 115000 },
  { date: '2023-11', value: 112000 },
  { date: '2023-12', value: 124750 },
]

export function PerformanceChart() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance History</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}