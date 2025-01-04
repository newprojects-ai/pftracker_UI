import { CircleDollarSign, TrendingUp, Percent } from "lucide-react"
import { cn } from "@/lib/utils"

const summaryData = [
  {
    title: "Total Portfolio Value",
    value: "£1,234,567",
    icon: CircleDollarSign,
    color: "border-blue-500",
  },
  {
    title: "Day's Change",
    value: "+£12,345",
    icon: TrendingUp,
    color: "border-green-500",
  },
  {
    title: "Total Return",
    value: "+15.4%",
    icon: Percent,
    color: "border-orange-500",
  },
]

export function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {summaryData.map((card) => (
        <div
          key={card.title}
          className={cn(
            "p-6 rounded-lg border-l-4 bg-card",
            card.color
          )}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {card.title}
              </p>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
            </div>
            <card.icon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      ))}
    </div>
  )
}