
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Presentation {
  title: string
  url: string
}

const presentations: Presentation[] = [
  {
    title: "All Events Gallery",
    url: "https://docs.google.com/presentation/d/1KP3mZfAG60VbmViKikTLpmY3Qg9eMaY3Z9kof6UzsPA/embed?start=false&loop=false&delayms=3000"
  },

]

export function PresentationSlider() {
 

  return (
    <div className="relative w-full overflow-hidden cursor-pointer">
      <Card className="w-full">
        <CardContent className="p-2">
          <div className="relative pb-[56.25%] overflow-hidden rounded-lg">
            <iframe
              src={presentations[0].url}
              title={presentations[0].title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>

      

    
    </div>
  )
}

