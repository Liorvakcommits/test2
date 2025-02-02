"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { MarketInfo } from "./MarketInfo"
import type { MarketData } from "@/types/market"

interface MarketTabsProps {
  market: MarketData
}

export function MarketTabs({ market }: MarketTabsProps) {
  return (
    <Tabs defaultValue="rules" className="w-full">
      <TabsList>
        <TabsTrigger value="rules">Rules</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="positions">Positions</TabsTrigger>
      </TabsList>

      <TabsContent value="rules">
        <MarketInfo market={market} />
      </TabsContent>

      <TabsContent value="comments">
        <Card className="p-6">
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        </Card>
      </TabsContent>

      <TabsContent value="activity">
        <Card className="p-6">
          <p className="text-gray-500">Recent market activity will appear here.</p>
        </Card>
      </TabsContent>

      <TabsContent value="positions">
        <Card className="p-6">
          <p className="text-gray-500">Your positions will appear here.</p>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

