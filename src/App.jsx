import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Engagement from './components/Engagement.jsx'
import Portfolio from './components/Portfolio.jsx'
import Approach from './components/Approach.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Technologies from './components/Technologies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Engagement />
        <Portfolio />
        <Approach />
        <WhyChooseUs />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
