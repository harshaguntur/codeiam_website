import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function MissionVisionHexagon() {
  return (
    <Card className="w-full container mx-auto">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission & Vision</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">Mission</h3>
              <p className="text-muted-foreground">
              Foster group learning through hackathons, coding, and problem-
    solving at all levels.
    Empower students to build startups and innovative tech-based
    companies.
    Encourage out-of-the-box thinking for developing cutting-edge
    tech products.
    Provide seminars, webinars,  mentorship and working space to
    nurture future entrepreneurs and unicorns.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">Vision</h3>
              <p className="text-muted-foreground">
              Create a dynamic student community excelling in technology
    and entrepreneurship.
    Position Codeiam as a hub for innovation and tech product
    development.
    Inspire students to leverage emerging technologies for
    impactful solutions.
    Build tec companies that contribute to the global tech
    ecosystem.
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full mx-auto ">

            <Image src={"/vis.jpg"} alt="h" sizes="250" width={600} height={600} className="lg:mt-40" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

