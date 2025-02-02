"use client"

import { useState } from "react"
import { PredictionCard } from "@/components/PredictionCard"
import { Button } from "@/components/ui/button"
import { PromoCards } from "@/components/PromoCards"
import { MarketCategories } from "@/components/MarketCategories"

const mockMarkets = [
  {
    id: "putin-trump-meeting",
    title: "Will Putin meet with Trump in first 100 days?",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic.jpg-lvUhXJtm79m2nUrTQ5iSLIxSR9bQIa.jpeg",
    price: 0.54,
    volume: 1225671,
    endDate: "2025-04-29",
    priceChange: 0.05,
    chance: 54,
  },
  {
    id: "ai-regulation-2024",
    title: "Will major AI regulation be passed in 2024?",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-3-July-2024-dsk-e8nFFiWHagTkLExtuBPC4cO7WVfXLH.webp",
    price: 0.72,
    volume: 890000,
    endDate: "2024-12-31",
    priceChange: -0.02,
    chance: 72,
  },
  {
    id: "spacex-mars-2026",
    title: "Will SpaceX land humans on Mars by 2026?",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sx.jpg-ULjSxM3xNQ3i33LG3PT2bYCQO2TRhk.jpeg",
    price: 0.31,
    volume: 1500000,
    endDate: "2026-12-31",
    priceChange: 0.01,
    chance: 31,
  },
  {
    id: "bitcoin-100k",
    title: "Will Bitcoin reach $100,000 by end of 2024?",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bit.jpg-HubUksHzfpbhqO7hut34k9kGsaLdDR.jpeg",
    price: 0.45,
    volume: 2100000,
    endDate: "2024-12-31",
    priceChange: 0.03,
    chance: 45,
  },
  // Additional markets that will be loaded with "Show More"
  {
    id: "market-5",
    title: "Will India successfully land on the Moon's south pole?",
    image: "/placeholder.svg?height=200&width=300",
    price: 0.82,
    volume: 750000,
    endDate: "2024-08-31",
    priceChange: 0.04,
    chance: 82,
  },
  {
    id: "market-6",
    title: "Will Apple release a foldable device in 2024?",
    image: "/placeholder.svg?height=200&width=300",
    price: 0.28,
    volume: 980000,
    endDate: "2024-12-31",
    priceChange: -0.03,
    chance: 28,
  },
  {
    id: "market-7",
    title: "Will Tesla achieve full self-driving by 2025?",
    image: "/placeholder.svg?height=200&width=300",
    price: 0.61,
    volume: 1350000,
    endDate: "2025-12-31",
    priceChange: 0.02,
    chance: 61,
  },
  {
    id: "market-8",
    title: "Will Meta launch a new VR headset in 2024?",
    image: "/placeholder.svg?height=200&width=300",
    price: 0.75,
    volume: 680000,
    endDate: "2024-12-31",
    priceChange: 0.01,
    chance: 75,
  },
]

export default function Home() {
  const [visibleMarkets, setVisibleMarkets] = useState(4)

  const handleShowMore = () => {
    setVisibleMarkets((prev) => Math.min(prev + 4, mockMarkets.length))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 py-3">
        <PromoCards />
        <div className="mt-2 mb-3">
          <MarketCategories />
        </div>
        <h1 className="text-2xl font-bold mb-6">Popular Markets</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockMarkets.slice(0, visibleMarkets).map((market) => (
            <PredictionCard key={market.id} {...market} />
          ))}
        </div>
        {visibleMarkets < mockMarkets.length && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleShowMore}
              className="min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

