import Chapterpagese from '@/app/comp/Chapterpage'
import React from 'react'
// import { aiMlChapter } from '@/app/constant'
import { devSecOpsChapter } from '@/app/constant'
const page = () => {
  return (
    <div>
        <Chapterpagese description={devSecOpsChapter.content.description} images={devSecOpsChapter.content.images} previousEvents={devSecOpsChapter.content.previousEvents} teamMembers={devSecOpsChapter.content.teamMembers} title={devSecOpsChapter.title} whatsappLink={devSecOpsChapter.content.whatsappLink} key={devSecOpsChapter.category}/>
    </div>
  )
}

export default page