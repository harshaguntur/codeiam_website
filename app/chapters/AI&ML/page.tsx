import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
import { aiMlChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={aiMlChapter.content.description} images={aiMlChapter.content.images} previousEvents={aiMlChapter.content.previousEvents} teamMembers={aiMlChapter.content.teamMembers} title={aiMlChapter.title} whatsappLink={aiMlChapter.content.whatsappLink} key={aiMlChapter.category}/>
    </div>
  )
}

export default page