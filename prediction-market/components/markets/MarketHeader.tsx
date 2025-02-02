import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bookmark, Share2, CheckCircle } from "lucide-react"
import type { MarketData } from "@/types/market"

interface MarketHeaderProps {
  market: MarketData
}

export function MarketHeader({ market }: MarketHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">{market.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Created by</span>
            <div className="flex items-center gap-1">
              <Avatar className="h-5 w-5">
                <AvatarImage src={market.createdBy.avatar} />
                <AvatarFallback>OS</AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-900">{market.createdBy.name}</span>
              {market.createdBy.verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Badge variant="secondary" className="text-sm">
          ${market.volume.toLocaleString()} Vol.
        </Badge>
        <Badge variant="secondary" className="text-sm">
          Ends {new Date(market.endDate).toLocaleDateString()}
        </Badge>
      </div>
    </div>
  )
}

