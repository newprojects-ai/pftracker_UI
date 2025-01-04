import { ImportStats } from "@/components/import/ImportStats"
import { DataImport } from "@/components/import/DataImport"
import { ImportHistory } from "@/components/import/ImportHistory"

export function ImportDataView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Import Data</h2>
      <ImportStats />
      <DataImport />
      <ImportHistory />
    </div>
  )
}