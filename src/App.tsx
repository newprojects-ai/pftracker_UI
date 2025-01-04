import { MainLayout } from "./components/layout/MainLayout"
import { HomeView } from "./views/HomeView"
import { HoldingsView } from "./views/HoldingsView"
import { useEffect, useState } from "react"

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  return (
    <MainLayout>
      {currentPath === '/' && <HomeView />}
      {currentPath === '/holdings' && <HoldingsView />}
    </MainLayout>
  )
}

export default App