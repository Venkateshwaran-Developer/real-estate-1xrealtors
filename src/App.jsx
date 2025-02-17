import Footer from "./components/Footer"
import SideBanner from "./components/SideBanner"
import Newsletter from "./components/Newsletter"
import Banner from "./components/Banner"
import Features from "./components/Features"
import Card from "./components/Card"
import Galary from "./components/Galary"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import BackToTop from "./components/BackToTop"


function App() {
  

  return (
   <div className=" overflow-hidden">
   <Header/>
   <main className="mt-[80px]">

   
   <HeroSection/>
   {/* <Card/> */}
   <Features/>

    <SideBanner/>
   <Banner/>
   <Galary/>

    {/* <Newsletter/> */}
    </main>
    <BackToTop/>
    <Faq/>
    <Testimonials/>
    <Footer/>
   </div>
  )
}

export default App
