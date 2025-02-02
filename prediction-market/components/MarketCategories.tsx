"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, Search, ChevronRight } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const categories = [
  { id: "new", label: "New" },
  { id: "breaking", label: "Breaking News" },
  { id: "trump", label: "Trump Presidency" },
  { id: "deepseek", label: "DeepSeek" },
  { id: "fed", label: "Fed Rates" },
  { id: "cabinet", label: "Cabinet" },
  { id: "tiktok", label: "TikTok" },
  { id: "trump100", label: "Trump 100 Days" },
  { id: "ai", label: "AI" },
  { id: "superbowl", label: "Super Bowl" },
  { id: "crypto", label: "Crypto" },
  { id: "tech", label: "Tech" },
]

export function MarketCategories() {
  return (
    <div className="border-b border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-14">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 min-w-[100px]"
          >
            <TrendingUp className="h-4 w-4" />
            Top
          </Button>

          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search by market" className="pl-10 border-gray-100 bg-transparent" />
          </div>

          <ScrollArea className="flex-1">
            <div className="flex items-center gap-2">
              {categories.map((category) => (
                <Button key={category.id} variant="ghost" className="whitespace-nowrap hover:bg-gray-50">
                  {category.label}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Button variant="ghost" className="flex-shrink-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

