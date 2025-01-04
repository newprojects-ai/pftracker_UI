import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ImportStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Imports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12 today</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Successful</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">11</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Failed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">1</div>
        </CardContent>
      </Card>
    </div>
  )
}