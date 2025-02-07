import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

// Define types for our data
type TeamMember = {
  name: string
  role: string
  image: string
}

type Event = {
  title: string
  date: string
  description: string
}

type ChapterProps = {
  title: string
  description: string
  images: string[]
  teamMembers: TeamMember[]
  whatsappLink: string
  previousEvents: Event[]
}

export default function Chapterpagese({
  title = "AIML Chapter",
  description = "Exploring the frontiers of Artificial Intelligence and Machine Learning",
  images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  teamMembers = [
    { name: "John Doe", role: "President", image: "/placeholder-user.jpg" },
    { name: "Jane Smith", role: "Vice President", image: "/placeholder-user.jpg" },
    { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
  ],
  whatsappLink = "https://whatsapp.com/group/example",
  previousEvents = [
    {
      title: "AI Ethics Workshop",
      date: "2023-05-15",
      description: "A workshop discussing the ethical implications of AI in society.",
    },
    {
      title: "Machine Learning Hackathon",
      date: "2023-07-22",
      description: "A 24-hour hackathon focused on solving real-world problems using ML.",
    },
  ],
}: ChapterProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center mt-20 lg:mt-[5%]">{title}</h1>
      <p className="text-xl text-center mb-8">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Chapter image ${index + 1}`}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-64"
          />
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Join Our WhatsApp Group</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              <WhatsappIcon className="mr-2 h-4 w-4" />
              Join WhatsApp Group
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Previous Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {previousEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}