"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-01", newUsers: 500, returningUsers: 1000 },
  { date: "2023-02", newUsers: 600, returningUsers: 1100 },
  { date: "2023-03", newUsers: 750, returningUsers: 1300 },
  { date: "2023-04", newUsers: 800, returningUsers: 1400 },
  { date: "2023-05", newUsers: 900, returningUsers: 1600 },
  { date: "2023-06", newUsers: 1000, returningUsers: 1800 },
  { date: "2023-07", newUsers: 1100, returningUsers: 2000 },
]

export function UserGrowth() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
          }}
        />
        <Area type="monotone" dataKey="newUsers" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="returningUsers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

