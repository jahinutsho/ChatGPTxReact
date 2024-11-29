import AboutUs from "./AboutUs"
import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"
import TeamMemberCard from "./TeamMemberCard"
import OurServices from './OurServices';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <TeamMemberCard/>
      <OurServices/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App