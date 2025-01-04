import { useCallback, useMemo } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

interface Holding {
  symbol: string
  quantity: number
  averageCost: number
  marketValue: number
  unrealizedPnL: number
  unrealizedPnLPercent: number
}

const columnHelper = createColumnHelper<Holding>()

const columns = [
  columnHelper.accessor('symbol', {
    header: 'Symbol',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('quantity', {
    header: 'Quantity',
    cell: info => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor('averageCost', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Avg Cost
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: info => `$${info.getValue().toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
  }),
  columnHelper.accessor('marketValue', {
    header: 'Market Value',
    cell: info => `$${info.getValue().toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
  }),
  columnHelper.accessor('unrealizedPnL', {
    header: 'Unrealized P&L',
    cell: info => {
      const value = info.getValue()
      const color = value >= 0 ? 'text-success' : 'text-danger'
      return <span className={color}>${Math.abs(value).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
    },
  }),
  columnHelper.accessor('unrealizedPnLPercent', {
    header: 'P&L %',
    cell: info => {
      const value = info.getValue()
      const color = value >= 0 ? 'text-success' : 'text-danger'
      return <span className={color}>{value.toFixed(2)}%</span>
    },
  }),
]

// Mock data - replace with real data later
const mockData: Holding[] = [
  {
    symbol: 'AAPL',
    quantity: 100,
    averageCost: 150.25,
    marketValue: 17500,
    unrealizedPnL: 2525,
    unrealizedPnLPercent: 16.85,
  },
  {
    symbol: 'MSFT',
    quantity: 50,
    averageCost: 280.50,
    marketValue: 15000,
    unrealizedPnL: -1025,
    unrealizedPnLPercent: -7.32,
  },
]

export function HoldingsGrid() {
  const [sorting, setSorting] = useMemo(() => [], [])
  const data = useMemo(() => mockData, [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="rounded-md border">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border-b px-4 py-3 text-left font-medium">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b last:border-none hover:bg-muted/50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}