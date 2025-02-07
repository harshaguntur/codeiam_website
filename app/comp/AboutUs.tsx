import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/logo.png"
              alt="Team collaborating on a project"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
    About CODEIAM
  </h2>
  <p className="text-xl text-muted-foreground">
    Codelam is a vibrant student community and workspace committed to comprehensive learning, innovation, and inclusivity.
  </p>
  <p className="text-base text-muted-foreground">
    With a robust network of over 1600+ members on WhatsApp, 400+ on LinkedIn, and 400+ on Instagram, Codelam ensures a supportive and connected environment. The club offers workshops, hands-on projects, and mentorship programs to equip students with essential skills for the tech industry. 
    An inclusive environment promotes diverse participation and fosters a culture of respect with zero tolerance for ragging or related activities.
  </p>
  <p className="text-base text-muted-foreground">
    CODEIAM also serves as a hub for Pre-Incubation and Hackathon clusters, driving innovation and collaboration among aspiring tech professionals.
  </p>
  <ul className="list-disc list-inside text-muted-foreground space-y-2">
    <li>1600+ members on WhatsApp</li>
    <li>400+ members on LinkedIn and Instagram</li>
    <li>Inclusive environment with zero tolerance for ragging</li>
    <li>Workshops, projects, and mentorship programs</li>
  </ul>
  <Button className="mt-4">
    Join Our Whatsapp Community
  </Button>
</div>

        </div>
      </div>
    </section>
  )
}

