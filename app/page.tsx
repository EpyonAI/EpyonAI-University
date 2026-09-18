import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Projects from '@/components/sections/Projects';
import HowItWorks from '@/components/sections/HowItWorks';
import Audience from '@/components/sections/Audience';
import CallToAction from '@/components/sections/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Projects />
      <HowItWorks />
      <Audience />
      <CallToAction />
    </>
  );
}
