import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
// // import { aiMlChapter } from '@/app/constant'
// import { marketingEventChapter } from '@/app/constant'
import { marketingEventChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={ marketingEventChapter.content.description} images={ marketingEventChapter.content.images} previousEvents={ marketingEventChapter.content.previousEvents} teamMembers={ marketingEventChapter.content.teamMembers} title={ marketingEventChapter.title} whatsappLink={ marketingEventChapter.content.whatsappLink} key={ marketingEventChapter.category}/>
    </div>
  )
}

export default page