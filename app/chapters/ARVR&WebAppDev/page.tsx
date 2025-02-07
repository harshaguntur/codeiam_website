import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'

import { arVrChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={arVrChapter.content.description} images={arVrChapter.content.images} previousEvents={arVrChapter.content.previousEvents} teamMembers={arVrChapter.content.teamMembers} title={arVrChapter.title} whatsappLink={arVrChapter.content.whatsappLink} key={arVrChapter.category}/>
    </div>
  )
}

export default page