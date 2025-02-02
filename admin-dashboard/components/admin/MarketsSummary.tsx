import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const markets = [
  {
    id: "MARKET-001",
    name: "Will AI surpass human intelligence by 2030?",
    volume: "$1,234,567",
    trades: 5678,
    endDate: "2030-12-31",
  },
  {
    id: "MARKET-002",
    name: "Will SpaceX launch Starship successfully in 2023?",
    volume: "$987,654",
    trades: 4321,
    endDate: "2023-12-31",
  },
  {
    id: "MARKET-003",
    name: "Will the Fed raise interest rates in Q3 2023?",
    volume: "$876,543",
    trades: 3456,
    endDate: "2023-09-30",
  },
]

export function MarketsSummary() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Market ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Trades</TableHead>
          <TableHead>End Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {markets.map((market) => (
          <TableRow key={market.id}>
            <TableCell className="font-medium">{market.id}</TableCell>
            <TableCell>{market.name}</TableCell>
            <TableCell>{market.volume}</TableCell>
            <TableCell>{market.trades}</TableCell>
            <TableCell>{market.endDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

