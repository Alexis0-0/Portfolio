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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateField(name, value) {
  const trimmed = value.trim();
  switch (name) {
    case "name":
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      return "";
    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!EMAIL_PATTERN.test(trimmed)) return "Enter a valid email address, e.g. name@gmail.com.";
      return "";
    case "subject":
      if (!trimmed) return "Please enter a subject.";
      return "";
    case "message":
      if (!trimmed) return "Please enter a message.";
      if (trimmed.length < 10) return "Message should be at least 10 characters.";
      return "";
    default:
      return "";
  }
}

export default function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      subject: validateField("subject", form.subject),
      message: validateField("message", form.message),
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setStatus(STATUS.IDLE);
      return;
    }

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
      setErrors({});
      setTouched({});
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
              <a href={socialLinks.email} className="contact__social" aria-label="Compose an email" target="_blank" rel="noreferrer">
                <Mail size={18} />
              </a>
            </div>

            <a href={socialLinks.email} className="contact__email-line" target="_blank" rel="noreferrer">
              <Mail size={14} /> {personal.email}
            </a>

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
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={errors.name ? "has-error" : ""}
              />
              {errors.name && (
                <p id="name-error" className="contact__field-error" role="alert">
                  <AlertCircle size={13} /> {errors.name}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                placeholder="name@gmail.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? "has-error" : ""}
              />
              {errors.email && (
                <p id="email-error" className="contact__field-error" role="alert">
                  <AlertCircle size={13} /> {errors.email}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={errors.subject ? "has-error" : ""}
              />
              {errors.subject && (
                <p id="subject-error" className="contact__field-error" role="alert">
                  <AlertCircle size={13} /> {errors.subject}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={errors.message ? "has-error" : ""}
              />
              {errors.message && (
                <p id="message-error" className="contact__field-error" role="alert">
                  <AlertCircle size={13} /> {errors.message}
                </p>
              )}
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
