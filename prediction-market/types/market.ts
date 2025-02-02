export interface MarketData {
  id: string
  title: string
  description: string
  endDate: string
  volume: number
  createdBy: {
    name: string
    avatar: string
    verified: boolean
  }
  currentPrice: number
  priceChange: number
  outcomes: {
    yes: {
      price: number
      label: string
    }
    no: {
      price: number
      label: string
    }
  }
  rules: {
    description: string
    resolution: string
    additionalInfo?: string
  }
  chartData: Array<{
    timestamp: number
    price: number
  }>
}

export type TimeFrame = "1H" | "6H" | "1D" | "1W" | "1M" | "ALL"

