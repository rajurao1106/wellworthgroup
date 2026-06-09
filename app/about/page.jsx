import React from 'react'
import About from './About'
import Certifications from './Certifications'
import OurMembers from './OurMembers'
import CTA2 from '@/components/homepage/CTA'

export default function page() {
  return (
    <div>
      <About/>
      <Certifications/>
      <OurMembers/>
      <CTA2/>
    </div>
  )
}
