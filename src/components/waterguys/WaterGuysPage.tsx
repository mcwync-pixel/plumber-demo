import WGHeader from './WGHeader';
import WGHero from './WGHero';
import WGOffers from './WGOffers';
import WGServices from './WGServices';
import WGWhyUs from './WGWhyUs';
import WGTestimonials from './WGTestimonials';
import WGServiceAreas from './WGServiceAreas';
import WGContact from './WGContact';
import WGFooter from './WGFooter';

export default function WaterGuysPage() {
  return (
    <div className="min-h-screen bg-white">
      <WGHeader />
      <main>
        <WGHero />
        <WGOffers />
        <WGServices />
        <WGWhyUs />
        <WGTestimonials />
        <WGServiceAreas />
        <WGContact />
      </main>
      <WGFooter />
    </div>
  );
}
