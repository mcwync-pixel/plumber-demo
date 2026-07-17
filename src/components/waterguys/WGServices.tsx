import { Droplet, Wrench, Flame, Waves, Bath, ShowerHead, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Tap & Toilet Repairs',
    desc: 'Dripping taps, running or leaking toilets fixed fast and properly the first time.',
    image:
      'https://images.pexels.com/photos/8961074/pexels-photo-8961074.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplet,
    title: 'Leaking & Burst Pipes',
    desc: 'From a small leak to a burst main, we stop the water and repair the pipe properly.',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Hot Water Issues',
    desc: 'Repairs and replacements for all gas, electric, solar and heat pump systems.',
    image:
      'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Waves,
    title: 'Blocked Drains',
    desc: 'Sinks, toilets and sewer lines cleared with CCTV cameras and high-pressure jetting.',
    image:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Bath,
    title: 'Bathroom & Kitchen Plumbing',
    desc: 'Fit-offs, renovations and new sinks, taps and appliances connected and tested.',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShowerHead,
    title: 'Taps, Fixtures & Installs',
    desc: 'Supply and install of taps, mixers, fixtures and everyday plumbing hardware.',
    image:
      'https://images.pexels.com/photos/8961074/pexels-photo-8961074.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const warningSigns = [
  "Dripping or running taps that won't stop",
  'Slow draining sinks, showers or tubs',
  'Water stains on walls or ceilings',
  'Unexplained spike in your water bill',
  'Gurgling sounds from pipes or drains',
  'Low water pressure in one or more taps',
];

export default function WGServices() {
  return (
    <section id="wg-services" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Problem signs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-700 uppercase tracking-wide">
              Everyday plumbing near you
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Small plumbing problems don't stay small.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              That drip or slow drain seems minor — until it's a water bill spike
              or real water damage. These are the tell-tale signs it's time to
              call a plumber:
            </p>
            <ul className="mt-6 space-y-3">
              {warningSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                    <Droplet className="h-3.5 w-3.5 text-cyan-600" fill="currentColor" />
                  </div>
                  <span className="text-sm text-slate-700">{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-cyan-50 p-4 ring-1 ring-cyan-100">
              <p className="text-sm font-semibold text-cyan-800">
                Not sure what's wrong?
              </p>
              <p className="mt-1 text-sm text-cyan-700">
                We'll diagnose it, explain it in plain English and quote before
                any work begins.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Water Guys plumber at work"
              className="rounded-2xl object-cover h-80 w-full shadow-xl lg:h-96"
              loading="lazy"
            />
          </div>
        </div>

        {/* Services grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold text-cyan-700 uppercase tracking-wide">
            All your everyday plumbing
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What we help with.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-xl hover:ring-cyan-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-slate-100">
                    <Icon className="h-5 w-5 text-cyan-600" />
                  </div>
                </div>
                <div className="p-5 pt-7">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
                  <a
                    href="#wg-contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#wg-contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    Get this sorted
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
