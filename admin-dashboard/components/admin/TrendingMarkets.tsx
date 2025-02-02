import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const trendingMarkets = [
  { id: 1, name: "Will AI surpass human intelligence by 2030?", volume: "$1,234,567", change: "+15.2%" },
  { id: 2, name: "Will SpaceX launch Starship successfully in 2023?", volume: "$987,654", change: "+8.7%" },
  { id: 3, name: "Will the Fed raise interest rates in Q3 2023?", volume: "$876,543", change: "-3.5%" },
  { id: 4, name: "Will Tesla release a $25,000 car by 2024?", volume: "$765,432", change: "+5.1%" },
]

export function TrendingMarkets() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Market</TableHead>
          <TableHead>24h Volume</TableHead>
          <TableHead>24h Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trendingMarkets.map((market) => (
          <TableRow key={market.id}>
            <TableCell className="font-medium">{market.name}</TableCell>
            <TableCell>{market.volume}</TableCell>
            <TableCell className={market.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
              {market.change}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

