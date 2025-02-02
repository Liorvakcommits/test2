import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainHeader } from "@/components/layout/MainHeader"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prediction Market",
  description: "Decentralized prediction market platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <MainHeader
            isLoggedIn={true}
            userAvatar="/placeholder-user.jpg"
            portfolioBalance="1,234.56"
            cashBalance="789.10"
          />
          <main className="flex-1 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  )
}

