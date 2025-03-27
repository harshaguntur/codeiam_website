import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-300/30 blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-yellow-300/30 blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header with logos */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="/req.jpg"
              alt="CODEIAM Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-700 tracking-wider">CODEIAM</h1>
              <p className="text-blue-500 text-sm md:text-base">PRE-INCUBATION AND HACKATHON CLUSTERS.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/req.jpg"
              alt="College Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div> */}

        {/* Chapter Title with Glassmorphism */}
        <div className="relative mb-8 mt-20">
          <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-2xl"></div>
          <div className="relative backdrop-blur-sm bg-white/30 border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800">
                Web, App and AR/VR Development Chapter
              </h2>
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="backdrop-blur-sm bg-white/40 border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
            <div className="bg-yellow-400 rounded-lg p-3 mb-6">
              <h3 className="text-xl font-bold text-center">Calling All 2nd & 3rd years!</h3>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Missed the Recruitment?</h3>
              <p className="text-2xl font-bold">You can still apply online!</p>
            </div>
            <div className="bg-yellow-400 rounded-lg p-3 mb-4">
              <h3 className="text-lg font-bold text-center">What&apos;s in Store for You?</h3>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Coding Bootcamps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Challenges & Hackathons</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Industry-Level Projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Networking & Speaker Sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Internships & Career Growth</span>
              </li>
            </ul>
          
          </div>

          {/* Right Column */}
          <div className="backdrop-blur-sm bg-white/40 border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
            <div className="bg-yellow-400 rounded-lg p-3 mb-6">
              <h3 className="text-lg font-bold text-center">Perks for Active Participants!</h3>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Exclusive Perks for Active Participants!</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hands-on training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-world work experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Direct mentorship & collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Goodies, certificates, and career</span>
              </li>
            </ul>
            <div className="flex justify-center mb-4">
              <Image
                src="/req.jpg"
                alt="QR Code"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Need help? Contact: 8328313651</p>
              <p>gaganyarramsetty@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Application Form iframe with glassmorphism */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-2xl"></div>
          <div className="relative backdrop-blur-sm bg-white/30 border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Apply Now</h2>
            <div
  className="relative w-full overflow-hidden rounded-lg"
  style={{
    height: "100vh",
  }}
>
  <iframe
    src="https://ubiquitous-elderberry-49b.notion.site/ebd/1c3c5c15897080429a6ad7c9f52fa4f4"
    className="absolute top-0 left-0 w-full h-full border-none"
    allowFullScreen
  />
</div>

          </div>
        </div>

        {/* Footer */}
        <footer className="backdrop-blur-sm bg-white/40 border border-white/50 rounded-2xl p-4 text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
          <p className="text-blue-800">© 2023 CODEIAM - Web, App and AR/VR Development Chapter. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

