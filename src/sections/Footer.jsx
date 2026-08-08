import { ArrowUp } from "lucide-react";
import { personal } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {personal.name}
          <span className="footer__divider" aria-hidden="true">•</span>
          Built with HTML • CSS • JavaScript
        </p>
        <p className="footer__credit">Designed &amp; Developed by {personal.name}</p>

        <a href="#home" className="footer__top">
          Back to Top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
