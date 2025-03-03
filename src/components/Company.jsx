import { useEffect } from "react"
import AboutHero from "./AboutHero"
import AboutMission from "./AboutMission"
import WhyChooseUs from './WhyChooseUs'
import JoinUs from './JoinUs'
import Footer from './Footer'


export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Ensures it runs only when the component mounts
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <WhyChooseUs/>
      <JoinUs/>
      <Footer/>
     
    </main>
  )
}

