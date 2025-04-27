"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SplineViewer from "@/components/spline-viewer"

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Spline 3D object */}
      <div className="absolute inset-0">
        <SplineViewer url="https://prod.spline.design/pY4CEJVxSZ9x753F/scene.splinecode" />
      </div>

     
      {/* Get Started button */}
      <div className="absolute bottom-16 left-0 w-full flex justify-center items-center z-10">
        <Link href="/translator">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
