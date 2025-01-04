import { MainLayout } from "./components/layout/MainLayout"
import { DashboardView } from "./views/DashboardView"

function App() {
  return (
    <MainLayout>
      <DashboardView />
    </MainLayout>
  )
}

export default App