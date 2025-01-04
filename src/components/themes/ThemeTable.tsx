import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const headers = [
  "Theme",
  "Sub-theme",
  "Holdings",
  "Value",
  "Allocation %",
  "Performance",
]

const mockData = [
  {
    theme: "Technology",
    subTheme: "Software",
    holdings: 8,
    value: "£250,000",
    allocation: "14%",
    performance: "+12.5%",
  },
  {
    theme: "Technology",
    subTheme: "Hardware",
    holdings: 7,
    value: "£200,000",
    allocation: "11%",
    performance: "+18.2%",
  },
]

export function ThemeTable() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Theme Details</h3>
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
          {mockData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.theme}</TableCell>
              <TableCell>{row.subTheme}</TableCell>
              <TableCell>{row.holdings}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell>{row.allocation}</TableCell>
              <TableCell className="text-success">{row.performance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}