"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "01/23", value: 1000000 },
  { name: "02/23", value: 1200000 },
  { name: "03/23", value: 800000 },
  { name: "04/23", value: 1500000 },
  { name: "05/23", value: 2000000 },
  { name: "06/23", value: 1800000 },
]

export function TradingVolume() {
  return (
    <div className="w-full h-[300px] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

