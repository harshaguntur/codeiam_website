"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'



import { events } from "../constant"

export default function EventsTable() {
  const [searchTerm, setSearchTerm] = React.useState("")
  
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.resourcePerson.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Codeiam Events</CardTitle>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events or resource persons..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Event Name</TableHead>
                <TableHead className="min-w-[150px]">Date & Time</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead className="min-w-[200px]">Resource Person</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.dateTime}</TableCell>
                  <TableCell>{event.participants}</TableCell>
                  <TableCell>{event.mode}</TableCell>
                  <TableCell>{event.resourcePerson}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

