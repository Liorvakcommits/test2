"use client"

import { useState } from "react"
import Image from "next/image"
import { MarketHeader } from "@/components/markets/MarketHeader"
import { MarketChart } from "@/components/markets/MarketChart"
import { TradingInterface } from "@/components/markets/TradingInterface"
import { OrderBook } from "@/components/markets/OrderBook"
import { AIAnalysis } from "@/components/markets/AIAnalysis"
import { MarketTabs } from "@/components/markets/MarketTabs"
import type { MarketData, TimeFrame } from "@/types/market"

// Mock data - would come from API
const marketData: MarketData = {
  id: "putin-trump-meeting",
  title: "Will Putin meet with Trump in first 100 days?",
  description: "Market for predicting a potential meeting between Putin and Trump within the first 100 days",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic.jpg-lvUhXJtm79m2nUrTQ5iSLIxSR9bQIa.jpeg",
  endDate: "2025-04-29",
  volume: 1225671,
  createdBy: {
    name: "Open Source Intel",
    avatar: "/placeholder.svg",
    verified: true,
  },
  currentPrice: 0.54,
  priceChange: 0.05,
  outcomes: {
    yes: {
      price: 0.54,
      label: "Yes",
    },
    no: {
      price: 0.46,
      label: "No",
    },
  },
  rules: {
    description:
      'This market will resolve to "Yes" if Vladimir Putin meets with Donald Trump between December 19, 2024, and April 29, 2025.',
    resolution: "Resolution will be based on credible media reports and official statements.",
    additionalInfo: "Virtual meetings do not count. The meeting must be in-person and documented by credible sources.",
  },
  chartData: [
    { timestamp: 1703116800000, price: 0.52 },
    { timestamp: 1703203200000, price: 0.54 },
    { timestamp: 1703289600000, price: 0.53 },
    { timestamp: 1703376000000, price: 0.55 },
    { timestamp: 1703462400000, price: 0.54 },
  ],
}

export default function MarketPage() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1D")

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column - Chart and Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex gap-6 items-start">
            <div className="w-40 h-32 relative rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
              <Image
                src={marketData.image || "/placeholder.svg"}
                alt={marketData.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex-grow">
              <MarketHeader market={marketData} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <MarketChart data={marketData.chartData} timeFrame={timeFrame} onTimeFrameChange={setTimeFrame} />
          </div>

          <OrderBook yesOrders={[]} noOrders={[]} />
          <AIAnalysis marketQuestion={marketData.title} />
          <MarketTabs market={marketData} />
        </div>

        {/* Right column - Trading Interface */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <TradingInterface market={marketData} />
          </div>
        </div>
      </div>
    </div>
  )
}

