import { CircleDollarSign, TrendingUp, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const summaryData = [
  {
    title: "Total Portfolio Value",
    value: "£1,234,567",
    icon: CircleDollarSign,
  },
  {
    title: "Day's Change",
    value: "+£12,345 (+1.2%)",
    icon: TrendingUp,
    positive: true,
  },
  {
    title: "Total Assets",
    value: "28",
    icon: Briefcase,
  },
]

export function PortfolioSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {summaryData.map((item) => (
        <Card key={item.title}>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </p>
                <p className={`text-2xl font-bold mt-2 ${
                  'positive' in item ? 'text-success' : ''
                }`}>
                  {item.value}
                </p>
              </div>
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}