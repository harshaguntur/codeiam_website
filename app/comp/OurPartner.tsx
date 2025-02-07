"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { partners } from "../constant"
import Image from "next/image"
import Link from "next/link"

export function OurPartners() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000 })
  )
  return (
    <div className="bg-background">
        <div className=' text-3xl container  lg:px-8 sm:px-4 md:px-6 text-center   md:text-6xl lg:text-7xl font-bold  '>
        Our Partners</div>
        <Carousel 
    plugins={[plugin.current]}
   
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-[100%] p-[10%]  -mt-[6%] mx-auto flex justify-center overflow-hidden"
    >
      <CarouselContent className="">
        {partners.map((partner,index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-1">
              <Card>
                <Link href={partner.link}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                 <Image src={partner.imgurl} alt={partner.name} width={400} height={400} />
                </CardContent>
                </Link>
             
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
    </div>
    
    
  )
}