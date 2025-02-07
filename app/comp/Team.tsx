import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

export default function CoreTeam() {
  const teamMembers: TeamMember[] = Array(9).fill({
    name: "Liam Bennett",
    role: "Chapter Lead",
    imageUrl: "/user.jpg"
  })

  return (
    <section className="px-4 py-12 mx-auto max-w-6xl mt-24">
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold tracking-wider uppercase mb-2">OUR TEAM</h2>
        <h3 className="text-3xl font-bold mb-4">Meet the Visionaries Behind CodeIAM</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Passionate experts driving innovation and excellence. Dedicated to empowering you with cutting-edge knowledge and opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden group relative">
            <div className="aspect-[3/4] relative">
              <Image
                src={member.imageUrl}
                alt={member.name}
                height={250}
                width={250}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-backgroud/90 backdrop-blur-lg transition-all duration-300 rounded-lg p-4 shadow-lg">
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}