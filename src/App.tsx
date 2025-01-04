import { MainLayout } from "./components/layout/MainLayout"
import { HomeView } from "./views/HomeView"
import { HoldingsView } from "./views/HoldingsView"
import { ThemeView } from "./views/ThemeView"
import { ExpiryCalendarView } from "./views/ExpiryCalendarView"
import { WarrantDetailView } from "./views/WarrantDetailView"
import { ThemeAnalysisView } from "./views/ThemeAnalysisView"
import { ReportGenerationView } from "./views/ReportGenerationView"
import { ImportHistoryView } from "./views/ImportHistoryView"
import { ImportDataView } from "./views/ImportDataView"
import { SettingsView } from "./views/SettingsView"
import { MarketDataStatusView } from "./views/MarketDataStatusView"
import { AlertCenterView } from "./views/AlertCenterView"
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
      {currentPath === '/themes' && <ThemeView />}
      {currentPath === '/expiry-calendar' && <ExpiryCalendarView />}
      {currentPath === '/warrant-detail' && <WarrantDetailView />}
      {currentPath === '/theme-analysis' && <ThemeAnalysisView />}
      {currentPath === '/reports' && <ReportGenerationView />}
      {currentPath === '/import-history' && <ImportHistoryView />}
      {currentPath === '/import' && <ImportDataView />}
      {currentPath === '/settings' && <SettingsView />}
      {currentPath === '/market-data' && <MarketDataStatusView />}
      {currentPath === '/alerts' && <AlertCenterView />}
    </MainLayout>
  )
}

export default App