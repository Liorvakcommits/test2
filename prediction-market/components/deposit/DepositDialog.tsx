"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy } from "lucide-react"
import Image from "next/image"

interface DepositDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  balance: string
}

export function DepositDialog({ open, onOpenChange, balance }: DepositDialogProps) {
  const depositAddress = "0x362f9359f56efb48bbc1f581261c391ED51808cf"

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(depositAddress)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-dialog">
        <DialogHeader>
          <DialogTitle>Transfer Crypto</DialogTitle>
          <p className="text-sm text-gray-500">Polymarket Balance: ${balance}</p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Deposit from</label>
            <Select defaultValue="crypto">
              <SelectTrigger>
                <SelectValue placeholder="Select deposit method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="crypto">Transfer Crypto</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-500">No limit</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">TOKEN</label>
            <Select defaultValue="usdc">
              <SelectTrigger>
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usdc">USDC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">CHAIN</label>
            <Select defaultValue="polygon">
              <SelectTrigger>
                <SelectValue placeholder="Select chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="polygon">Polygon</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-500">Minimum deposit: $10.00</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">YOUR DEPOSIT ADDRESS</label>
            <div className="relative">
              <Input value={depositAddress} readOnly />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full" onClick={handleCopyAddress}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0x362f9359f56efb48bbc1f581261c391ED51808cf"
                alt="Deposit QR Code"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Send in greater than $10.00 of the accepted token to the address above and it will auto swap to USDC in your
            Polymarket wallet, minus fees. Terms & conditions apply.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

