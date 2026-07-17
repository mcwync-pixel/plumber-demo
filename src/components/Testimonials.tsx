import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael',
    suburb: 'Marrickville',
    text: "Called them for a blocked drain, Jake came out and explained all the works that needed to be done in detail. Once I understood and agreed to the quote they started right then and there and were done within the day! Easy to deal with and very professional from start to finish. No mess either.",
    rating: 5,
  },
  {
    name: 'Lauren',
    suburb: 'Bondi',
    text: "Can't fault them. Friendly team, turned up when they said they would and did a really neat job replacing our toilet. We really appreciated how easy they made the whole process and the respect they showed for our home.",
    rating: 5,
  },
  {
    name: 'James',
    suburb: 'Newtown',
    text: 'Had an issue with our hot water system and the team came out same day. Super friendly, explained everything properly and got it sorted quickly.',
    rating: 5,
  },
  {
    name: 'Sarah',
    suburb: 'Surry Hills',
    text: 'Really happy with the service from Good Neighbour Plumbing. They arrived on time, cleaned up after themselves and pricing was fair.',
    rating: 5,
  },
  {
    name: 'Emily',
    suburb: 'Ryde',
    text: 'The boys were fantastic. Honest advice, no upselling and the work was done properly the first time. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Daniel',
    suburb: 'Parramatta',
    text: 'Had a leaking tap driving us crazy. Quick response, great communication and affordable too. Appreciate the help.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700">
            Customer Reviews
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by Sydney homeowners
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Real feedback from customers who called Good Neighbour Plumbing for
            emergency repairs, blocked drains, hot water issues and general
            plumbing work.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display text-lg font-bold text-slate-900">
              4.9
            </span>
            <span className="text-sm text-slate-500">from 500+ reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-brand-100" />
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-slate-600 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-base font-bold text-white">
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
