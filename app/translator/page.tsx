import TranslatorInterface from "@/components/translator-interface"
import Scene3D from "@/components/scene-3d"
import { Suspense } from "react"
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

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-[calc(100vh-73px)]">
          <Suspense
            fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D scene...</div>}
          >
            <Scene3D />
          </Suspense>
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center">
          <TranslatorInterface />
        </div>
      </div>
    </main>
  )
}
