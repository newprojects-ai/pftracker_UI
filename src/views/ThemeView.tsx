import { ThemeOverview } from "@/components/themes/ThemeOverview"
import { ThemeTable } from "@/components/themes/ThemeTable"
import { ThemeAssignment } from "@/components/themes/ThemeAssignment"

export function ThemeView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Theme Management</h2>
      <ThemeOverview />
      <ThemeTable />
      <ThemeAssignment />
    </div>
  )
}