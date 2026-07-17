import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  User,
  MessageSquare,
  Calendar,
} from 'lucide-react';
import { supabase, type Callback } from '../../lib/supabase';

export default function WGContact({ phone = '1300 928 348' }: { phone?: string }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    issue: '',
    preferredTime: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const payload: Callback = {
      name: form.name || null,
      phone: form.phone || null,
      issue: form.issue || null,
      preferred_time: form.preferredTime || null,
    };
    const { error } = await supabase.from('callbacks').insert(payload);
    setStatus(error ? 'error' : 'success');
    if (!error) setForm({ name: '', phone: '', issue: '', preferredTime: '' });
  };

  return (
    <section id="wg-contact" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-cyan-950 shadow-2xl shadow-blue-950/20">
          <div className="grid lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-8 lg:p-12">
              <span className="inline-block rounded-full bg-cyan-500/20 px-4 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wide ring-1 ring-cyan-500/30">
                Need a plumber near you?
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Tell us what's going on & we'll get back to you fast.
              </h2>
              <p className="mt-4 text-blue-100">
                Prefer we call you? Leave your details and what you need doing,
                and we'll be in touch within 30 minutes.
              </p>

              <div className="mt-8 space-y-4">
                <ContactRow icon={Phone} label="Call us" value={phone} href={`tel:${phone.replace(/\s/g, '')}`} />
                <ContactRow icon={Mail} label="Email" value="hello@waterguysplumbing.com.au" href="mailto:hello@waterguysplumbing.com.au" />
                <ContactRow icon={MapPin} label="Service area" value="Greater Sydney & surrounding regions" />
                <ContactRow icon={Clock} label="Hours" value="Mon–Sun, 7am–7pm" />
              </div>

              {/* Gallery strip */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <img
                  src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Plumber at work"
                  className="rounded-xl object-cover h-24 w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Plumbing repair"
                  className="rounded-xl object-cover h-24 w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.pexels.com/photos/8961074/pexels-photo-8961074.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pipe repair"
                  className="rounded-xl object-cover h-24 w-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white p-8 lg:p-12 lg:rounded-l-3xl">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center text-center animate-fade-up">
                  <CheckCircle2 className="h-16 w-16 text-cyan-500" />
                  <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
                    Got it — we'll call you fast!
                  </h3>
                  <p className="mt-3 text-slate-500 max-w-sm">
                    Thanks for reaching out. Keep your phone nearby — we'll be in
                    touch within 30 minutes.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-50 px-5 py-2.5 text-sm font-semibold text-cyan-700 hover:bg-cyan-100 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Request a callback
                  </h3>

                  <Field icon={User} label="Your name">
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                    />
                  </Field>

                  <Field icon={Phone} label="Phone number">
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="04xx xxx xxx"
                      className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                    />
                  </Field>

                  <Field icon={Calendar} label="Preferred time (optional)">
                    <select
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="w-full bg-transparent text-sm text-slate-800 outline-none"
                    >
                      <option value="">Anytime (within 30 min)</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </Field>

                  <Field icon={MessageSquare} label="What do you need done?">
                    <textarea
                      value={form.issue}
                      onChange={(e) => setForm({ ...form, issue: e.target.value })}
                      rows={3}
                      placeholder="e.g. burst pipe under the kitchen sink..."
                      className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none resize-none"
                    />
                  </Field>

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
                  <p className="text-center text-xs text-slate-400">
                    We'll call you back within 30 minutes during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: any;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
        {label}
      </label>
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all">
        <Icon className="h-5 w-5 shrink-0 text-slate-400" />
        {children}
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5 text-cyan-400" />
      </div>
      <div>
        <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">{label}</p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  ) : (
    content
  );
}
