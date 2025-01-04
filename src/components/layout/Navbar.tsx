import { ThemeToggle } from "./ThemeToggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Portfolio Manager</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-primary" href="/holdings">Holdings</a>
            <a className="transition-colors hover:text-primary" href="/themes">Themes</a>
            <a className="transition-colors hover:text-primary" href="/warrants">Warrants</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}