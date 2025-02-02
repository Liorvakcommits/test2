"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import dynamic from "next/dynamic"

const DynamicWorldMap = dynamic(() => import("react-svg-worldmap"), { ssr: false })

// Updated mock data with consistent colors
const mockUserData = {
  newUsers: 1234,
  averageTransactions: 7.5,
  topTraders: [
    { name: "John Doe", transactions: 156 },
    { name: "Jane Smith", transactions: 132 },
    { name: "Bob Johnson", transactions: 98 },
  ],
  vipCustomers: [
    { name: "Alice Brown", totalBet: 50000 },
    { name: "Charlie Davis", totalBet: 45000 },
    { name: "Eva White", totalBet: 40000 },
  ],
  inactiveUsers: 543,
}

const mockUserDistribution = [
  { name: "North America", value: 35, color: "#0088FE" },
  { name: "Europe", value: 30, color: "#00C49F" },
  { name: "Asia", value: 20, color: "#FFBB28" },
  { name: "South America", value: 10, color: "#FF8042" },
  { name: "Africa", value: 3, color: "#8884D8" },
  { name: "Oceania", value: 2, color: "#82CA9D" },
]

const mockCountryData = [
  { country: "US", value: 1234567 },
  { country: "CN", value: 987654 },
  { country: "IN", value: 876543 },
  { country: "GB", value: 765432 },
  { country: "DE", value: 654321 },
]

// Custom legend styles
const legendStyle = {
  fontSize: "12px",
  lineHeight: "20px",
}

export function UserActivity() {
  const [timeFilter, setTimeFilter] = useState("week")

  // Custom renderer for the pie chart legend
  const renderColorfulLegendText = (value: string, entry: any) => {
    return <span style={legendStyle}>{value}</span>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Activity</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUserData.newUsers}</div>
            <p className="text-xs text-muted-foreground">in the last {timeFilter}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Transactions per User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUserData.averageTransactions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inactive Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUserData.inactiveUsers}</div>
            <p className="text-xs text-muted-foreground">requiring marketing intervention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>User Distribution by Region</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockUserDistribution}
                  cx="50%"
                  cy="45%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {mockUserDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend
                  formatter={renderColorfulLegendText}
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  itemStyle={{ fontSize: "12px", lineHeight: "20px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Activity Heatmap</CardTitle>
            <div className="text-xs text-muted-foreground mt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span>High Activity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-200 rounded-sm"></div>
                <span>Low Activity</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex justify-center items-center h-[300px]">
            <div className="w-[50%] h-[50%] flex justify-center items-center">
              <DynamicWorldMap color="red" valueSuffix="users" size="responsive" data={mockCountryData} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Top Traders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Transactions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUserData.topTraders.map((trader, index) => (
                  <TableRow key={index}>
                    <TableCell>{trader.name}</TableCell>
                    <TableCell>{trader.transactions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>VIP Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Total Bet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUserData.vipCustomers.map((customer, index) => (
                  <TableRow key={index}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>${customer.totalBet.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

