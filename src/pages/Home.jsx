
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function Home() {
  return (
    <div className="w-full">
       <Header />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

