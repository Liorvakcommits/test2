"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Mock data - replace with real API calls in production
const mockMarketData = {
  newMarkets: 15,
  activeMarkets: 342,
  settledMarkets: 28,
  averageLifecycle: "3.5 days",
  popularMarkets: [
    { name: "Bitcoin Price 2024", volume: 1000000 },
    { name: "US Election 2024", volume: 750000 },
    { name: "AI Breakthrough", volume: 500000 },
  ],
  highStakeMarkets: [
    { name: "SpaceX Mars Landing", stake: 2000000 },
    { name: "Cure for Cancer", stake: 1500000 },
    { name: "Quantum Computing Milestone", stake: 1000000 },
  ],
  lowValueMarkets: [
    { name: "Local Weather Forecast", value: 1000 },
    { name: "Celebrity Relationship", value: 800 },
    { name: "Sports Team Transfer", value: 500 },
  ],
}

const mockVolumeData = [
  { name: "Bitcoin Price 2024", volume: 1000000 },
  { name: "US Election 2024", volume: 750000 },
  { name: "AI Breakthrough", volume: 500000 },
  { name: "Climate Change Prediction", volume: 400000 },
  { name: "Space Tourism", volume: 300000 },
]

export function MarketPerformance() {
  const [timeFilter, setTimeFilter] = useState("week")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Market Performance</h2>
        <Select value={timeFilter} onValueChange={setTimeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMarketData.newMarkets}</div>
            <p className="text-xs text-muted-foreground">in the last {timeFilter}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMarketData.activeMarkets}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Settled Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMarketData.settledMarkets}</div>
            <p className="text-xs text-muted-foreground">in the last {timeFilter}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Market Lifecycle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMarketData.averageLifecycle}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Market Volume Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockVolumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="volume" name="Market Volume" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Most Popular Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Market</TableHead>
                  <TableHead>Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMarketData.popularMarkets.map((market, index) => (
                  <TableRow key={index}>
                    <TableCell>{market.name}</TableCell>
                    <TableCell>${market.volume.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>High-Stake Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Market</TableHead>
                  <TableHead>Total Stake</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMarketData.highStakeMarkets.map((market, index) => (
                  <TableRow key={index}>
                    <TableCell>{market.name}</TableCell>
                    <TableCell>${market.stake.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Markets at Risk (Low Value)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Market</TableHead>
                <TableHead>Current Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMarketData.lowValueMarkets.map((market, index) => (
                <TableRow key={index}>
                  <TableCell>{market.name}</TableCell>
                  <TableCell>${market.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

