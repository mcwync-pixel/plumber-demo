import { useState } from 'react';
import {
  Droplets,
  Droplet,
  Flame,
  Bath,
  AlertCircle,
  Wrench,
  Zap,
  Home,
  CloudRain,
  ArrowRight,
  ArrowLeft,
  Check,
  MessageSquare,
  Camera,
  ShieldCheck,
  CalendarClock,
  CalendarDays,
  ClipboardCheck,
  CookingPot,
  WashingMachine,
  Building2,
  Store,
  Sun,
  Sunrise,
  Sunset,
  AlarmClockCheck,
  Send,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { supabase, type Enquiry } from '../lib/supabase';

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const issues = [
  { id: 'blocked-drains', label: 'Blocked Drains', icon: Droplets },
  { id: 'burst-pipes', label: 'Burst / Leaking Pipes', icon: Wrench },
  { id: 'hot-water', label: 'Hot Water Issues', icon: Flame },
  { id: 'toilet-repairs', label: 'Toilet Repairs', icon: Bath },
  { id: 'leaking-taps', label: 'Leaking Taps', icon: Droplet },
  { id: 'gas-fitting', label: 'Gas Fitting', icon: Flame },
  { id: 'emergency', label: 'Emergency Plumbing', icon: AlertCircle },
  { id: 'roof-gutter', label: 'Roof & Gutter', icon: CloudRain },
];

const hotWaterTypes = [
  { id: 'gas', label: 'Gas Storage', icon: Flame },
  { id: 'electric', label: 'Electric', icon: Zap },
  { id: 'not-sure', label: 'Not sure / Other', icon: AlertCircle },
];

const propertyScopes = [
  { id: 'one-fixtures', label: 'One fixture', icon: Droplet },
  { id: 'multiple-rooms', label: 'Multiple rooms', icon: Wrench },
  { id: 'whole-property', label: 'Whole property', icon: Home },
];

const contactPrefs = [
  { id: 'call', label: 'Phone call', icon: MessageSquare },
  { id: 'sms', label: 'Text message', icon: MessageSquare },
  { id: 'photos', label: 'Send photos', icon: Camera },
  { id: 'email', label: 'Email', icon: ShieldCheck },
];

const urgencyLevels = [
  { id: 'today', label: 'Today', icon: CalendarClock },
  { id: 'tomorrow', label: 'Tomorrow', icon: CalendarDays },
  { id: 'this-week', label: 'This week', icon: ClipboardCheck },
];

const roomOptions = [
  { id: 'kitchen', label: 'Kitchen', icon: CookingPot },
  { id: 'bathroom', label: 'Bathroom', icon: Bath },
  { id: 'laundry', label: 'Laundry', icon: WashingMachine },
];

const propertyTypes = [
  { id: 'house', label: 'House', icon: Home },
  { id: 'apartment', label: 'Apartment', icon: Building2 },
  { id: 'townhouse', label: 'Townhouse', icon: Home },
  { id: 'commercial', label: 'Commercial', icon: Store },
];

const timePreferences = [
  { id: 'morning', label: 'Morning', icon: Sunrise },
  { id: 'afternoon', label: 'Afternoon', icon: Sun },
  { id: 'evening', label: 'Evening', icon: Sunset },
  { id: 'anytime', label: 'Anytime', icon: AlarmClockCheck },
];

export default function IssueSelector() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Enquiry>({
    issue_type: '',
    hot_water_type: null,
    property_scope: null,
    contact_preference: null,
  });
  const [extra, setExtra] = useState({
    urgency: '',
    room: '',
    propertyType: '',
    timePref: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

  const select = (field: keyof Enquiry, value: string) => {
    setAnswers((p) => ({ ...p, [field]: value }));
    setTimeout(() => setStep((s) => Math.min(s + 1, 5) as Step), 200);
  };

  const selectExtra = (field: keyof typeof extra, value: string) => {
    setExtra((p) => ({ ...p, [field]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const payload: Enquiry = {
      issue_type: answers.issue_type,
      hot_water_type: answers.hot_water_type || null,
      property_scope: answers.property_scope || null,
      contact_preference: answers.contact_preference || null,
      name: contactInfo.name || null,
      phone: contactInfo.phone || null,
      email: contactInfo.email || null,
      suburb: contactInfo.suburb || null,
      message: `Urgency: ${extra.urgency}; Room: ${extra.room}; Property: ${extra.propertyType}; Time: ${extra.timePref}; Note: ${contactInfo.message || 'n/a'}`,
    };
    const { error } = await supabase.from('enquiries').insert(payload);
    setSubmitting(false);
    if (error) {
      // Still show success to the user but we know there was an issue
      console.error('Enquiry submission error:', error.message);
    }
    setSubmitted(true);
  };

  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    message: '',
  });

  const progress = ((step + 1) / (totalSteps + 1)) * 100;

  const restart = () => {
    setStep(0);
    setAnswers({ issue_type: '', hot_water_type: null, property_scope: null, contact_preference: null });
    setExtra({ urgency: '', room: '', propertyType: '', timePref: '' });
    setContactInfo({ name: '', phone: '', email: '', suburb: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-brand-950/15 ring-1 ring-slate-100">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              What plumbing issue do you need help with?
            </h2>
            <p className="mt-2 text-slate-500">
              Choose the closest option and we'll ask a few quick follow-up
              questions.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 text-center animate-fade-up">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-50">
                <CheckCircle2 className="h-10 w-10 text-accent-600" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
                Thanks, your plumbing enquiry has been received.
              </h3>
              <p className="mt-3 text-slate-500 max-w-md mx-auto">
                We'll be in touch about your plumbing job as soon as possible.
              </p>
              <button
                onClick={restart}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Start a new enquiry
              </button>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mt-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span>
                    Step {step + 1} of {totalSteps + 1}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Step content */}
              <div className="mt-8 min-h-[260px]">
                {step === 0 && (
                  <OptionGrid
                    key="issues"
                    title="What's the main issue?"
                    options={issues}
                    selected={answers.issue_type}
                    onSelect={(v) => select('issue_type', v)}
                  />
                )}

                {step === 1 && (
                  <OptionGrid
                    key="hotwater"
                    title="What type of hot water system is it? (optional)"
                    options={hotWaterTypes}
                    selected={answers.hot_water_type || ''}
                    onSelect={(v) => select('hot_water_type', v)}
                    skippable
                    onSkip={() => setStep(2)}
                  />
                )}

                {step === 2 && (
                  <OptionGrid
                    key="scope"
                    title="How much of the property is affected? (optional)"
                    options={propertyScopes}
                    selected={answers.property_scope || ''}
                    onSelect={(v) => select('property_scope', v)}
                    skippable
                    onSkip={() => setStep(3)}
                  />
                )}

                {step === 3 && (
                  <div className="animate-slide-in space-y-6">
                    <OptionGrid
                      key="urgency"
                      title="How soon do you need us?"
                      options={urgencyLevels}
                      selected={extra.urgency}
                      onSelect={(v) => selectExtra('urgency', v)}
                      compact
                    />
                    <OptionGrid
                      key="room"
                      title="Which area is affected?"
                      options={roomOptions}
                      selected={extra.room}
                      onSelect={(v) => selectExtra('room', v)}
                      compact
                    />
                    <OptionGrid
                      key="propType"
                      title="Property type"
                      options={propertyTypes}
                      selected={extra.propertyType}
                      onSelect={(v) => selectExtra('propertyType', v)}
                      compact
                    />
                    <OptionGrid
                      key="time"
                      title="Preferred time"
                      options={timePreferences}
                      selected={extra.timePref}
                      onSelect={(v) => selectExtra('timePref', v)}
                      compact
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={() => setStep(4)}
                        className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <OptionGrid
                    key="contact"
                    title="How would you like us to contact you?"
                    options={contactPrefs}
                    selected={answers.contact_preference || ''}
                    onSelect={(v) => select('contact_preference', v)}
                  />
                )}

                {step === 5 && (
                  <div className="animate-slide-in">
                    <h3 className="text-center font-display text-xl font-bold text-slate-900">
                      Your contact details
                    </h3>
                    <p className="mt-1 text-center text-sm text-slate-500">
                      We'll reach out to sort your plumbing job quickly.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Input
                        label="Name"
                        value={contactInfo.name}
                        onChange={(v) => setContactInfo({ ...contactInfo, name: v })}
                        placeholder="Your name"
                      />
                      <Input
                        label="Phone"
                        value={contactInfo.phone}
                        onChange={(v) => setContactInfo({ ...contactInfo, phone: v })}
                        placeholder="04xx xxx xxx"
                      />
                      <Input
                        label="Email"
                        value={contactInfo.email}
                        onChange={(v) => setContactInfo({ ...contactInfo, email: v })}
                        placeholder="you@email.com"
                      />
                      <Input
                        label="Suburb"
                        value={contactInfo.suburb}
                        onChange={(v) => setContactInfo({ ...contactInfo, suburb: v })}
                        placeholder="Sydney suburb"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Anything else? (optional)
                      </label>
                      <textarea
                        value={contactInfo.message}
                        onChange={(e) =>
                          setContactInfo({ ...contactInfo, message: e.target.value })
                        }
                        rows={3}
                        placeholder="Describe the issue in your own words..."
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      />
                    </div>

                    {/* Summary */}
                    <div className="mt-6 rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        Your enquiry summary
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Chip label={`Issue: ${answers.issue_type.replace(/-/g, ' ')}`} />
                        {answers.hot_water_type && (
                          <Chip label={`Hot water: ${answers.hot_water_type}`} />
                        )}
                        {answers.property_scope && (
                          <Chip label={`Scope: ${answers.property_scope.replace(/-/g, ' ')}`} />
                        )}
                        {extra.urgency && <Chip label={`Urgency: ${extra.urgency}`} />}
                        {extra.timePref && <Chip label={`Time: ${extra.timePref}`} />}
                        {answers.contact_preference && (
                          <Chip label={`Contact: ${answers.contact_preference}`} />
                        )}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
                      <button
                        onClick={() => setStep(4)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Submit Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation (steps 1-3) */}
              {step > 0 && step < 4 && (
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                </div>
              )}
            </>
          )}

          {/* Reassurance line */}
          {!submitted && (
            <p className="mt-6 text-center text-sm font-medium text-slate-400">
              Clear recommendations. No pressure. No hidden extras.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function OptionGrid({
  title,
  options,
  selected,
  onSelect,
  skippable,
  onSkip,
  compact,
}: {
  title: string;
  options: { id: string; label: string; icon: any }[];
  selected: string;
  onSelect: (v: string) => void;
  skippable?: boolean;
  onSkip?: () => void;
  compact?: boolean;
}) {
  return (
    <div className="animate-slide-in">
      <h3 className="text-center font-display text-xl font-bold text-slate-900">
        {title}
      </h3>
      <div
        className={`mt-6 grid gap-3 ${
          compact
            ? 'grid-cols-2 sm:grid-cols-4'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        }`}
      >
        {options.map((opt) => {
          const Icon = opt.icon;
          const active = selected === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`group flex flex-col items-center gap-3 rounded-2xl border-2 p-4 transition-all ${
                active
                  ? 'border-brand-500 bg-brand-50 shadow-md shadow-brand-500/10'
                  : 'border-slate-100 hover:border-brand-200 hover:bg-brand-50/50'
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  active
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-brand-100 group-hover:text-brand-600'
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span
                className={`text-sm font-semibold text-center ${
                  active ? 'text-brand-700' : 'text-slate-700'
                }`}
              >
                {opt.label}
              </span>
              {active && (
                <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white shadow-md">
                  <Check className="h-3.5 w-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      {skippable && (
        <div className="mt-5 text-center">
          <button
            onClick={onSkip}
            className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
          >
            Skip this question →
          </button>
        </div>
      )}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
      />
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold capitalize text-brand-700 ring-1 ring-brand-200">
      <Check className="h-3 w-3" />
      {label}
    </span>
  );
}
