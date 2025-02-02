"use client"

import { Card } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts"

// Mock data for demonstration purposes
const userActivityData = [
  { date: "2023-07-01", activeUsers: 1000, inactiveUsers: 200 },
  { date: "2023-07-02", activeUsers: 1100, inactiveUsers: 190 },
  { date: "2023-07-03", activeUsers: 1050, inactiveUsers: 210 },
  { date: "2023-07-04", activeUsers: 1200, inactiveUsers: 180 },
  { date: "2023-07-05", activeUsers: 1300, inactiveUsers: 170 },
  { date: "2023-07-06", activeUsers: 1250, inactiveUsers: 190 },
  { date: "2023-07-07", activeUsers: 1400, inactiveUsers: 160 },
]

const betsByCategory = [
  { category: "Politics", bets: 1200 },
  { category: "Sports", bets: 1500 },
  { category: "Entertainment", bets: 800 },
  { category: "Technology", bets: 1000 },
  { category: "Finance", bets: 1300 },
]

const financialData = [
  { date: "2023-07-01", deposits: 5000, withdrawals: 3000 },
  { date: "2023-07-02", deposits: 5500, withdrawals: 3200 },
  { date: "2023-07-03", deposits: 4800, withdrawals: 3500 },
  { date: "2023-07-04", deposits: 6000, withdrawals: 2800 },
  { date: "2023-07-05", deposits: 5200, withdrawals: 3100 },
  { date: "2023-07-06", deposits: 5800, withdrawals: 3300 },
  { date: "2023-07-07", deposits: 6200, withdrawals: 3000 },
]

const topWinners = [
  { name: "John Doe", profit: 5000 },
  { name: "Jane Smith", profit: 4500 },
  { name: "Bob Johnson", profit: 4000 },
  { name: "Alice Brown", profit: 3500 },
  { name: "Charlie Davis", profit: 3000 },
]

const topLosers = [
  { name: "Eve Wilson", loss: 2000 },
  { name: "Frank Miller", loss: 1800 },
  { name: "Grace Lee", loss: 1600 },
  { name: "Henry Taylor", loss: 1400 },
  { name: "Ivy Clark", loss: 1200 },
]

const marketCategories = [
  { name: "Politics", value: 30 },
  { name: "Sports", value: 25 },
  { name: "Entertainment", value: 20 },
  { name: "Technology", value: 15 },
  { name: "Finance", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function UserActivityDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">User Activity Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex flex-row items-center justify-between space-y-0 p-6">
            <h3 className="text-sm font-medium">Total Users</h3>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">10,482</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center justify-between space-y-0 p-6">
            <h3 className="text-sm font-medium">New Users (30 days)</h3>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">1,423</div>
            <p className="text-xs text-muted-foreground">+5.1% from last month</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center justify-between space-y-0 p-6">
            <h3 className="text-sm font-medium">Active/Inactive Ratio</h3>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">78.6%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center justify-between space-y-0 p-6">
            <h3 className="text-sm font-medium">Total Bets Placed</h3>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">52,489</div>
            <p className="text-xs text-muted-foreground">+12.3% from last month</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">User Activity (Last 7 Days)</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="activeUsers"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                  name="Active Users"
                />
                <Area
                  type="monotone"
                  dataKey="inactiveUsers"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  name="Inactive Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Average Bets per User by Category</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={betsByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bets" fill="#8884d8" name="Bets" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Financial Overview</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="deposits" stroke="#8884d8" name="Deposits" />
                <Line type="monotone" dataKey="withdrawals" stroke="#82ca9d" name="Withdrawals" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Market Categories Distribution</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Winners</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-2">
              {topWinners.map((winner, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{winner.name}</span>
                  <span className="font-bold text-green-600">${winner.profit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Losers</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-2">
              {topLosers.map((loser, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{loser.name}</span>
                  <span className="font-bold text-red-600">-${loser.loss}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}

