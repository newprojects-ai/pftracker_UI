import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="flex gap-6">
        <Tabs defaultValue="general" className="flex-1">
          <div className="flex gap-6">
            <TabsList className="flex flex-col h-auto p-0 bg-transparent w-64">
              <TabsTrigger
                value="general"
                className="justify-start w-full px-6 py-3 data-[state=active]:bg-accent"
              >
                General
              </TabsTrigger>
              <TabsTrigger
                value="display"
                className="justify-start w-full px-6 py-3 data-[state=active]:bg-accent"
              >
                Display
              </TabsTrigger>
              <TabsTrigger
                value="data"
                className="justify-start w-full px-6 py-3 data-[state=active]:bg-accent"
              >
                Data Preferences
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="justify-start w-full px-6 py-3 data-[state=active]:bg-accent"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="api"
                className="justify-start w-full px-6 py-3 data-[state=active]:bg-accent"
              >
                API Configuration
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 p-6 border rounded-lg">
              <TabsContent value="general" className="m-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Account</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Username</label>
                        <Input value="john.doe@example.com" readOnly />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Default Currency</label>
                        <Select defaultValue="gbp">
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button>Save Changes</Button>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}