import { Briefcase, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ThemeCardProps {
  name: string
  holdings: number
  value: string
  allocation: string
  trend: number
}

function ThemeCard({ name, holdings, value, allocation, trend }: ThemeCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Briefcase className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div>{holdings} Holdings</div>
          <div>{allocation} Allocation</div>
          <div className="flex items-center">
            <TrendingUp className="mr-1 h-3 w-3" />
            {trend}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const themeData = [
  {
    name: "Technology",
    holdings: 15,
    value: "£450,000",
    allocation: "25%",
    trend: 15.4,
  },
  {
    name: "Healthcare",
    holdings: 8,
    value: "£320,000",
    allocation: "18%",
    trend: 11.2,
  },
  {
    name: "Clean Energy",
    holdings: 12,
    value: "£280,000",
    allocation: "15%",
    trend: 8.7,
  },
]

export function ThemeOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {themeData.map((theme) => (
        <ThemeCard key={theme.name} {...theme} />
      ))}
    </div>
  )
}