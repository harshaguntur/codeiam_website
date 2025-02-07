import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
// import { aiMlChapter } from '@/app/constant'
import { industry4Chapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={ industry4Chapter.content.description} images={ industry4Chapter.content.images} previousEvents={ industry4Chapter.content.previousEvents} teamMembers={ industry4Chapter.content.teamMembers} title={ industry4Chapter.title} whatsappLink={ industry4Chapter.content.whatsappLink} key={ industry4Chapter.category}/>
    </div>
  )
}

export default page