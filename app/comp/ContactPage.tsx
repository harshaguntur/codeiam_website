"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-16 mt-24 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Let&apos;s Build Something Great Together!
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Whether you have an idea, need support, or want to collaborate, we&apos;re here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg shadow-lg">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-blue-100 mb-6 max-w-md text-lg">
              Have a question? Want to work with us? Let&apos;s talk!
            </p>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-100" />
                <span>+91 9693596408</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-100" />
                <span>codeiam@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-100" />
                <span>DIGIFAC First Floor</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-white rounded-full transform translate-x-1/3 translate-y-1/3" />
            <div className="absolute left-0 top-0 w-48 h-48 bg-white rounded-full transform -translate-x-1/3 -translate-y-1/3" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                id="name"
                placeholder="Your Name"
                aria-label="Your Name"
                autoComplete="off"
                className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <Input
                id="email"
                placeholder="Your Email"
                type="email"
                aria-label="Your Email"
                autoComplete="off"
                className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <Input
              id="phone"
              placeholder="Your Phone Number"
              type="tel"
              aria-label="Your Phone Number"
              autoComplete="off"
              className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <Textarea
              id="message"
              placeholder={"Tell us what’s on your mind..."}
              aria-label="Message"
              className="min-h-[120px] border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <Button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-md"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

