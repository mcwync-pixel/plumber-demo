import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Tanya R.',
    suburb: 'Marrickville',
    text: 'Had a burst pipe at 9pm on a Sunday and the WaterGuys had someone at my door within the hour. Friendly, knew exactly what to do and cleaned up after. Lifesavers.',
    rating: 5,
  },
  {
    name: 'Mark D.',
    suburb: 'Castle Hill',
    text: 'Booked online, got the $50 off, and they turned up on time the next morning. Replaced our old hot water system the same day. Fair price, no nonsense.',
    rating: 5,
  },
  {
    name: 'Sophie L.',
    suburb: 'Zetland',
    text: 'The dripping tap that was driving me insane is finally fixed. Quick, clean and the plumber explained everything before he started. Highly recommend.',
    rating: 5,
  },
  {
    name: 'James P.',
    suburb: 'Manly',
    text: 'Blocked drain was backing up into the yard. They used a camera to find the issue, showed me on screen, then jet-blasted it clear. Professional from go to whoa.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    suburb: 'Parramatta',
    text: 'Renovated our bathroom and the WaterGuys did all the plumbing. Excellent workmanship, always on time, and left the place spotless. Will use them again.',
    rating: 5,
  },
  {
    name: 'Dean W.',
    suburb: 'Randwick',
    text: 'Called them for a leaking toilet, they diagnosed it over the phone, gave me a rough price, and fixed it that afternoon. Honest and reliable — exactly what you want.',
    rating: 5,
  },
];

export default function WGTestimonials() {
  return (
    <section id="wg-reviews" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-700 uppercase tracking-wide">
            Client testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What your neighbours say
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display text-lg font-bold text-slate-900">4.9</span>
            <span className="text-sm text-slate-500">Google reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-cyan-100" />
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-slate-600 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-display text-base font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.suburb}, Sydney</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
