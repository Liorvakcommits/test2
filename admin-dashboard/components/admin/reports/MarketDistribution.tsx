"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Crypto", value: 40 },
  { name: "Politics", value: 25 },
  { name: "Sports", value: 20 },
  { name: "Entertainment", value: 15 },
]

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"]

export function MarketDistribution() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
          }}
          formatter={(value: number) => [`${value}%`, "Market Share"]}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

