import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    user: { name: "John Doe", avatar: "/avatars/john-doe.jpg" },
    action: "created a new market",
    market: "Will AI surpass human intelligence by 2030?",
    time: "2 minutes ago",
  },
  {
    user: { name: "Jane Smith", avatar: "/avatars/jane-smith.jpg" },
    action: "resolved market",
    market: "Will SpaceX launch Starship successfully in 2023?",
    time: "1 hour ago",
  },
  {
    user: { name: "Bob Johnson", avatar: "/avatars/bob-johnson.jpg" },
    action: "placed a trade",
    market: "Will the Fed raise interest rates in Q3 2023?",
    time: "3 hours ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} {activity.action}
            </p>
            <p className="text-sm text-muted-foreground">{activity.market}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

