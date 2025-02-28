"use client"

import { GoogleMapsEmbed } from "@next/third-parties/google"
import { Calendar, MapPin, Navigation, PartyPopper, Stars, Plus, CalendarDays, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Toaster } from "./ui/sonner"
export default function EventLocationMap() {


  const eventDetails = {
    name: "Student Startup Expo 2025",
    address: "A-Hub, AU North Campus,  Andhra University, Visakhapatnam, Andhra Pradesh 530003",
    date: "March 09, 2024",
    time: "10:00 AM - 6:00 PM",
    coordinates: "17.732385439529537, 83.32127485767163", // San Francisco coordinates
    startDateTime: "2025-02-09T10:00:00",
    endDateTime: "2025-02-09T18:00:00",
    description:
      "Join us for the Student Startup Expo 2025 & Where Ideas Becomes Innovation"
  }

  

  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${eventDetails.coordinates}`, "_blank")
  }

  const createGoogleCalendarUrl = () => {
    const text = encodeURIComponent(eventDetails.name)
    const dates = `${eventDetails.startDateTime.replace(/[-:]/g, "")}/${eventDetails.endDateTime.replace(/[-:]/g, "")}`
    const location = encodeURIComponent(eventDetails.address)
    const details = encodeURIComponent(eventDetails.description)

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`
  }

  const copyCalendarLink = () => {
    navigator.clipboard.writeText(createGoogleCalendarUrl())
   
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 `}>
      <Toaster />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/10">
          <Stars size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-primary/10">
          <PartyPopper size={120} />
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-6">
        <Tabs defaultValue="location" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="location">
            <Card className="w-full bg-background border-border shadow-xl">
              <CardHeader className="space-y-1 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold">{eventDetails.name}</CardTitle>
                  <Button variant="ghost" size="icon"  className="ml-auto">
                    
                  </Button>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{eventDetails.address}</span>
                </CardDescription>
                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {eventDetails.date}
                  </Badge>
                  <Badge variant="outline">{eventDetails.time}</Badge>
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
          </TabsContent>

          <TabsContent value="calendar">
            <Card className="w-full bg-background border-border shadow-xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold">Add to Calendar</CardTitle>
                  <Button variant="ghost" size="icon"  className="ml-auto">
                  
                  </Button>
                </div>
                <CardDescription>Save the event to your calendar or share with others</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-accent/50 rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <CalendarDays className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{eventDetails.name}</h3>
                      <p className="text-muted-foreground">
                        {eventDetails.date} • {eventDetails.time}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> {eventDetails.address}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button onClick={() => window.open(createGoogleCalendarUrl(), "_blank")} className="w-full gap-2">
                        <Plus className="h-4 w-4" />
                        Add to Google Calendar
                      </Button>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full gap-2">
                            <Share2 className="h-4 w-4" />
                            Share Calendar Link
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-4">
                            <h4 className="font-medium">Share Calendar Link</h4>
                            <div className="flex items-center space-x-2">
                              <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={createGoogleCalendarUrl()}
                                readOnly
                              />
                              <Button size="sm" onClick={copyCalendarLink}>
                                Copy
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="pt-2">
                      <iframe
                        src={`https://calendar.google.com/calendar/embed?src=&ctz=America%2FLos_Angeles&mode=AGENDA&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&height=300&wkst=1&bgcolor=%23ffffff&color=%234285F4`}
                        style={{ borderWidth: 0 }}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        scrolling="no"
                        className="rounded-lg border border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>You&apos;ll receive a reminder before the event starts. Make sure to arrive on time!</p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => window.open(createGoogleCalendarUrl(), "_blank")}>
                  Open in Google Calendar
                </Button>
              
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

