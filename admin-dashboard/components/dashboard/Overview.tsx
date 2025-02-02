"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data - replace with real API calls in production
const mockData = {
  totalUsers: 10482,
  liveUsers: 1423,
  todayTransactions: 5243,
  weekTransactions: 32150,
  monthTransactions: 124680,
  netRevenue: 1234567,
  activeMarkets: 342,
  newMarkets: 15,
  resolvedMarkets: 28,
  avgBetSize: 156.78,
}

const mockTrendData = [
  { name: "Jan", users: 4000 },
  { name: "Feb", users: 5000 },
  { name: "Mar", users: 5500 },
  { name: "Apr", users: 6000 },
  { name: "May", users: 6500 },
  { name: "Jun", users: 7000 },
]

const revenueBreakdownData = [
  { name: "Subscription", value: 40 },
  { name: "Transaction Fees", value: 30 },
  { name: "Advertising", value: 20 },
  { name: "Other", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function Overview() {
  const [timeFilter, setTimeFilter] = useState("today")
  const [trendData, setTrendData] = useState(mockTrendData)

  useEffect(() => {
    // Here you would fetch real-time data based on the selected time filter
    // For now, we'll just use the mock data
    console.log(`Fetching data for ${timeFilter}`)
  }, [timeFilter])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Platform Overview</h2>
        <Select value={timeFilter} onValueChange={setTimeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.totalUsers.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="bg-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Live Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.liveUsers.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="bg-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {timeFilter === "today" && mockData.todayTransactions.toLocaleString()}
              {timeFilter === "week" && mockData.weekTransactions.toLocaleString()}
              {timeFilter === "month" && mockData.monthTransactions.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.netRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card className="bg-pink-100 border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockData.activeMarkets} Active / {mockData.newMarkets} New / {mockData.resolvedMarkets} Resolved
            </div>
          </CardContent>
        </Card>
        <Card className="bg-teal-100 border-teal-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Bet Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.avgBetSize.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Usage Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" name="Total Users" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueBreakdownData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

