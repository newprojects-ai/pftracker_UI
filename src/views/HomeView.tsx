import { PortfolioSummary } from "@/components/home/PortfolioSummary"
import { QuickActions } from "@/components/home/QuickActions"
import { ActivityFeed } from "@/components/home/ActivityFeed"
import { AlertsList } from "@/components/home/AlertsList"
import { AssetAllocation } from "@/components/home/AssetAllocation"

export function HomeView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Portfolio Overview</h2>
      <PortfolioSummary />
      <QuickActions />
      <div className="grid gap-6 md:grid-cols-2">
        <ActivityFeed />
        <AlertsList />
      </div>
      <AssetAllocation />
    </div>
  )
}