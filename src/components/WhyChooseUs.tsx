import {
  BadgeCheck,
  MapPin,
  Users,
  HeartHandshake,
  Clock,
} from 'lucide-react';

const usps = [
  {
    icon: BadgeCheck,
    title: 'No gimmicks',
    desc: 'No add-ons, no pretend discounts, no surprise fees. No pressure. Just clear recommendations and an up-front price.',
  },
  {
    icon: Users,
    title: "We're local. Not a franchise",
    desc: 'Family-owned and operated since 2011. All our plumbers are fully-employed and part of the Good Neighbour team.',
  },
  {
    icon: HeartHandshake,
    title: 'Respect for your home',
    desc: "We treat your home like it's ours — tidy, professional work from first call to final clean-up.",
  },
  {
    icon: Clock,
    title: '24/7 availability',
    desc: 'Plumbing emergencies don\'t keep office hours. Neither do we. We\'re ready when you need us, day or night.',
  },
];

const stats = [
  { value: '13+', label: 'Years serving Sydney' },
  { value: '500+', label: '5-star reviews' },
  { value: '24/7', label: 'Emergency response' },
  { value: '100%', label: 'Satisfaction guarantee' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-bold text-accent-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Why Sydney Chooses Good Neighbour Plumbing
          </h2>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 p-6 ring-1 ring-brand-100"
            >
              <p className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* USP cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="group rounded-2xl border-2 border-slate-100 p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Service area banner */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-950 p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20">
                  <MapPin className="h-6 w-6 text-accent-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Servicing All of Sydney
                </h3>
              </div>
              <p className="mt-4 text-brand-100">
                We cover all of the Sydney region, delivering fast and reliable
                plumbing services wherever you are. From the Northern Beaches to
                the Shire, the Inner West to the Hills District — our local
                plumbers are nearby and ready to help.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Sydney CBD',
                  'Eastern Suburbs',
                  'Inner West',
                  'North Shore',
                  'Northern Beaches',
                  'Hills District',
                  'Sutherland Shire',
                  'Western Sydney',
                  'South Sydney',
                ].map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-brand-100 ring-1 ring-white/15"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1427563/pexels-photo-1427563.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sydney skyline"
                className="rounded-2xl object-cover h-64 w-full lg:h-80 ring-1 ring-white/10"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
