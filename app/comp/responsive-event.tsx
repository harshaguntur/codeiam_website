"use client"

import * as React from "react"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import EventsTable from "./Events-table"
import { MobileEventCard } from "./mobile-event-card"
import { events } from "../constant"


export default function ResponsiveEventsList() {
  const [searchTerm, setSearchTerm] = React.useState("")
  
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.resourcePerson.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-8 px-4">
        <div className="md:hidden">
        <h1 className="text-3xl font-bold mb-6">Codeiam Events</h1>
      <div className="relative mb-6">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events or resource persons..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        </div>
     
      
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <EventsTable />
      </div>
      
      {/* Mobile Card View */}
      <div className="md:hidden">
        {filteredEvents.map((event, index) => (
          <MobileEventCard key={index} {...event} />
        ))}
      </div>
    </div>
  )
}

