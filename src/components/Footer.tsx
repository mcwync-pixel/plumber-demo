import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ShieldCheck,
} from 'lucide-react';

const services = [
  'Emergency Plumbing',
  'Blocked Drains',
  'Burst & Leaking Pipes',
  'Hot Water Systems',
  'Leak Detection',
  'Toilet Repairs',
  'Gas Fitting',
  'Roof & Gutter Repairs',
];

const areas = [
  'Sydney CBD',
  'Eastern Suburbs',
  'Inner West',
  'North Shore',
  'Northern Beaches',
  'Hills District',
  'Sutherland Shire',
  'Western Sydney',
];

export default function Footer({ phone = '1300 123 456' }: { phone?: string }) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-white">
              Need a plumber in Sydney right now?
            </p>
            <p className="mt-1 text-sm text-slate-400">
              We're available 24/7 — call us or book online in seconds.
            </p>
          </div>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call {phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700">
                <Wrench className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-white">
                  Good Neighbour
                </span>
                <span className="text-sm font-semibold text-brand-400">
                  Plumbing
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Sydney's trusted 24/7 plumbers. Family-owned and operated since
              2011. Up-front pricing and tidy, professional work from first call
              to final clean-up.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector('#services')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
              Service Areas
            </h4>
            <ul className="mt-4 space-y-2.5">
              {areas.map((a) => (
                <li key={a} className="text-sm text-slate-400">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-400 mt-0.5" />
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-400 mt-0.5" />
                <a
                  href="mailto:hello@goodneighbourplumbing.com.au"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  hello@goodneighbourplumbing.com.au
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-400 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Servicing all of Sydney, NSW
                </span>
              </li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-accent-400" />
              <span className="text-xs font-semibold text-slate-300">
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Good Neighbour Plumbing. All rights
            reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 ring-1 ring-white/10 hover:bg-brand-500 hover:text-white hover:ring-brand-500 transition-all"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
