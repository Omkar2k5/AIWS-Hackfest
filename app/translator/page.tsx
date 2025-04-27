import TranslatorInterface from "@/components/translator-interface"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function TranslatorPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full p-4 bg-background/80 backdrop-blur-sm border-b z-10">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold">Multilingual Translator</h1>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-6">
        <TranslatorInterface />
      </div>
    </main>
  )
}
