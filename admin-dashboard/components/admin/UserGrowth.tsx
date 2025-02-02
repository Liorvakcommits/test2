"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "2023-01-01", users: 5000 },
  { date: "2023-02-01", users: 6200 },
  { date: "2023-03-01", users: 7800 },
  { date: "2023-04-01", users: 8900 },
  { date: "2023-05-01", users: 10100 },
  { date: "2023-06-01", users: 11500 },
  { date: "2023-07-01", users: 12800 },
]

export function UserGrowth() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

