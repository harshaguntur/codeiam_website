import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 mt-24">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="relative bg-blue-500 text-white p-6 md:p-8 rounded-lg overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch with Us</h1>
            <p className="text-blue-50 mb-8 max-w-md">
              Have questions, feedback, or ideas? We&apos;d love to hear from you! Whether you&apos;re looking for more
              information about our chapters, events, or how to get involved, our team is here to assist.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-50" />
                <span>+91 9693596408</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-50" />
                <span>codeiam@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-50" />
                <span>DIGIFAC First Floor</span>
              </div>
            </div>
          </div>
          {/* Background decorative pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full transform translate-x-1/3 translate-y-1/3" />
            <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full transform -translate-x-1/3 -translate-y-1/3" />
          </div>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Connect With CodeIAM</h2>
            <p className="text-gray-600">We&apos;re Here For You!</p>
          </div>
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Input
                  id="name"
                  placeholder="NAME"
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  placeholder="EMAIL"
                  type="email"
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                id="phone"
                placeholder="PHONE NUMBER"
                type="tel"
                className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="MESSAGE"
                className="min-h-[100px] border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>
            <Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full">
              Get in Touch with CodeIAM!
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-20">

      </div>
    </div>
  )
}