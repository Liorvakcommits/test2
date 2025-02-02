"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, LayoutDashboard, Activity, Trophy, Wallet, LogOut } from "lucide-react"
import { DepositDialog } from "../deposit/DepositDialog"

const categories = [
  { name: "All", href: "/markets" },
  { name: "New", href: "/markets/new" },
  { name: "Politics", href: "/markets/politics" },
  { name: "Sports", href: "/markets/sports" },
  { name: "Crypto", href: "/markets/crypto" },
  { name: "Global Elections", href: "/markets/elections" },
  { name: "Business", href: "/markets/business" },
]

interface MainHeaderProps {
  isLoggedIn?: boolean
  userAvatar?: string
  portfolioBalance?: string
  cashBalance?: string
}

export function MainHeader({
  isLoggedIn = false,
  userAvatar = "/placeholder-user.jpg",
  portfolioBalance = "0.00",
  cashBalance = "0.00",
}: MainHeaderProps) {
  const [isDepositOpen, setIsDepositOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold flex items-end relative">
              MarkeTrends
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full absolute -bottom-0.5 -right-2"></span>
            </Link>
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input placeholder="Search markets..." className="pl-10" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-6">
              <Link href="/markets" className="text-sm text-gray-600 hover:text-gray-900">
                Markets
              </Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                <LayoutDashboard className="h-5 w-5" />
              </Link>
              <Link href="/activity" className="text-sm text-gray-600 hover:text-gray-900">
                <Activity className="h-5 w-5" />
              </Link>
              <Link href="/ranks" className="text-sm text-gray-600 hover:text-gray-900">
                <Trophy className="h-5 w-5" />
              </Link>
            </nav>

            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Wallet className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">${portfolioBalance}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-500">${cashBalance}</div>
                  <Button onClick={() => setIsDepositOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Deposit
                  </Button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Image
                        src={userAvatar || "/placeholder.svg"}
                        alt="User avatar"
                        className="rounded-full object-cover"
                        fill
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Portfolio</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline">Log In</Button>
                <Button>Sign Up</Button>
              </div>
            )}
          </div>
        </div>

        <nav className="flex h-12 items-center space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="text-sm text-gray-600 hover:text-gray-900">
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      <DepositDialog open={isDepositOpen} onOpenChange={setIsDepositOpen} balance={cashBalance} />
    </header>
  )
}

