import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

export default function CoreTeam() {
 const teamMembers: TeamMember[] = [
  { name: "Erra Chathurya Sai", role: "Chapter Lead", imageUrl: "/team/IMG_20250208_065541 - Chathurya Sai Erra.jpg" },
  { name: "GANTA KRISHNA CHAITANYA", role: "Chapter Lead", imageUrl: "/team/IMG_20250208_123412 - Chaitu.jpg" },
  { name: "Sowmya Dadi", role: "co-lead", imageUrl: "/team/IMG_20250208_125220_202 - Sowmya D.jpg" },
  { name: "Rasagna Gudipudi", role: "Chapter Lead", imageUrl: "/team/IMG-20241001-WA0027 - Rasagna G.jpg" },
  { name: "K L S P Varshini", role: "Chapter Lead", imageUrl: "/team/Picsart_25-02-07_23-16-45-321 - KAREDLA LSPRIYAVARSHINI.png" },
  { name: "D S S Chandra Vardhan", role: "Chapter Lead", imageUrl: "/team/IMG-20240211-WA0036 - Chandra Vardhan.jpg" },
  { name: "Daniel RANDRIANATOANDRO NGUYEN VAN UY", role: "Chapter Lead", imageUrl: "/team/IMG_20250207_230109 - Daniel Nguyen Van Uy.jpg" },
  { name: "Narisetty Sravanthi", role: "Chapter Lead", imageUrl: "/team/IMG_20240527_140452 - Sravanthi chowdary.jpg" },
  { name: "Subbisetti Teja", role: "Chapter Lead", imageUrl: "/team/codeiam1 - Subbisetti teja.jpg" },
  { name: "SL Harshini Marineedi", role: "co-lead", imageUrl: "/team/IMG_20250208_200259 - Harshini Marineedi.jpg" },
  { name: "P. Navya Sree", role: "co-lead", imageUrl: "/team/_DSC0394 copy - navya sree.jpg" },
  { name: "Manoj Sai Prasad", role: "co-lead", imageUrl: "/team/D4B10F61-7BF9-4A51-A164-D4838F1696BD - Chandana Vuppada.jpg" },
  { name: "SREEPRIYA PILLA", role: "Chapter Lead", imageUrl: "/team/Photo - PILLA SREEPRIYA.jpg" },
  { name: "Aravapalli Karunya", role: "Chapter Lead", imageUrl: "/team/IMG-20230716-WA0005 - Karunya Aravapalli.jpg" },
  { name: "Shaik Asif Umeed", role: "co-lead", imageUrl: "/team/Asif - Asif Umeed Shaik.jpeg" }
];



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