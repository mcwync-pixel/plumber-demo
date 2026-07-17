import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Calendar,
  User,
  MessageSquare,
} from 'lucide-react';
import { supabase, type Enquiry } from '../lib/supabase';

export default function BookingForm({ phone = '1300 123 456' }: { phone?: string }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    issueType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload: Enquiry = {
      issue_type: form.issueType || 'General enquiry',
      name: form.name || null,
      phone: form.phone || null,
      email: form.email || null,
      suburb: form.suburb || null,
      message: form.message || null,
    };

    const { error } = await supabase.from('enquiries').insert(payload);

    if (error) {
      setStatus('error');
      console.error('Booking error:', error.message);
    } else {
      setStatus('success');
      setForm({ name: '', phone: '', email: '', suburb: '', issueType: '', message: '' });
    }
  };

  const issueTypes = [
    'Emergency Plumbing',
    'Blocked Drains',
    'Burst / Leaking Pipes',
    'Hot Water Systems',
    'Leak Detection',
    'Toilet Repairs',
    'Gas Fitting',
    'Roof & Gutter Repairs',
    'Other',
  ];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-950 shadow-2xl shadow-brand-950/20">
          <div className="grid lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-8 lg:p-12">
              <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-bold text-accent-300 ring-1 ring-accent-500/30">
                Book Online
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Book your plumbing job in seconds
              </h2>
              <p className="mt-4 text-brand-100">
                Fill in the form and we'll get back to you fast. For urgent
                emergencies, call us any time — we're available 24/7.
              </p>

              <div className="mt-8 space-y-4">
                <ContactRow
                  icon={Phone}
                  label="Call us"
                  value={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                />
                <ContactRow
                  icon={Mail}
                  label="Email us"
                  value="hello@goodneighbourplumbing.com.au"
                  href="mailto:hello@goodneighbourplumbing.com.au"
                />
                <ContactRow
                  icon={MapPin}
                  label="Service area"
                  value="All of Sydney & surrounding suburbs"
                />
                <ContactRow
                  icon={Clock}
                  label="Hours"
                  value="24 hours, 7 days a week"
                />
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">
                  What's the Good Neighbour difference?
                </p>
                <p className="mt-2 text-sm text-brand-100">
                  We know you'd rather be doing something other than dealing with
                  a plumbing issue. So we do the best we can to make the
                  experience as pleasant as possible from the first call to the
                  final clean-up. And we always follow-up to make sure everything
                  was completed to your absolute satisfaction.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white p-8 lg:p-12 lg:rounded-l-3xl">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center text-center animate-fade-up">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-50">
                    <CheckCircle2 className="h-10 w-10 text-accent-600" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
                    Enquiry received!
                  </h3>
                  <p className="mt-3 text-slate-500 max-w-sm">
                    Thanks for reaching out. We'll be in touch about your
                    plumbing job as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-100 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Request a booking
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

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={Phone} label="Phone">
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="04xx xxx xxx"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                      />
                    </Field>
                    <Field icon={Mail} label="Email">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field icon={MapPin} label="Suburb">
                      <input
                        type="text"
                        value={form.suburb}
                        onChange={(e) => setForm({ ...form, suburb: e.target.value })}
                        placeholder="e.g. Marrickville"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                      />
                    </Field>
                    <Field icon={Calendar} label="Issue type">
                      <select
                        value={form.issueType}
                        onChange={(e) => setForm({ ...form, issueType: e.target.value })}
                        className="w-full bg-transparent text-sm text-slate-800 outline-none"
                      >
                        <option value="">Select...</option>
                        {issueTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field icon={MessageSquare} label="Details (optional)">
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      placeholder="Describe the plumbing issue..."
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
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Booking Request
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to be contacted about your plumbing
                    enquiry. No pressure, no hidden extras.
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
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
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
        <Icon className="h-5 w-5 text-accent-400" />
      </div>
      <div>
        <p className="text-xs font-semibold text-brand-300 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
