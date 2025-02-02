"use client"

import { Progress } from "@/components/ui/progress"

export function MarketSentiment() {
  return (
    <div className="space-y-4">
      <Progress value={65} className="w-full h-4" />
      <div className="flex justify-between">
        <span className="text-red-500">Bearish</span>
        <span className="font-bold">65%</span>
        <span className="text-green-500">Bullish</span>
      </div>
    </div>
  )
}

