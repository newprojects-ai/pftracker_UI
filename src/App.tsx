import './index.css'
import { cn } from '@/lib/utils'

function App() {
  return (
    <div className={cn(
      "min-h-screen bg-background",
      "p-8 container mx-auto"
    )}>
      <h1 className="text-4xl font-bold text-foreground mb-8">Portfolio Manager</h1>
      <div className="grid gap-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="text-muted-foreground">
            Track and manage your investment portfolio with ease.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App