import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Wrench, Mic, Send } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StatusBar } from "@/components/site/StatusBar";

const CANONICAL_URL = "https://aultblockchain.com/contact";

const INQUIRY_TYPES = [
  "General inquiry",
  "Sales / Institutional BD",
  "Node Holder support",
  "Developer / integrations",
  "Press / Media",
  "Investor relations (NYSE: GPUS)",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

const INQUIRY_ROUTE: Record<InquiryType, string> = {
  "General inquiry": "support",
  "Sales / Institutional BD": "sales",
  "Node Holder support": "support",
  "Developer / integrations": "support",
  "Press / Media": "press",
  "Investor relations (NYSE: GPUS)": "sales",
};

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Ault Blockchain" },
      {
        name: "description",
        content:
          "Talk to the Ault Blockchain team. Sales, Node Holder support, press, and investor relations inquiries. Response within 1 business day.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:title", content: "Contact — Ault Blockchain" },
      {
        property: "og:description",
        content:
          "Sales, Node Holder support, press, and investor relations inquiries for the Ault Blockchain ecosystem.",
      },
      { property: "og:image", content: "/og-image-contact.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image-contact.png" },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — Ault Blockchain",
          url: CANONICAL_URL,
          mainEntity: {
            "@type": "Organization",
            name: "Ault Blockchain",
            telephone: "+1-855-285-8663",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11411 Southern Highlands Pkwy, Suite 240",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89141",
              addressCountry: "US",
            },
            contactPoint: [
              { "@type": "ContactPoint", contactType: "sales", email: "sales@aultblockchain.com" },
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@aultblockchain.com",
              },
              { "@type": "ContactPoint", contactType: "press", email: "press@aultblockchain.com" },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aultblockchain.com" },
            { "@type": "ListItem", position: 2, name: "Contact", item: CANONICAL_URL },
          ],
        }),
      },
    ],
  }),
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-medium">
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </div>
  );
}

const CONTACT_CARDS = [
  {
    icon: Briefcase,
    title: "Sales & Institutional BD",
    body: "RWA issuance, DEX integration, custody pathways, Tier-1 partnerships.",
    email: "sales@aultblockchain.com",
  },
  {
    icon: Wrench,
    title: "Node Holder & Operator Support",
    body: "Configuration, uptime, license activation, KYC.",
    email: "support@aultblockchain.com",
  },
  {
    icon: Mic,
    title: "Press & Media",
    body: "Press inquiries, interviews, executive availability.",
    email: "press@aultblockchain.com",
  },
];

const SOCIALS = [
  { label: "Telegram", href: "https://t.me/officialaultblockchain", svg: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" },
  { label: "X", href: "https://x.com/aultblockchain", svg: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Discord", href: "https://discord.gg/Kwae6KsV8J", svg: "M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.79 14.79 0 0 0-.69 1.418 18.27 18.27 0 0 0-5.736 0A14.79 14.79 0 0 0 9.442 3a19.74 19.74 0 0 0-3.76 1.37C2.43 9.045 1.483 13.586 1.957 18.06a19.9 19.9 0 0 0 6.073 3.07c.49-.66.926-1.36 1.301-2.094a12.92 12.92 0 0 1-2.05-.985c.171-.126.34-.257.503-.392a14.18 14.18 0 0 0 12.43 0c.165.135.334.266.503.392-.65.385-1.339.717-2.052.986.376.733.812 1.434 1.302 2.093a19.84 19.84 0 0 0 6.073-3.07c.554-5.18-.943-9.679-3.722-13.69zM8.02 15.331c-1.184 0-2.158-1.085-2.158-2.418s.954-2.42 2.158-2.42c1.21 0 2.18 1.097 2.158 2.42 0 1.333-.954 2.418-2.158 2.418zm7.973 0c-1.183 0-2.157-1.085-2.157-2.418s.954-2.42 2.157-2.42c1.21 0 2.18 1.097 2.158 2.42 0 1.333-.948 2.418-2.158 2.418z" },
  { label: "Instagram", href: "https://www.instagram.com/aultblockchain/", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.231 8.418 2.175 8.798 2.163 12 2.163zm0 1.838c-3.155 0-3.522.012-4.766.069-1.018.046-1.572.213-1.94.354-.488.19-.836.417-1.202.783-.366.366-.593.714-.783 1.202-.141.368-.308.922-.354 1.94-.057 1.244-.069 1.611-.069 4.766s.012 3.522.069 4.766c.046 1.018.213 1.572.354 1.94.19.488.417.836.783 1.202.366.366.714.593 1.202.783.368.141.922.308 1.94.354 1.244.057 1.611.069 4.766.069s3.522-.012 4.766-.069c1.018-.046 1.572-.213 1.94-.354.488-.19.836-.417 1.202-.783.366-.366.593-.714.783-1.202.141-.368.308-.922.354-1.94.057-1.244.069-1.611.069-4.766s-.012-3.522-.069-4.766c-.046-1.018-.213-1.572-.354-1.94-.19-.488-.417-.836-.783-1.202-.366-.366-.714-.593-1.202-.783-.368-.141-.922-.308-1.94-.354C15.522 4.013 15.155 4.001 12 4.001zm0 3.292a4.707 4.707 0 1 1 0 9.414 4.707 4.707 0 0 1 0-9.414zm0 7.762a3.055 3.055 0 1 0 0-6.11 3.055 3.055 0 0 0 0 6.11zm5.985-7.95a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" },
];

function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "" as InquiryType | "",
    message: "",
    optIn: false,
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.inquiryType) e.inquiryType = "Select an inquiry type.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";
    else if (form.message.length > 2000)
      e.message = "Message must be 2000 characters or fewer.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0 && form.optIn;

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      inquiryType: true,
      message: true,
    });
    if (!isValid || !form.inquiryType) return;
    // CONTACT FORM: currently uses mailto: handoff. Phase 2 follow-up: wire to a backend email
    // service (Resend, SendGrid, or similar) with reCAPTCHA spam protection. Lovable will need
    // email-service env vars at that point.
    const subject = encodeURIComponent(
      `[${form.inquiryType}] Inquiry from ${form.firstName} ${form.lastName}`,
    );
    const inbox = INQUIRY_ROUTE[form.inquiryType] || "support";
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || "(not provided)"}\nInquiry type: ${form.inquiryType}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${inbox}@aultblockchain.com?subject=${subject}&body=${body}`;
  }

  const inputCls =
    "w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors";
  const labelCls = "block text-xs uppercase tracking-wider text-text-tertiary mb-1.5";
  const errCls = "mt-1 text-xs text-destructive";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatusBar />
      <Nav />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            Talk to the Ault Blockchain team.
          </h1>
          <p className="mt-6 max-w-[880px] text-lg md:text-xl text-text-secondary leading-relaxed">
            Institutional inquiries, Node Holder support, developer integrations, and press. We
            respond to all messages within 1 business day.
          </p>
        </div>
      </section>

      {/* Direct contact methods */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-surface-tint p-8 flex flex-col"
                >
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                    {c.body}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-6 text-sm font-medium text-primary hover:underline"
                  >
                    {c.email}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phone + address */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-text-tertiary">
                By phone
              </div>
              <div className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                <a href="tel:+18552858663" className="hover:text-primary transition-colors">
                  855-AULTNOD
                </a>
              </div>
              <div className="mt-2 text-sm text-text-secondary">855-285-8663</div>
              <div className="mt-3 text-xs italic text-text-tertiary">
                Monday through Friday, 9am – 5pm PT
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-text-tertiary">
                Mailing address
              </div>
              <div className="mt-3 text-base font-semibold text-foreground">
                Ault Capital Group
              </div>
              <div className="mt-1 text-sm text-text-secondary">
                11411 Southern Highlands Pkwy, Suite 240
              </div>
              <div className="text-sm text-text-secondary">Las Vegas, NV 89141</div>
              <div className="text-sm text-text-secondary">United States</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[720px] px-6 py-20">
          <div className="rounded-2xl border border-border bg-surface-tint p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              All fields marked with an asterisk are required.
            </p>

            <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} htmlFor="firstName">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className={inputCls}
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                    maxLength={100}
                    required
                  />
                  {touched.firstName && errors.firstName && (
                    <div className={errCls}>{errors.firstName}</div>
                  )}
                </div>
                <div>
                  <label className={labelCls} htmlFor="lastName">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className={inputCls}
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
                    maxLength={100}
                    required
                  />
                  {touched.lastName && errors.lastName && (
                    <div className={errCls}>{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    maxLength={255}
                    required
                  />
                  {touched.email && errors.email && <div className={errCls}>{errors.email}</div>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={inputCls}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={32}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="inquiryType">
                  Inquiry type *
                </label>
                <select
                  id="inquiryType"
                  className={inputCls}
                  value={form.inquiryType}
                  onChange={(e) => update("inquiryType", e.target.value as InquiryType)}
                  onBlur={() => setTouched((t) => ({ ...t, inquiryType: true }))}
                  required
                >
                  <option value="">Select an inquiry type…</option>
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {touched.inquiryType && errors.inquiryType && (
                  <div className={errCls}>{errors.inquiryType}</div>
                )}
              </div>

              <div>
                <label className={labelCls} htmlFor="message">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  className={`${inputCls} min-h-[140px] resize-y`}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  minLength={20}
                  maxLength={2000}
                  required
                />
                <div className="mt-1 flex justify-between text-xs text-text-tertiary">
                  <span>
                    {touched.message && errors.message ? (
                      <span className="text-destructive">{errors.message}</span>
                    ) : (
                      "Minimum 20 characters."
                    )}
                  </span>
                  <span>{form.message.length}/2000</span>
                </div>
              </div>

              <label className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-border accent-[var(--primary)]"
                  checked={form.optIn}
                  onChange={(e) => update("optIn", e.target.checked)}
                  required
                />
                <span className="text-xs text-text-secondary leading-relaxed">
                  I agree to receive communications from Ault Blockchain by email or phone in
                  response to my inquiry. I have read the{" "}
                  <a href="/legal/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={!isValid}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Social strip */}
          <div className="mt-12 flex items-center justify-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={s.svg} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
