import { Phone, CalendarCheck, ShieldCheck, Clock, Star } from 'lucide-react';

export default function Hero({ phone = '1300 123 456' }: { phone?: string }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-semibold text-accent-300 ring-1 ring-accent-500/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-400" />
              </span>
              Available now — 24/7 across Sydney
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sydney's Trusted{' '}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                24/7 Plumbers
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-brand-100 mx-auto lg:mx-0">
              Fast, reliable plumbing services across Sydney. We're ready when
              you need us — day or night. Call now for immediate service or book
              online in seconds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-accent-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call {phone}
              </a>
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#booking')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-4 text-base font-bold text-white ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <CalendarCheck className="h-5 w-5" />
                Book Online
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-brand-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent-400" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent-400 fill-accent-400" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right: van / image card */}
          <div className="relative animate-fade-in lg:pl-8">
            <div className="relative rounded-3xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Good Neighbour Plumbing van servicing Sydney"
                className="rounded-2xl object-cover h-[380px] w-full lg:h-[460px]"
                loading="eager"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-2xl bg-white p-4 shadow-2xl shadow-brand-950/30 animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                    <Clock className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-slate-900">
                      &lt; 60 min
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Avg. response time
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating rating card */}
              <div
                className="absolute -top-4 -right-4 lg:-right-8 rounded-2xl bg-white p-4 shadow-2xl shadow-brand-950/30 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-1 font-display text-lg font-bold text-slate-900">
                  4.9/5
                </p>
                <p className="text-xs font-medium text-slate-500">
                  500+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
