import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { MarketData } from "@/types/market"

interface MarketInfoProps {
  market: MarketData
}

export function MarketInfo({ market }: MarketInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!market.rules) {
    return (
      <Card className="p-6">
        <p className="text-gray-600">No rules available for this market.</p>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Rules</h2>
          <div className="space-y-4">
            <p className="text-gray-600">{market.rules.description}</p>
            {isExpanded && (
              <>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Resolution</h3>
                  <p className="text-gray-600">{market.rules.resolution}</p>
                </div>
                {market.rules.additionalInfo && (
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Additional Information</h3>
                    <p className="text-gray-600">{market.rules.additionalInfo}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <Button variant="outline" className="w-full" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Show more details
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}

