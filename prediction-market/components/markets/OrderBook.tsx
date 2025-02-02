"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { InfoIcon } from "lucide-react"

interface Order {
  price: number
  shares: number
  total: number
}

interface OrderBookProps {
  yesOrders: Order[]
  noOrders: Order[]
}

const mockYesOrders: Order[] = [
  { price: 0.43, shares: 7000, total: 39986.14 },
  { price: 0.42, shares: 1987, total: 40820.68 },
  { price: 0.4, shares: 2348, total: 41759.88 },
  { price: 0.36, shares: 50, total: 41777.88 },
  { price: 0.35, shares: 150, total: 41830.38 },
]

const mockNoOrders: Order[] = [
  { price: 0.57, shares: 5000, total: 35000.0 },
  { price: 0.58, shares: 2000, total: 38000.0 },
  { price: 0.6, shares: 1500, total: 39500.0 },
]

export function OrderBook() {
  const [activeTab, setActiveTab] = useState("yes")

  const getMaxTotal = (orders: Order[]) => {
    return Math.max(...orders.map((order) => order.total))
  }

  const getDepthWidth = (total: number, maxTotal: number) => {
    return (total / maxTotal) * 100
  }

  return (
    <Card className="p-6 bg-gray-50/80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Order Book</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      <Tabs defaultValue="yes" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="yes" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
              Trade Yes
            </TabsTrigger>
            <TabsTrigger value="no" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              Trade No
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="yes" className="mt-0">
          <div className="relative">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Shares</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockYesOrders.map((order, index) => {
                  const width = getDepthWidth(order.total, getMaxTotal(mockYesOrders))
                  return (
                    <TableRow key={index} className="relative">
                      <TableCell
                        className="font-medium text-green-600"
                        style={{
                          background: `linear-gradient(to right, rgb(240 253 244 / ${width}%) ${width}%, transparent ${width}%)`,
                        }}
                      >
                        {(order.price * 100).toFixed(0)}¢
                      </TableCell>
                      <TableCell className="text-right">{order.shares.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${order.total.toLocaleString()}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="no" className="mt-0">
          <div className="relative">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Shares</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockNoOrders.map((order, index) => {
                  const width = getDepthWidth(order.total, getMaxTotal(mockNoOrders))
                  return (
                    <TableRow key={index} className="relative">
                      <TableCell
                        className="font-medium text-red-600"
                        style={{
                          background: `linear-gradient(to right, rgb(254 242 242 / ${width}%) ${width}%, transparent ${width}%)`,
                        }}
                      >
                        {(order.price * 100).toFixed(0)}¢
                      </TableCell>
                      <TableCell className="text-right">{order.shares.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${order.total.toLocaleString()}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

