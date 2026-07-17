import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IssueSelector from './components/IssueSelector';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WaterGuysPage from './components/waterguys/WaterGuysPage';

type Site = 'goodneighbour' | 'waterguys';

function getSiteFromHash(): Site {
  return window.location.hash.startsWith('#/waterguys') ? 'waterguys' : 'goodneighbour';
}

export default function App() {
  const [site, setSite] = useState<Site>(getSiteFromHash);

  useEffect(() => {
    const onHashChange = () => setSite(getSiteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const switchSite = (next: Site) => {
    window.location.hash = next === 'waterguys' ? '/waterguys' : '/';
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Site switcher badge — top-right floating */}
      <div className="fixed bottom-5 right-5 z-[60]">
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md p-1.5 shadow-xl ring-1 ring-slate-200">
          <button
            onClick={() => switchSite('goodneighbour')}
            className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
              site === 'goodneighbour'
                ? 'bg-brand-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Good Neighbour
          </button>
          <button
            onClick={() => switchSite('waterguys')}
            className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
              site === 'waterguys'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            WaterGuys
          </button>
        </div>
      </div>

      {site === 'goodneighbour' ? (
        <>
          <Header />
          <main>
            <Hero />
            <IssueSelector />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <BookingForm />
          </main>
          <Footer />
        </>
      ) : (
        <WaterGuysPage />
      )}
    </div>
  );
}
