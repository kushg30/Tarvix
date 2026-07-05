import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABand from '../components/CTABand';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="pg show">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-dot-grid"></div>
        <div className="hero-inner">
          <h1 className="hero-h1">
            Technology built<br />
            to move <span className="g">right</span><br />
            <span className="s">Not just fast</span>
          </h1>
          <p className="hero-pitch">
            Growth isn't just about moving fast — it's about moving right. TarVix is built on a simple formula: Target + Velocity + X-Acceleration.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/services')}>
              Explore our services
            </button>
            <button className="btn-secondary" onClick={() => navigate('/contact')}>
              Start a conversation
            </button>
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <div className="formula">
        <div className="f-col">
          <div className="f-letter f-T">T</div>
          <div className="f-label">Target</div>
          <div className="f-desc">Precision-mapped goals aligned to your sector, scale, and real constraints — not generic technology proposals.</div>
        </div>
        <div className="f-col">
          <div className="f-letter f-V">V</div>
          <div className="f-label">Velocity</div>
          <div className="f-desc">Compounding momentum from design through deployment and operations — without gaps or handoffs.</div>
        </div>
        <div className="f-col">
          <div className="f-letter f-X">X</div>
          <div className="f-label">X-Acceleration</div>
          <div className="f-desc">AI, cloud, and data as the multiplier that turns good systems into lasting operational advantage.</div>
        </div>
      </div>

      {/* SERVICES BENTO */}
      <section className="section">
        <div className="kicker">What we do</div>
        <h2 className="sh2">SaaS, AI <span className="ac">and IT services</span></h2>
        <p className="ssub">We design, build, and operate technology for organisations where getting it right matters as much as getting it done fast.</p>

        <div className="bento">
          <div className="bc">
            <div className="bc-icon i-w"><i className="ti ti-code"></i></div>
            <div className="bc-title">Software & SaaS</div>
            <div className="bc-body">Custom SaaS platforms and software — architecture, deployment, licensing, and ongoing support.</div>
          </div>
          <div className="bc">
            <div className="bc-icon i-g"><i className="ti ti-brain"></i></div>
            <div className="bc-title">AI & Data Analytics</div>
            <div className="bc-body">Data pipelines, ML models, BI dashboards, NLP and GenAI — applied to real operational problems. The X layer in every engagement.</div>
          </div>
          <div className="bc">
            <div className="bc-icon i-b"><i className="ti ti-server"></i></div>
            <div className="bc-title">IT Services & Managed Ops</div>
            <div className="bc-body">System integration, technology consulting, and SLA-driven managed operations — one team, start to finish.</div>
          </div>
          <div className="bc">
            <div className="bc-icon i-w"><i className="ti ti-shield-lock"></i></div>
            <div className="bc-title">Cybersecurity</div>
            <div className="bc-body">Vulnerability assessment, penetration testing, security audits, and advisory — scoped to your environment.</div>
          </div>
          <div className="bc">
            <div className="bc-icon i-g"><i className="ti ti-users-group"></i></div>
            <div className="bc-title">Training & Capacity Building</div>
            <div className="bc-body">Technology training and capacity building for teams that need to work confidently with the systems we build.</div>
          </div>
          <div className="bc">
            <div className="bc-icon i-b"><i className="ti ti-device-desktop"></i></div>
            <div className="bc-title">IT & Telecom Hardware</div>
            <div className="bc-body">Supply, installation, and annual maintenance of IT and telecom hardware. Contact us with specific requirements.</div>
          </div>
        </div>
      </section>

      {/* SECTORS TILES */}
      <section className="section">
        <div className="kicker">Who we work with</div>
        <h2 className="sh2">Sectors where we bring <span className="ac">domain understanding</span></h2>
        <p className="ssub">We work with organisations where technology decisions carry real weight — and where sector knowledge matters as much as technical skill.</p>

        <div className="sc-tiles">
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-briefcase"></i></div>
            <div className="sc-name">Private Enterprise</div>
            <div className="sc-tag">Mid-Market · Corporates</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-building-community"></i></div>
            <div className="sc-name">Government</div>
            <div className="sc-tag">Central · State departments</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-building-factory-2"></i></div>
            <div className="sc-name">Public Sector Units</div>
            <div className="sc-tag">Central PSUs · State PSEs</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-building-bank"></i></div>
            <div className="sc-name">Banking & Finance</div>
            <div className="sc-tag">BFSI · Fintech</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-heart-rate-monitor"></i></div>
            <div className="sc-name">Healthcare</div>
            <div className="sc-tag">Hospitals · HealthTech</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-school"></i></div>
            <div className="sc-name">Education</div>
            <div className="sc-tag">Institutions · EdTech</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-device-mobile-signal"></i></div>
            <div className="sc-name">Telecom</div>
            <div className="sc-tag">Carriers · ISPs</div>
          </div>
          <div className="sc-tile">
            <div className="sc-ico"><i className="ti ti-train"></i></div>
            <div className="sc-name">Railways</div>
            <div className="sc-tag">Operations · Safety</div>
          </div>
        </div>
      </section>

      {/* WHY TARVIX */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="kicker">Why TarVix</div>
        <div className="why-grid">
          <div className="why-cell">
            <div className="why-eyebrow">The formula</div>
            <div className="why-label">
              Target <span className="ac">+</span> Velocity <span className="ac">+</span> X-Acceleration
            </div>
            <div className="why-sub">Every engagement is structured around a clear growth formula — not just a scope of work.</div>
          </div>
          <div className="why-cell">
            <div className="why-eyebrow">Tech-led delivery</div>
            <div className="why-label">Built around <span className="ac">the problem</span></div>
            <div className="why-sub">We start with your operational reality — systems, constraints, sector norms — and let that shape the technology approach, not the other way around.</div>
          </div>
          <div className="why-cell">
            <div className="why-eyebrow">Built for India</div>
            <div className="why-label">Sector knowledge <span className="ac">built in</span></div>
            <div className="why-sub">We come with working knowledge of Indian procurement norms, regulatory frameworks, and sector realities.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        heading="Ready to move"
        accentText="right?"
        subtext="Share what you're working on — we'll take it from there."
        buttonText="Start a conversation"
      />

      <Footer />
    </div>
  );
}