import { LayoutDashboard, PieChart, Upload, LineChart, Calendar, Tags, BarChart, FileText, History, Settings, Activity, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, current: true },
  { name: "Holdings", href: "/holdings", icon: PieChart, current: false },
  { name: "Themes", href: "/themes", icon: Tags, current: false },
  { name: "Expiry Calendar", href: "/expiry-calendar", icon: Calendar, current: false },
  { name: "Theme Analysis", href: "/theme-analysis", icon: BarChart, current: false },
  { name: "Reports", href: "/reports", icon: FileText, current: false },
  { name: "Import History", href: "/import-history", icon: History, current: false },
  { name: "Market Data", href: "/market-data", icon: Activity, current: false },
  { name: "Alert Center", href: "/alerts", icon: Bell, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
  { name: "Import Data", href: "/import", icon: Upload, current: false },
  { name: "Market Data", href: "/market", icon: LineChart, current: false },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-card border-r min-h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md",
              item.current
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  )
}