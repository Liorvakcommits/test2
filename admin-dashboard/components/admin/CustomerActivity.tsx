import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockActivity = [
  {
    id: 1,
    action: "Placed trade",
    market: "Will AI surpass human intelligence by 2030?",
    amount: "$500",
    date: "2023-05-01",
  },
  {
    id: 2,
    action: "Commented",
    market: "Will SpaceX launch Starship successfully in 2023?",
    comment: "I think it's likely",
    date: "2023-05-02",
  },
  { id: 3, action: "Withdrew funds", amount: "$200", date: "2023-05-03" },
]

export function CustomerActivity({ userId }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Action</TableHead>
          <TableHead>Details</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockActivity.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell>{activity.action}</TableCell>
            <TableCell>
              {activity.market && `Market: ${activity.market}`}
              {activity.amount && `Amount: ${activity.amount}`}
              {activity.comment && `Comment: ${activity.comment}`}
            </TableCell>
            <TableCell>{activity.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

