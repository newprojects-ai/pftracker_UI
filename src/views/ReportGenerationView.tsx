import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const REPORT_SECTIONS = [
  { id: "summary", label: "Summary" },
  { id: "performance", label: "Performance Analysis" },
  { id: "holdings", label: "Holdings Breakdown" },
]

export function ReportGenerationView() {
  const [selectedSections, setSelectedSections] = useState<string[]>(["summary"])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Report Generation</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Report Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Report Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portfolio">Portfolio Performance</SelectItem>
                  <SelectItem value="holdings">Holdings Report</SelectItem>
                  <SelectItem value="tax">Tax Report</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <Input type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Group By</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select grouping" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asset">Asset Type</SelectItem>
                  <SelectItem value="theme">Theme</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Format</label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Include Sections</label>
              <div className="space-y-2">
                {REPORT_SECTIONS.map((section) => (
                  <div key={section.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={section.id}
                      checked={selectedSections.includes(section.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedSections([...selectedSections, section.id])
                        } else {
                          setSelectedSections(selectedSections.filter(id => id !== section.id))
                        }
                      }}
                    />
                    <label
                      htmlFor={section.id}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {section.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">Generate Report</Button>
          </CardContent>
        </Card>

        {/* Preview Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] bg-muted/50 flex items-center justify-center text-muted-foreground">
              Preview will appear here
            </div>
            <div className="mt-4 flex gap-4">
              <Button variant="outline">Download</Button>
              <Button variant="outline">Print</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}