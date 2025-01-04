import { Settings } from "lucide-react"
import { Button } from "../ui/button"

export function Navbar() {
  return (
    <header className="h-16 border-b bg-card">
      <div className="h-full container flex items-center justify-between">
        <h1 className="text-xl font-semibold">Portfolio Management System</h1>
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </header>
  )
}