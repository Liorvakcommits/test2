"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { TimeFrame } from "@/types/market"

interface MarketChartProps {
  data: Array<{ timestamp: number; price: number }>
  timeFrame: TimeFrame
  onTimeFrameChange: (timeFrame: TimeFrame) => void
}

const timeFrames: TimeFrame[] = ["1H", "6H", "1D", "1W", "1M", "ALL"]

export function MarketChart({ data, timeFrame, onTimeFrameChange }: MarketChartProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-gray-50/80 p-4 rounded-lg">
        <div className="space-y-1">
          <div className="text-2xl font-semibold">54% chance</div>
          <div className="text-sm text-green-600">+5%</div>
        </div>
        <div className="flex items-center gap-2">
          {timeFrames.map((tf) => (
            <Button
              key={tf}
              variant={timeFrame === tf ? "secondary" : "ghost"}
              size="sm"
              onClick={() => onTimeFrameChange(tf)}
            >
              {tf}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString()}
              stroke="#888888"
            />
            <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} domain={[0, 1]} stroke="#888888" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <Card className="p-2">
                      <div className="text-sm font-medium">
                        {new Date(payload[0].payload.timestamp).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">{(payload[0].value * 100).toFixed(1)}%</div>
                    </Card>
                  )
                }
                return null
              }}
            />
            <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

