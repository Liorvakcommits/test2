"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { format } from "date-fns"
import type { MarketData } from "@/types/market"

type OrderType = "market" | "limit" | "amm"

interface TradingInterfaceProps {
  market: MarketData
}

export function TradingInterface({ market }: TradingInterfaceProps) {
  const [orderType, setOrderType] = useState<OrderType>("market")
  const [amount, setAmount] = useState("")
  const [limitPrice, setLimitPrice] = useState("")
  const [selectedOutcome, setSelectedOutcome] = useState<"yes" | "no">("yes")
  const [expirationDate, setExpirationDate] = useState<Date>()
  const [useExpiration, setUseExpiration] = useState(false)
  const [showMoreOptions, setShowMoreOptions] = useState(false)

  const handleAmountChange = (value: string) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value)
    }
  }

  const handleLimitPriceChange = (value: string) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setLimitPrice(value)
    }
  }

  const setMaxAmount = () => {
    setAmount("1000") // This would be calculated based on user's balance
  }

  const calculateReturn = () => {
    const numAmount = Number.parseFloat(amount) || 0
    const price =
      orderType === "market"
        ? selectedOutcome === "yes"
          ? market.outcomes.yes.price
          : market.outcomes.no.price
        : Number.parseFloat(limitPrice) || 0
    return ((1 / price) * numAmount - numAmount).toFixed(2)
  }

  return (
    <div className="space-y-2">
      <Card className="p-6 bg-white/50 backdrop-blur-sm border-gray-100">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Select value={orderType} onValueChange={(value: OrderType) => setOrderType(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Order Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="market">Market Order</SelectItem>
                <SelectItem value="limit">Limit Order</SelectItem>
                <SelectItem value="amm">AMM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="yes" onValueChange={(v) => setSelectedOutcome(v as "yes" | "no")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                value="yes"
                className="text-lg data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Yes ({(market.outcomes.yes.price * 100).toFixed(0)}¢)
              </TabsTrigger>
              <TabsTrigger value="no" className="text-lg data-[state=active]:bg-red-500 data-[state=active]:text-white">
                No ({(market.outcomes.no.price * 100).toFixed(0)}¢)
              </TabsTrigger>
            </TabsList>

            <div className="space-y-6">
              {orderType === "limit" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Limit Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">¢</span>
                    <Input
                      type="text"
                      value={limitPrice}
                      onChange={(e) => handleLimitPriceChange(e.target.value)}
                      className="pl-7"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Shares</label>
                <div className="relative">
                  <Input
                    type="text"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className="pr-16"
                    placeholder="0"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute right-1 top-1 h-7 bg-black text-white hover:bg-gray-800"
                    onClick={setMaxAmount}
                  >
                    Max
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Set Expiration</label>
                  <Switch checked={useExpiration} onCheckedChange={setUseExpiration} />
                </div>
                {useExpiration && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {expirationDate ? format(expirationDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={expirationDate} onSelect={setExpirationDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                )}
              </div>

              <div className="space-y-2 rounded-lg bg-gray-50 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total</span>
                  <span className="font-medium text-blue-600">${Number.parseFloat(amount || "0").toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Potential return</span>
                  <span className="font-medium text-green-600">
                    ${calculateReturn()} (
                    {((Number.parseFloat(calculateReturn()) / Number.parseFloat(amount || "1")) * 100).toFixed(2)}%)
                  </span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg" size="lg">
                {selectedOutcome === "yes" ? "Buy Yes" : "Buy No"}
              </Button>

              <p className="text-xs text-center text-gray-500">By trading, you agree to our Terms of Service</p>
            </div>
          </Tabs>
        </div>
      </Card>

      <Card className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              More <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[240px]">
            <DropdownMenuGroup>
              <DropdownMenuItem>Merge shares</DropdownMenuItem>
              <DropdownMenuItem>Split shares</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>
    </div>
  )
}

