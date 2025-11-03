import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="w-full">
   {/*  "<Header />" = use in "App.jsx" giving error page not showing on console if  <Header / declare here>  */}
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

