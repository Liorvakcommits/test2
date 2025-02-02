"use client"

import { ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart, Area } from "recharts"

const data = [
  { hour: "00:00", users: 120 },
  { hour: "03:00", users: 80 },
  { hour: "06:00", users: 150 },
  { hour: "09:00", users: 450 },
  { hour: "12:00", users: 680 },
  { hour: "15:00", users: 890 },
  { hour: "18:00", users: 750 },
  { hour: "21:00", users: 420 },
]

export function UserActivity() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="hour" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
          }}
        />
        <Area type="monotone" dataKey="users" stroke="#8b5cf6" fill="url(#colorGradient)" fillOpacity={0.3} />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  )
}

