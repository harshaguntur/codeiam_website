import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
// import { internationalAuTechiesChapter } from '@/app/constant'
// import { internationalAuTechiesChapter } from '@/app/constant'
import { internationalAuTechiesChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={ internationalAuTechiesChapter.content.description} images={ internationalAuTechiesChapter.content.images} previousEvents={ internationalAuTechiesChapter.content.previousEvents} teamMembers={ internationalAuTechiesChapter.content.teamMembers} title={ internationalAuTechiesChapter.title} whatsappLink={ internationalAuTechiesChapter.content.whatsappLink} key={ internationalAuTechiesChapter.category}/>
    </div>
  )
}

export default page