import { Phone, Search, ClipboardCheck, Wrench, MessageSquare } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Call the waterguys',
    desc: 'Tell us what needs doing',
  },
  {
    num: '02',
    icon: Search,
    title: 'We check the issue',
    desc: 'Diagnose the real cause',
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'You get clear options',
    desc: 'A fixed price up front',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'We get it sorted',
    desc: 'Done right, clean and tidy',
  },
];

const trustPoints = [
  {
    title: 'Fast Sydney-wide response',
    desc: 'Plumbers stationed across Sydney so we reach you quickly, wherever you are.',
  },
  {
    title: 'Honest communication',
    desc: 'We explain the issue clearly and quote before any work begins — no surprises.',
  },
  {
    title: 'Respectful service',
    desc: 'Friendly, professional plumbers who treat your home with care from start to finish.',
  },
  {
    title: 'Clean worksite',
    desc: 'We leave your place as tidy as we found it — just with the plumbing sorted.',
  },
];

export default function WGWhyUs() {
  return (
    <section id="wg-why-us" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust banner */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Water Guys plumber servicing a water system"
              className="rounded-2xl object-cover h-80 w-full shadow-xl lg:h-[420px]"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5 shadow-xl">
              <p className="font-display text-3xl font-extrabold text-white">100%</p>
              <p className="text-sm font-semibold text-cyan-50">Satisfaction</p>
            </div>
          </div>
          <div>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold text-cyan-700 uppercase tracking-wide">
              Real plumbers, real work, real results
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Built around trust, speed & clean workmanship.
            </h2>
            <p className="mt-4 text-slate-600">
              WaterGuys Plumbing provide a fast Sydney-wide response with
              friendly, professional plumbers who take pride in doing the job
              properly. From the moment we arrive, we keep the process clear and
              straightforward.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {trustPoints.map((point) => (
                <div key={point.title} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-1 text-xs text-slate-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-700 uppercase tracking-wide">
            How it works
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Call. Check. Quote. Sorted.
          </h2>
          <p className="mt-3 text-slate-500">
            A simple process for anyone who just wants the job done properly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 border-t-2 border-dashed border-slate-200" />
                )}
                <div className="relative bg-white rounded-2xl border-2 border-slate-100 p-6 hover:border-cyan-200 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-display text-3xl font-extrabold text-slate-200">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Not sure banner */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 lg:p-10 text-center">
          <MessageSquare className="mx-auto h-10 w-10 text-white/80" />
          <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Not sure what's wrong?
          </h3>
          <p className="mt-3 text-cyan-50 max-w-xl mx-auto">
            We'll diagnose it, explain it in plain English and quote before any
            work begins. No guesswork, no obligation.
          </p>
          <a
            href="#wg-contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#wg-contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-cyan-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Phone className="h-4 w-4" />
            Talk to a plumber
          </a>
        </div>
      </div>
    </section>
  );
}
