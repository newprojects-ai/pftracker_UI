import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const portfolioHistory = [
  { date: '2023-01', value: 100000 },
  { date: '2023-02', value: 105000 },
  { date: '2023-03', value: 103000 },
  { date: '2023-04', value: 108000 },
  { date: '2023-05', value: 115000 },
  { date: '2023-06', value: 124750 },
]

const allocation = [
  { name: 'Stocks', value: 60 },
  { name: 'Bonds', value: 20 },
  { name: 'Cash', value: 10 },
  { name: 'Other', value: 10 },
]

const COLORS = ['#2563eb', '#16a34a', '#d97706', '#dc2626']

export function PortfolioCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold mb-4">Portfolio Value Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold mb-4">Asset Allocation</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allocation}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {allocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}