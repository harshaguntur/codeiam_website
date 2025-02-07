
import { Shantell_Sans } from "next/font/google";
import Link from "next/link";
const shantell = Shantell_Sans({ subsets: ["latin"] });
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={` pt-2 text-xs md:text-sm  border-t w-full flex-col items-center bottom-0 relative text-white border-white/10 flex bg-primary text-pretty text-primary justify-center transition-all duration-300   ${shantell.className}`}>
    
    
      <p className="text-sm text-center md:text-left">
        © {currentYear} <span className='underline decoration-dotted decoration-primary'>
          <Link href={"https://ygntech.vercel.app"}>
            <span className='bg-gradient-to-t from-blue-300 to-indigo-300 text-transparent bg-clip-text  font-extrabold animate-pulse '>Codeiam</span>
          </Link>
        </span>. All rights reserved.
      </p>
     
    </div>
  );
}

export default Footer;