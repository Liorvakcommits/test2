import { Badge } from "@/components/ui/badge"

const trendingMarkets = [
  { name: "Bitcoin Price Prediction 2024", comments: 1234, sentiment: "positive" },
  { name: "US Presidential Election 2024", comments: 987, sentiment: "neutral" },
  { name: "Tesla Stock Performance", comments: 765, sentiment: "negative" },
]

export function TrendingDiscussions() {
  return (
    <ul className="space-y-4">
      {trendingMarkets.map((market, index) => (
        <li key={index} className="flex items-center justify-between">
          <span className="font-medium">{market.name}</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{market.comments} comments</span>
            <Badge variant={market.sentiment as "default" | "secondary" | "destructive"}>{market.sentiment}</Badge>
          </div>
        </li>
      ))}
    </ul>
  )
}

