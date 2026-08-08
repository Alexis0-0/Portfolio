import { ArrowUp } from "lucide-react";
import { personal } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {year} {personal.name}</p>

        <a href="#home" className="footer__top">
          Back to Top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
