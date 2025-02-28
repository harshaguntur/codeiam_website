"use client"

import { GoogleMapsEmbed } from "@next/third-parties/google"
import { Calendar, MapPin, Navigation} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"
export default function EventLocationMap() {


  // Replace with your actual event details
  const eventDetails = {
    name: "Student Startup Expo 2025",
    address: "A-Hub, AU North Campus,  Andhra University, Visakhapatnam, Andhra Pradesh 530003",
    date: "March 15, 2024",
    time: "10:00 AM - 6:00 PM",
    coordinates: "17.732385439529537, 83.32127485767163", 
  }



  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${eventDetails.coordinates}`, "_blank")
  }

  return (
    <div className="flex mx-auto container relative justify-center text-center mt-20">
    

      <Card className="w-full max-w-3xl bg-card border-border shadow-xl">
        <CardHeader className="space-y-1 pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{eventDetails.name}</CardTitle>
          </div>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{eventDetails.address}</span>
          </CardDescription>
          <div className="flex items-center gap-2 pt-1">
            <Badge className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {eventDetails.date}
            </Badge>
            <Badge>{eventDetails.time}</Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0 relative">
          <div className="relative rounded-md overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent z-10 pointer-events-none" />
            <GoogleMapsEmbed
              apiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual API key
              height={400}
              width="100%"
              mode="place"
              q={eventDetails.address}
              loading="lazy"
              allowfullscreen={true}
            />
          </div>

          <div className="absolute bottom-4 right-4 z-20">
            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full">
              <MapPin className="h-6 w-6 text-primary animate-pulse" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button onClick={openDirections} className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90">
            <Navigation className="h-4 w-4" />
            Get Directions
          </Button>
          <div className="text-sm text-muted-foreground">
            We can&apos;t wait to see you there! Click the button above for directions.
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

