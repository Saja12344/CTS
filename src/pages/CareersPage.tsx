import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteLanguage } from "@/context/LanguageContext";
import { siteRoutes } from "@/lib/routes";
import { openWhatsApp } from "@/lib/whatsapp";

const CareersPage = () => {
  const { content } = useSiteLanguage();
  const careers = content.careers;
  const [form, setForm] = useState({ name: "", specialty: "", portfolio: "", email: "", note: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const message = [
      careers.whatsappIntro,
      `${careers.nameLabel}: ${form.name}`,
      `${careers.specialtyLabel}: ${form.specialty}`,
      `${careers.portfolioLabel}: ${form.portfolio}`,
      `${careers.emailLabel}: ${form.email}`,
      form.note ? `${careers.noteLabel}: ${form.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    setStatus(openWhatsApp(message) ? "success" : "error");
  };

  return (
    <section className="w-full bg-brand-charcoal py-32 text-white">
      <div className="grid-shell">
        <Link to={siteRoutes.home} className="text-sm text-[#C0C0B8] underline-offset-4 hover:text-white hover:underline">
          {careers.back}
        </Link>
        <span className="section-label mb-3 mt-8 block">{careers.label}</span>
        <h1 className="font-heading max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{careers.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#C0C0B8]">{careers.description}</p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {careers.roles.map((role) => (
            <li key={role} className="rounded border border-white/10 p-5">
              <p className="font-heading text-lg font-semibold">{role}</p>
              <p className="mt-2 text-sm text-[#C0C0B8]">{careers.roleMeta}</p>
            </li>
          ))}
        </ul>

        <h2 className="font-heading mt-16 text-2xl font-semibold">{careers.processTitle}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {careers.process.map((step, index) => (
            <li key={step} className="rounded border border-white/10 p-5">
              <span className="font-heading text-brand-orange">{index + 1}</span>
              <p className="mt-3 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>

        <form className="mt-16 max-w-2xl space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm" htmlFor="career-name">
              {careers.nameLabel}
            </label>
            <input
              id="career-name"
              className="field-input"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm" htmlFor="career-specialty">
              {careers.specialtyLabel}
            </label>
            <select
              id="career-specialty"
              className="field-input"
              required
              value={form.specialty}
              onChange={(event) => setForm({ ...form, specialty: event.target.value })}
            >
              <option value="" disabled>
                {careers.specialtyPlaceholder}
              </option>
              {careers.roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm" htmlFor="career-portfolio">
              {careers.portfolioLabel}
            </label>
            <input
              id="career-portfolio"
              className="field-input"
              type="url"
              required
              placeholder={careers.portfolioPlaceholder}
              value={form.portfolio}
              onChange={(event) => setForm({ ...form, portfolio: event.target.value })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm" htmlFor="career-email">
              {careers.emailLabel}
            </label>
            <input
              id="career-email"
              className="field-input"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm" htmlFor="career-note">
              {careers.noteLabel} <span className="text-[#C0C0B8]">({careers.noteOptional})</span>
            </label>
            <textarea
              id="career-note"
              className="field-input resize-none"
              rows={4}
              value={form.note}
              onChange={(event) => setForm({ ...form, note: event.target.value })}
            />
          </div>
          <button className="btn-primary" type="submit">
            {careers.submit}
          </button>
          {status !== "idle" ? (
            <p className="text-sm text-[#C0C0B8]" role="status">
              {status === "success" ? careers.success : careers.error}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default CareersPage;
