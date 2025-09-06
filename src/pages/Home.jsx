import React from 'react'
import Navbar from '../Component/navbar/Navbar'
import Hero from '../Component/hero/Hero'
// import TrustedCompanies from '../Component/Trustedcompanies/Trustedcompani'
// import Footer from '../Component/footer/Footer'
import Testimonials from '../Component/Testimonials/Testimonails'
// import HeroCTA from '../Component/Herocta/Herocta'
import Placements from '../Component/PLacements/Placements'
import Highlights from '../Component/Highligts/Highligts'
import InfoSection from '../Component/Infosection/Infosection'
import Contact from '../Component/contact/Contact'
// import Sexa from '../Component/Sexa/Sexa'
import Practical from '../Component/Practical/Practical'
import SafetyHighlights from '../Component/Saftyhighligts/Saftyhighighligts'
import PopularCourses from '../Component/PopularCourses/PopularCourses'
import Saftyfaq from '../Component/Saftyfaq/Saftyfaq'
// import Ragistrationform from '../Component/Regestration/Ragistrartionform'
import BannerSectionOnly from '../Component/Bannersectiononly/Bannersectiononly'
import BlogSection from '../Component/BlogSection/BlogSection'
import Banner from '../Component/Banner/Banner'
import Collab from '../Component/Collab/Collab'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* <Navbar/> */}
      <Banner/>
      <Hero/>
      {/* <TrustedCompanies/> */}
      <InfoSection/>
      <PopularCourses/>
      <Placements/>
      <Collab/>
      <Practical/>
      <BlogSection/>
      <SafetyHighlights/>
      <Testimonials/>
      <Highlights/><br />
      <Saftyfaq/>
      <Contact/> <br />
      {/* <Sexa/> */}
      {/* <HeroCTA/> */}
      {/* <Ragistrationform/> <br /> */}
      <BannerSectionOnly/> <br />
      {/* <Footer/> */}
    </div>
  )
}

export default Home
