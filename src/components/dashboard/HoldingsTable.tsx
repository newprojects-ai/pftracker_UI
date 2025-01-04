import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const headers = [
  "Symbol",
  "Quantity",
  "Avg Cost",
  "Current Price",
  "Market Value",
  "P/L",
  "% Return",
]

export function HoldingsTable() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Holdings Overview</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Add table rows here when data is available */}
        </TableBody>
      </Table>
    </div>
  )
}