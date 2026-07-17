import {
  Zap,
  Droplets,
  Wrench,
  Flame,
  AlertCircle,
  Bath,
  CloudRain,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Emergency Plumbing',
    desc: "24/7 fast response for urgent plumbing issues across Sydney.",
    image:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: '24/7',
  },
  {
    icon: Droplets,
    title: 'Blocked Drains',
    desc: 'Fast clearing for blocked toilets, sinks and household drains.',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Burst & Leaking Pipes',
    desc: 'Expert repairs for burst pipes and hidden water leaks.',
    image:
      'https://images.pexels.com/photos/8961074/pexels-photo-8961074.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Hot Water Systems',
    desc: 'Installation and replacement for all major hot water types.',
    image:
      'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Hot Water Repairs & Installation',
    desc: 'Reliable repairs and installation for new hot water systems.',
    image:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: AlertCircle,
    title: 'Leak Detection',
    desc: 'Accurate detection of hidden leaks in walls, ceilings and slabs.',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Bath,
    title: 'Toilet Repairs',
    desc: 'Fast repairs for blocked, leaking or faulty toilets.',
    image:
      'https://images.pexels.com/photos/8961074/pexels-photo-8961074.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Gas Fitting',
    desc: 'Licensed gas fitting, repairs and safety checks for your home.',
    image:
      'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: CloudRain,
    title: 'Roof & Gutter Repairs',
    desc: 'Reliable repairs for leaking roofs, gutters and downpipes.',
    image:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-700">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Every major plumbing issue, sorted.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            We take care of every major plumbing issue in your home, from burst
            or leaking pipes and blocked drains to hot water repairs,
            replacements and new installations. Our licensed Sydney plumbers
            work with all leading hot water types and brands, and are available
            24/7 to diagnose the problem, explain your options clearly and
            complete reliable, long-lasting repairs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-xl hover:ring-brand-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  {service.badge && (
                    <span className="absolute top-3 right-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      {service.badge}
                    </span>
                  )}
                  <div className="absolute -bottom-6 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-slate-100">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-8">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
                  <a
                    href="#booking"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector('#booking')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Get help with this
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
