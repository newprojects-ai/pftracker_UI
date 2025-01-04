import { ReactNode } from "react"
import { Navbar } from "./Navbar"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="container py-6">
        {children}
      </main>
    </div>
  )
}