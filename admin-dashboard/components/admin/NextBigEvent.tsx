"use client"

import { Card, CardContent } from "@/components/ui/card"

const COUNTDOWN_DATE = new Date("2024-11-05T00:00:00").getTime()

export function NextBigEvent() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">US Presidential Election 2024</h3>
        <div className="text-2xl font-bold text-center">281 Days</div>
      </CardContent>
    </Card>
  )
}

