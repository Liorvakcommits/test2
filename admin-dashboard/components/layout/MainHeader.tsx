import Link from "next/link"

interface MainHeaderProps {
  isAdminDashboard?: boolean
}

export function MainHeader({ isAdminDashboard = false }: MainHeaderProps) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={isAdminDashboard ? "/admin" : "/"}
            className="text-2xl font-bold flex items-center justify-center gap-2 relative"
          >
            MarkeTrends
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full absolute -bottom-0.5 -right-2"></span>
          </Link>
        </div>
      </div>
    </header>
  )
}

