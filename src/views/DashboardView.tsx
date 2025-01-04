import { SummaryCards } from "@/components/dashboard/SummaryCards"
import { HoldingsTable } from "@/components/dashboard/HoldingsTable"
import { ImportSection } from "@/components/dashboard/ImportSection"

export function DashboardView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <SummaryCards />
      <HoldingsTable />
      <ImportSection />
    </div>
  )
}