import { Hero } from '../components/hero';
import { AboutSection } from '../components/about-section';
import { ConnectionFlow } from '../components/connection-flow';
import { WhatsIncluded } from '../components/whats-included';
import { FinalCTA } from '../components/final-cta';

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ConnectionFlow />
      <WhatsIncluded />
      <FinalCTA />
    </>
  );
}