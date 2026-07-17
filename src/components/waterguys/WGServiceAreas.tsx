import { MapPin, Phone } from 'lucide-react';

const areas = [
  'Sydney CBD', 'Eastern Suburbs', 'Inner West', 'Lower North Shore',
  'Upper North Shore', 'Northern Beaches', 'Hills District', 'South Sydney',
  'Sutherland Shire', 'St George', 'Western Sydney', 'Parramatta',
  'Ryde', 'Canada Bay', 'Strathfield', 'Canterbury-Bankstown',
];

export default function WGServiceAreas() {
  return (
    <section id="wg-areas" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold text-cyan-700 uppercase tracking-wide">
              Sydney-wide coverage
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We service Greater Sydney and the major surrounding council
              regions, with fast help for everyday plumbing, blocked drains, hot
              water, gas fitting and leak detection.
            </p>
            <div className="mt-6 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
              <p className="text-sm font-semibold text-amber-800">
                Not sure if your suburb is included?
              </p>
              <p className="mt-1 text-sm text-amber-700">
                Give us a quick call and we'll confirm.
              </p>
            </div>
            <a
              href="tel:1300928348"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call to check your area
            </a>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 ring-1 ring-slate-100 hover:bg-cyan-50 hover:ring-cyan-200 transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-cyan-500" />
                  <span className="text-xs font-semibold text-slate-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
