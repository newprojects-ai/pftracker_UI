import { Upload } from "lucide-react"
import { Button } from "../ui/button"

export function ImportSection() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Import Transactions</h3>
        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            Drag & Drop Files Here
          </p>
          <p className="text-xs text-muted-foreground">or click to select files</p>
          <Button variant="outline" className="mt-4">
            Select Files
          </Button>
        </div>
      </div>
    </div>
  )
}