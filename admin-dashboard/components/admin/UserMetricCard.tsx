"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

const dummyData = {
  totalUsers: [
    { name: "1", value: 8000 },
    { name: "2", value: 8700 },
    { name: "3", value: 9200 },
    { name: "4", value: 9800 },
    { name: "5", value: 10200 },
    { name: "6", value: 10482 },
  ],
  activeUsers: [
    { name: "1", value: 6500 },
    { name: "2", value: 7000 },
    { name: "3", value: 7300 },
    { name: "4", value: 7800 },
    { name: "5", value: 8100 },
    { name: "6", value: 8234 },
  ],
  newUsers: [
    { name: "1", value: 1100 },
    { name: "2", value: 1250 },
    { name: "3", value: 1300 },
    { name: "4", value: 1350 },
    { name: "5", value: 1400 },
    { name: "6", value: 1423 },
  ],
  engagement: [
    { name: "1", value: 70 },
    { name: "2", value: 72 },
    { name: "3", value: 73 },
    { name: "4", value: 74 },
    { name: "5", value: 75 },
    { name: "6", value: 76.2 },
  ],
}

interface UserMetricCardProps {
  title: string
  value: number
  change: number
  dataKey: keyof typeof dummyData
  valuePrefix?: string
}

export function UserMetricCard({ title, value, change, dataKey, valuePrefix = "" }: UserMetricCardProps) {
  const data = dummyData[dataKey]
  const isPositive = change > 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {valuePrefix}
          {value.toLocaleString()}
        </div>
        <p className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? (
            <ArrowUpIcon className="inline mr-1 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="inline mr-1 h-4 w-4" />
          )}
          {Math.abs(change)}%
        </p>
        <div className="h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositive ? "#10b981" : "#ef4444"}
                fill={isPositive ? "#10b98120" : "#ef444420"}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

