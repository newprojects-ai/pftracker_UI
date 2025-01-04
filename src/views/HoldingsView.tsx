import { HoldingsFilter } from "@/components/holdings/HoldingsFilter"
import { HoldingsGrid } from "@/components/holdings/HoldingsGrid"
import { HoldingDetails } from "@/components/holdings/HoldingDetails"
import { TransactionHistory } from "@/components/holdings/TransactionHistory"
import { PerformanceChart } from "@/components/holdings/PerformanceChart"

export function HoldingsView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Holdings Dashboard</h2>
      <HoldingsFilter />
      <HoldingsGrid />
      <HoldingDetails />
      <TransactionHistory />
      <PerformanceChart />
    </div>
  )
}