import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react'

interface SummaryCardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

function SummaryCard({ title, value, icon, trend }: SummaryCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          {trend && (
            <p className={`mt-1 text-sm ${trend.isPositive ? 'text-success' : 'text-danger'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
    </div>
  )
}

export function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <SummaryCard
        title="Total Portfolio Value"
        value="$124,750.00"
        icon={<DollarSign className="h-6 w-6" />}
        trend={{ value: 2.5, isPositive: true }}
      />
      <SummaryCard
        title="Day's Change"
        value="$1,250.00"
        icon={<TrendingUp className="h-6 w-6" />}
        trend={{ value: 1.2, isPositive: true }}
      />
      <SummaryCard
        title="Total P&L"
        value="$12,450.00"
        icon={<TrendingDown className="h-6 w-6" />}
        trend={{ value: 11.5, isPositive: true }}
      />
      <SummaryCard
        title="Number of Holdings"
        value="15"
        icon={<PieChart className="h-6 w-6" />}
      />
    </div>
  )
}