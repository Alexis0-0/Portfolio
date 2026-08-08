import { useRef } from "react";
import { HelpCircle, Cpu, Router, AppWindow, MonitorCog } from "lucide-react";
import { services } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Services.css";

const ICONS = {
  "svc-it-support": HelpCircle,
  "svc-hardware": Cpu,
  "svc-network": Router,
  "svc-software": AppWindow,
  "svc-setup": MonitorCog,
};

export default function Services() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Services</span>
          <h2 className="section-heading">What I can help with</h2>
        </div>

        <div className="services__grid">
          {services.map((svc, i) => {
            const Icon = ICONS[svc.id] || HelpCircle;
            return (
              <div className="services__card card reveal" key={svc.id} data-reveal-delay={i * 70}>
                <div className="services__icon">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="services__title">{svc.title}</h3>
                <p className="services__desc">{svc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
