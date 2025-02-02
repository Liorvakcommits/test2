"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "./dashboard/Overview"
import { UserActivity } from "./dashboard/UserActivity"
import { MarketPerformance } from "./dashboard/MarketPerformance"
import { FinancialAnalytics } from "./dashboard/FinancialAnalytics"
import { RiskAndSecurity } from "./dashboard/RiskAndSecurity"
import { AlertsPanel } from "./dashboard/AlertsPanel"
import { PersonalizationModal } from "./dashboard/PersonalizationModal"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function Dashboard() {
  const [showPersonalizationModal, setShowPersonalizationModal] = useState(false)

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Advanced Prediction & Trading Dashboard</h1>
        <Button onClick={() => setShowPersonalizationModal(true)}>
          <Settings className="mr-2 h-4 w-4" /> Customize Dashboard
        </Button>
      </div>

      <AlertsPanel />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="user-activity">User Activity</TabsTrigger>
          <TabsTrigger value="market-performance">Market Performance</TabsTrigger>
          <TabsTrigger value="financial-analytics">Financial Analytics</TabsTrigger>
          <TabsTrigger value="risk-security">Risk & Security</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="p-6">
            <Overview />
          </Card>
        </TabsContent>

        <TabsContent value="user-activity">
          <Card className="p-6">
            <UserActivity />
          </Card>
        </TabsContent>

        <TabsContent value="market-performance">
          <Card className="p-6">
            <MarketPerformance />
          </Card>
        </TabsContent>

        <TabsContent value="financial-analytics">
          <Card className="p-6">
            <FinancialAnalytics />
          </Card>
        </TabsContent>

        <TabsContent value="risk-security">
          <Card className="p-6">
            <RiskAndSecurity />
          </Card>
        </TabsContent>
      </Tabs>

      <PersonalizationModal isOpen={showPersonalizationModal} onClose={() => setShowPersonalizationModal(false)} />
    </div>
  )
}

