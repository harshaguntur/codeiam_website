import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  interface MobileEventCardProps {
    name: string
    dateTime: string
    participants: string
    mode: string
    resourcePerson: string
  }
  
  export function MobileEventCard({
    name,
    dateTime,
    participants,
    mode,
    resourcePerson,
  }: MobileEventCardProps) {
    return (
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg">{name}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid grid-cols-3 gap-1">
            <div className="text-sm font-medium">Date & Time:</div>
            <div className="col-span-2 text-sm">{dateTime}</div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="text-sm font-medium">Participants:</div>
            <div className="col-span-2 text-sm">{participants}</div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="text-sm font-medium">Mode:</div>
            <div className="col-span-2 text-sm">{mode}</div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="text-sm font-medium">Resource Person:</div>
            <div className="col-span-2 text-sm">{resourcePerson}</div>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  