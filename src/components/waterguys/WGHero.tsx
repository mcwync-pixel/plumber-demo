import { useState } from 'react';
import {
  Phone,
  Star,
  Clock,
  ShieldCheck,
  Droplets,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { supabase, type Callback } from '../../lib/supabase';

export default function WGHero({ phone = '1300 928 348' }: { phone?: string }) {
  const [form, setForm] = useState({ name: '', phone: '', issue: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const payload: Callback = {
      name: form.name || null,
      phone: form.phone || null,
      issue: form.issue || null,
    };
    const { error } = await supabase.from('callbacks').insert(payload);
    setStatus(error ? 'error' : 'success');
    if (!error) setForm({ name: '', phone: '', issue: '' });
  };

  return (
    <section
      id="wg-top"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1.5 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/25">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              Your local Sydney plumbers
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Need a plumber near you?{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Call the waterguys.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-blue-100 mx-auto lg:mx-0">
              From dripping taps to burst pipes, leaking toilets to new installs —
              we handle all your everyday plumbing fast, clean and at a fair
              price. <strong className="text-white">One trusted local team for the lot.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call {phone}
              </a>
              <a
                href="#wg-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#wg-contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-4 text-base font-bold text-white ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                Request a callback
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold">Google Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-400" />
                <span>30-min callback</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Right: callback form card */}
          <div className="animate-fade-in lg:pl-4">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-blue-950/30">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
                  <Droplets className="h-6 w-6 text-white" fill="white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Request a callback
                  </h3>
                  <p className="text-sm text-slate-500">
                    We'll call you back within 30 minutes.
                  </p>
                </div>
              </div>

              {status === 'success' ? (
                <div className="mt-6 text-center py-8 animate-fade-up">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-cyan-500" />
                  <p className="mt-4 font-bold text-slate-900">Got it — we'll call you back fast!</p>
                  <p className="mt-1 text-sm text-slate-500">Keep your phone nearby.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="04xx xxx xxx"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      What do you need done?
                    </label>
                    <textarea
                      value={form.issue}
                      onChange={(e) => setForm({ ...form, issue: e.target.value })}
                      rows={3}
                      placeholder="e.g. dripping tap in the kitchen..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Request callback
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
