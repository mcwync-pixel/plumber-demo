import { Tag, Gift, Stethoscope, ArrowRight } from 'lucide-react';

const offers = [
  {
    icon: Tag,
    badge: '$50 OFF',
    title: 'Online Bookings',
    desc: 'Get $50 off your first service when you book online. Limited time only.',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Gift,
    badge: 'SPECIAL',
    title: 'Same-Day Service',
    desc: "Call before 12pm and we'll get a plumber to your door the same day.",
    image:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Stethoscope,
    badge: 'FREE',
    title: 'Plumbing Health Check',
    desc: 'A free 15-point inspection with every paid job — catch issues early.',
    image:
      'https://images.pexels.com/photos/8961074/pexels-photo-8961074.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-amber-500 to-orange-600',
  },
];

export default function WGOffers() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold text-cyan-700 uppercase tracking-wide">
            This month only
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Unexpected issues need special offers.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => {
            return (
              <div
                key={offer.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 rounded-xl bg-gradient-to-r ${offer.accent} px-4 py-2 text-sm font-extrabold text-white shadow-lg`}
                  >
                    {offer.badge}
                  </div>
                  <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-white">
                    {offer.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600">{offer.desc}</p>
                  <a
                    href="#wg-contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#wg-contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    Claim this offer
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
