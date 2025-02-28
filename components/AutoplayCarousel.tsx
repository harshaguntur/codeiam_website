"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AutoplayCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number
  className?: string
}

export function AutoplayCarousel({
  images = [
    { src: "/placeholder.svg?height=600&width=1200", alt: "Image 1" },
    { src: "/placeholder.svg?height=600&width=1200", alt: "Image 2" },
    { src: "/placeholder.svg?height=600&width=1200", alt: "Image 3" },
    { src: "/placeholder.svg?height=600&width=1200", alt: "Image 4" },
    { src: "/placeholder.svg?height=600&width=1200", alt: "Image 5" },
  ],
  interval = 5000,
  className,
}: AutoplayCarouselProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, interval)

    return () => clearInterval(autoplayInterval)
  }, [api, interval])

  return (
    <Card className={cn("border-none shadow-none", className)}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1">
              <div className="relative overflow-hidden rounded-lg p-1">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1200}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-background/90" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index ? "bg-primary w-4" : "bg-primary/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </Card>
  )
}

