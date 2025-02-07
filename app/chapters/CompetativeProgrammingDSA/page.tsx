import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
// import { aiMlChapter } from '@/app/constant'
import { competitiveProgrammingChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={competitiveProgrammingChapter.content.description} images={competitiveProgrammingChapter.content.images} previousEvents={competitiveProgrammingChapter.content.previousEvents} teamMembers={competitiveProgrammingChapter.content.teamMembers} title={competitiveProgrammingChapter.title} whatsappLink={competitiveProgrammingChapter.content.whatsappLink} key={competitiveProgrammingChapter.category}/>
    </div>
  )
}

export default page