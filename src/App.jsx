import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Hero from './Component/hero/Hero'
import TrustedCompanies from './Component/Trustedcompanies/Trustedcompani'
import Footer from './Component/footer/Footer'
import Testimonials from './Component/Testimonials/Testimonails'
import HeroCTA from './Component/Herocta/Herocta'
import Placements from './Component/PLacements/Placements'
// import TopCourses from './Component/Topcourse/Topcourse'
import Highlights from './Component/Highligts/Highligts'
import InfoSection from './Component/Infosection/Infosection'
import Contact from './Component/contact/Contact'
import Sexa from './Component/Sexa/Sexa'
import Practical from './Component/Practical/Practical'
import SafetyHighlights from './Component/Saftyhighligts/Saftyhighighligts'
import PopularCourses from './Component/PopularCourses/PopularCourses'
import Saftyfaq from './Component/Saftyfaq/Saftyfaq'
// import Plan from './Component/Cihsplan/Plan'
// import Ragistrationform from './Component/Regestration/Ragistrartionform'
// import HeroSection from './Component/Herosection/Herosection'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      {/* <HeroSection/> */}
      <Hero/>
      <TrustedCompanies/>
      <InfoSection/>
      <PopularCourses/>
      <Placements/>
      {/* <TopCourses/> */}
      <Practical/>
      <SafetyHighlights/>
      {/* <Plan/> */}
      {/* <Ragistrationform/> */}
      <Testimonials/>
      <Contact/>
      <Highlights/>
      <Saftyfaq/>
       <Sexa/>
       <HeroCTA/>
      <Footer/>
    </div>
  )
}

export default App
