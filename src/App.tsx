import './App.css'
import { MainLayout } from './components/layout/MainLayout'
import { SummaryCards } from './components/dashboard/SummaryCards'
import { PortfolioCharts } from './components/dashboard/PortfolioCharts'
import { HoldingsGrid } from './components/holdings/HoldingsGrid'
import { DataImport } from './components/import/DataImport'

function App() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="space-y-6">
        <SummaryCards />
        <PortfolioCharts />
        <HoldingsGrid />
        <DataImport />
      </div>
    </MainLayout>
  )
}