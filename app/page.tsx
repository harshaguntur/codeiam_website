
import React from 'react'
// import { Hero } from './comp/Heros'
// import { Timelines } from './comp/Timeline'
import { Hero } from './comp/Hero'
import { FlipWordss } from './comp/FlipWords'
import { FeaturesSection } from './comp/Features'
import { AnimatedTestimonial } from './comp/Testinomial'
import { JoinTeam } from './comp/Jointeam'
import { OurPartners } from './comp/OurPartner'
import { Chap,  } from './comp/AppleCaraosel'
import Ourmission from './comp/Ourmission'
import Statistics from './comp/Statistics'
// import { CarouselPlugin } from './comp/Carousal'
// import AboutUs from './comp/AboutUs'
// import ChapterComp from './comp/ChapterComp'
// import { ActivitiesComp } from './comp/ActivitiesComp'
// import { TestinomialComp } from './comp/TestinomialComp'
// import Partner from './comp/Partner'

const page = () => {
  return (
    <div className='overflow-hidden'>
      {/* <div className='overflow-hidden'>
      <CarouselPlugin/>
      <AboutUs/>
      <ChapterComp/>
      <ActivitiesComp/>
      <TestinomialComp/>
      <Partner/>
      </div> */}
      <div id='home'>
      <Hero/>
      <Statistics/>
      
      {/* <Timelines/> */}
      <Ourmission/>
      </div>
    <div id="features">
    <FlipWordss/>
    <FeaturesSection/>
    </div>
     <div id='chapters'>
     <Chap/>
     </div>
   <div id="testinomials">
   <AnimatedTestimonial/>
   </div>
  <div id="partners">
  <OurPartners/>
  </div>
 
   <div id="joinus">
   <JoinTeam/>
   </div>
   
    </div>
  )
}

export default page