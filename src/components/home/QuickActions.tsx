import { PieChart, Upload, Tags } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  { label: "View Holdings", icon: PieChart, href: "/holdings" },
  { label: "Import Data", icon: Upload, href: "/import" },
  { label: "Add Theme", icon: Tags, href: "/themes" },
]

export function QuickActions() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="flex gap-4">
        {actions.map((action) => (
          <Button
            key={action.label}
            className="flex items-center gap-2"
            asChild
          >
            <a href={action.href}>
              <action.icon className="h-4 w-4" />
              {action.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}