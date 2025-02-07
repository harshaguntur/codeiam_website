import React from 'react'
import ResponsiveEventsList from '../comp/responsive-event'
import { PresentationSlider } from '../comp/slider'

const page = () => {
  return (
    <div className='mt-20'>
    <ResponsiveEventsList/>
    <PresentationSlider/>
  </div>
  )
}

export default page