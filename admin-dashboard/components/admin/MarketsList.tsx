import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const markets = [
  {
    id: 1,
    name: "Will AI surpass human intelligence by 2030?",
    volume: "$1,234,567",
    status: "Active",
    endDate: "2030-12-31",
    createdBy: "John Doe",
  },
  {
    id: 2,
    name: "Will SpaceX launch Starship successfully in 2023?",
    volume: "$987,654",
    status: "Resolved",
    endDate: "2023-12-31",
    createdBy: "Jane Smith",
  },
  {
    id: 3,
    name: "Will the Fed raise interest rates in Q3 2023?",
    volume: "$876,543",
    status: "Active",
    endDate: "2023-09-30",
    createdBy: "Bob Johnson",
  },
  {
    id: 4,
    name: "Will Tesla release a $25,000 car by 2024?",
    volume: "$765,432",
    status: "Active",
    endDate: "2024-12-31",
    createdBy: "Alice Brown",
  },
]

export function MarketsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Created By</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {markets.map((market) => (
          <TableRow key={market.id}>
            <TableCell>{market.id}</TableCell>
            <TableCell>{market.name}</TableCell>
            <TableCell>{market.volume}</TableCell>
            <TableCell>
              <Badge variant={market.status === "Active" ? "success" : "secondary"}>{market.status}</Badge>
            </TableCell>
            <TableCell>{market.endDate}</TableCell>
            <TableCell>{market.createdBy}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

