import React from 'react'
import { NavLinkss } from '../constant'
import Link from 'next/link'
// import { TiArrowSortedDown } from "react-icons/ti";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { chapters } from '../constant'

const Navlinks = () => {
  return (
    <div className="gap-4 flex  items-center " >
     {NavLinkss.map((link)=>{
        return (
          <Link href={link.route} key={link.key}>
          <DropdownMenu >
          <DropdownMenuTrigger >
            
         
          
           {link.name}
           
     
          
             
             </DropdownMenuTrigger>
           
             
              {
                
                 link.name === "CHAPTERS" && <div className='flex -space-x-14'>
                 
                  <DropdownMenuContent side={'bottom'} align={'start'}>
                  {
                    chapters.map((item)=>(
                      <Link href={`${item.href}`} key={item.key} className='cursor-pointer ' >
                        <DropdownMenuItem className='cursor-pointer' >

                       {item.label}
                      
                          </DropdownMenuItem>
                          </Link>   
                      
                    ))}
                  </DropdownMenuContent> </div> }
            
         
            
       
            </DropdownMenu>
            </Link>
        )
     })}
    </div>
     
  )
}

export default Navlinks