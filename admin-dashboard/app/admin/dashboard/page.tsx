"use client"

import { UserActivityDashboard } from "@/components/admin/UserActivityDashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/Overview"
import { UserActivity } from "@/components/dashboard/UserActivity"
import { MarketPerformance } from "@/components/dashboard/MarketPerformance"
import { FinancialAnalytics } from "@/components/dashboard/FinancialAnalytics"
import { RiskAndSecurity } from "@/components/dashboard/RiskAndSecurity"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

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
    </div>
  )
}

