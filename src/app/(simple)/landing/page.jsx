// project-imports
import Hero from 'sections/landing/Hero';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/product';
import Apps from 'sections/landing/Apps';
import Free from 'sections/landing/Free';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';

// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  return (
    <>
      <Hero />
      <Technologies />
      <Combo />
      <Apps />
      <Free />
      <Testimonial />
      <Partner />
      <ContactUs />
    </>
  );
}
