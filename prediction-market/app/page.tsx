"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PredictionCard } from "@/components/PredictionCard"
import { PromoCards } from "@/components/PromoCards"
import { MarketCategories } from "@/components/MarketCategories"
import { LayoutGrid, LineChart, Trophy } from "lucide-react"
import { DepositDialog } from "@/components/DepositDialog" // Ensure this path is correct or update it to the correct path

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
  const [isDepositOpen, setIsDepositOpen] = useState(false)

  const handleShowMore = () => {
    setVisibleMarkets((prev) => Math.min(prev + 4, mockMarkets.length))
  }

  const openDepositDialog = () => setIsDepositOpen(true)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold flex items-end relative">
                MarkeTrends
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full absolute -bottom-0.5 -right-2"></span>
              </Link>
              <div className="w-[320px]">
                <Input type="search" placeholder="Search markets..." className="w-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost">
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Markets
                </Button>
                <Button variant="ghost">
                  <LineChart className="h-4 w-4 mr-2" />
                  Charts
                </Button>
                <Button variant="ghost">
                  <Trophy className="h-4 w-4 mr-2" />
                  Rewards
                </Button>
              </div>
              <div className="flex items-center gap-2 border-l pl-4">
                <div className="text-right">
                  <div className="font-medium">$1,234.56</div>
                  <div className="text-sm text-muted-foreground">$789.10</div>
                </div>
                <Button onClick={openDepositDialog}>Deposit</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <PromoCards />
        <div className="mt-2 mb-3">
          <MarketCategories />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Popular Markets</h1>
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
      </main>
      <DepositDialog open={isDepositOpen} onOpenChange={setIsDepositOpen} balance="789.10" />
    </div>
  )
}



