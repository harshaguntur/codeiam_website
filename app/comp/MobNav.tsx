'use client'

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link"
import Logo from "./Logo"

// import Navlinks from "./Navlinks"
import { NavLinkss } from "../constant"


export default function MobNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">

          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle><Logo/></SheetTitle>
         
        </SheetHeader>
        <nav className="mt-6">
        
          
        
       
        
         
          <ul className="space-y-2">
            {NavLinkss.map((item, index) => (
              <li key={index}>
              
                <Link
                  href={item.route}
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  <SheetClose>
                  {item.name}
                  </SheetClose>
                
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}