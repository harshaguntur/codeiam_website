import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
// import { aiMlChapter } from '@/app/constant'
// import { industry4Chapter } from '@/app/constant'
import { womenTechiesChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={ womenTechiesChapter.content.description} images={ womenTechiesChapter.content.images} previousEvents={ womenTechiesChapter.content.previousEvents} teamMembers={ womenTechiesChapter.content.teamMembers} title={ womenTechiesChapter.title} whatsappLink={ womenTechiesChapter.content.whatsappLink} key={ womenTechiesChapter.category}/>
    </div>
  )
}

export default page