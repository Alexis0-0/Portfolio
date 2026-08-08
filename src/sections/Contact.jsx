import { useRef, useState } from "react";
import { Code2, Briefcase, MessageCircle, Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { personal, socialLinks, contactConfig } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);

  const hasFormspree = Boolean(contactConfig.formspreeEndpoint);
  const hasWeb3Forms = Boolean(contactConfig.web3formsAccessKey);
  const hasBackend = hasFormspree || hasWeb3Forms;

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    form.subject || "Portfolio inquiry"
  )}&body=${encodeURIComponent(
    `${form.message || ""}\n\n— ${form.name || ""} (${form.email || ""})`
  )}`;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasBackend) {
      // No service configured: fall back to opening the user's mail client.
      window.location.href = mailtoHref;
      return;
    }

    setStatus(STATUS.SENDING);
    try {
      let response;
      if (hasFormspree) {
        response = await fetch(contactConfig.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_key: contactConfig.web3formsAccessKey, ...form }),
        });
      }

      if (!response.ok) throw new Error("Request failed");
      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="contact__grid">
          <div className="contact__intro reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-heading">Let's connect</h2>
            <p className="section-sub">
              I'm open to IT support, technical support, and entry-level IT opportunities.
            </p>

            <div className="contact__socials">
              <a href={socialLinks.github} className="contact__social" aria-label="GitHub profile" target="_blank" rel="noreferrer">
                <Code2 size={18} />
              </a>
              <a href={socialLinks.linkedin} className="contact__social" aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
                <Briefcase size={18} />
              </a>
              <a href={socialLinks.facebook} className="contact__social" aria-label="Facebook profile" target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
              </a>
              <a href={socialLinks.email} className="contact__social" aria-label="Send email">
                <Mail size={18} />
              </a>
            </div>

            {!hasBackend && (
              <p className="contact__notice">
                No form service is configured yet — submitting will open your email client instead. See{" "}
                <code>.env.example</code> to connect Formspree or Web3Forms.
              </p>
            )}
          </div>

          <form className="contact__form card reveal" data-reveal-delay="120" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required minLength={2} value={form.name} onChange={handleChange} autoComplete="name" />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} autoComplete="email" />
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required minLength={10} value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={status === STATUS.SENDING}>
              {status === STATUS.SENDING ? (
                <>
                  <Loader2 size={16} className="contact__spinner" /> Sending…
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            <div role="status" aria-live="polite">
              {status === STATUS.SUCCESS && (
                <p className="contact__status contact__status--success">
                  <CheckCircle2 size={16} /> Message sent — thank you! I'll get back to you soon.
                </p>
              )}
              {status === STATUS.ERROR && (
                <p className="contact__status contact__status--error">
                  <AlertCircle size={16} /> Something went wrong. Please try again or email me directly at{" "}
                  <a href={socialLinks.email}>{personal.email}</a>.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
