import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck } from 'lucide-react';

const services = [
  'Tap & Toilet Repairs',
  'Leaking & Burst Pipes',
  'Hot Water Issues',
  'Blocked Drains',
  'Bathroom & Kitchen',
  'Taps, Fixtures & Installs',
];

export default function WGFooter({ phone = '1300 928 348' }: { phone?: string }) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA strip */}
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-white">
              Need a plumber? Call the waterguys.
            </p>
            <p className="mt-1 text-sm text-cyan-100">
              Fast, friendly and professional — we'll get it sorted.
            </p>
          </div>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-cyan-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
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
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                <Droplets className="h-6 w-6 text-white" strokeWidth={2.5} fill="white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white">WaterGuys</span>
                <span className="text-xs font-semibold text-cyan-400">Plumbing</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Fast, friendly and professional plumbing services across Sydney.
              From urgent callouts to everyday repairs, we keep things clear,
              clean and properly handled.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wide">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#wg-services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#wg-services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wide">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#wg-why-us" onClick={(e) => { e.preventDefault(); document.querySelector('#wg-why-us')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#wg-reviews" onClick={(e) => { e.preventDefault(); document.querySelector('#wg-reviews')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Reviews</a></li>
              <li><a href="#wg-areas" onClick={(e) => { e.preventDefault(); document.querySelector('#wg-areas')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Service Areas</a></li>
              <li><a href="#wg-contact" onClick={(e) => { e.preventDefault(); document.querySelector('#wg-contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Request a Callback</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wide">Get in touch</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-slate-400 hover:text-white transition-colors">{phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <a href="mailto:hello@waterguysplumbing.com.au" className="text-sm text-slate-400 hover:text-white transition-colors">hello@waterguysplumbing.com.au</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <span className="text-sm text-slate-400">Greater Sydney, NSW</span>
              </li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-300">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} WaterGuys Plumbing. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
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
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 ring-1 ring-white/10 hover:bg-cyan-500 hover:text-white hover:ring-cyan-500 transition-all"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
