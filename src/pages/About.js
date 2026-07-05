import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="pg show">
      <Navbar />

      {/* PAGE HERO */}
      <section className="pg-hero">
        <div
          className="pg-hero-glow"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 65% -15%, rgba(77,255,160,0.07) 0%, transparent 70%)',
          }}
        ></div>
        <div className="pg-hero-dots"></div>
        <div className="pg-rel">
          <div className="pg-kicker">About</div>
          <h1 className="pg-h1">
            Built to deliver technology that{' '}
            <span className="ac">actually moves things forward</span>
          </h1>
          <p className="pg-sub">
            TarVix designs, builds, and operates SaaS platforms, AI systems, and IT and telecom infrastructure — for organisations where technology decisions carry real weight.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section">
        <div className="kicker">Vision & Mission</div>
        <div className="mv-grid">
          <div className="mv-cell">
            <div className="mv-tag">Vision</div>
            <div className="mv-text">
              To be a trusted technology partner for organisations where technology decisions carry real weight — delivering AI, SaaS, and digital systems that create <strong>lasting operational impact.</strong>
            </div>
          </div>
          <div className="mv-cell">
            <div className="mv-tag">Mission</div>
            <div className="mv-text">
              To apply <strong>precision, velocity, and technology intelligence</strong> to every engagement — building systems that solve real problems, scale with confidence, and deliver outcomes that outlast the project.
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="kicker">Our Values</div>
        <div className="val-strip">
          <div className="val-c">
            <div className="val-ico vi-g"><i className="ti ti-crosshair"></i></div>
            <div className="val-name">Precision</div>
            <div className="val-desc">Right problem before right solution — always.</div>
          </div>
          <div className="val-c">
            <div className="val-ico vi-g"><i className="ti ti-rocket"></i></div>
            <div className="val-name">Velocity</div>
            <div className="val-desc">Speed with structure — delivery without shortcuts.</div>
          </div>
          <div className="val-c">
            <div className="val-ico vi-w"><i className="ti ti-shield-check"></i></div>
            <div className="val-name">Integrity</div>
            <div className="val-desc">Accountable to outcomes, not just deliverables.</div>
          </div>
          <div className="val-c">
            <div className="val-ico vi-b"><i className="ti ti-eye-check"></i></div>
            <div className="val-name">Accountability</div>
            <div className="val-desc">Clear ownership at every phase — no gaps, no ambiguity.</div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="section">
        <div className="kicker">Registration</div>
        <div className="reg-row">
          <div className="reg-c">
            <div className="reg-f">LLPIN</div>
            <div className="reg-v">ACZ-2766</div>
          </div>
          <div className="reg-c">
            <div className="reg-f">GSTIN</div>
            <div className="reg-v">36ABAFT3257F1Z9</div>
          </div>
          <div className="reg-c">
            <div className="reg-f">Udyam No.</div>
            <div className="reg-v">UDYAM-TS-02-0349449</div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="quote-box">
          <div className="q-bar"></div>
          <div className="q-text">
            "Growth isn't just about moving fast — it's about moving right."
          </div>
          <div className="q-attr">TarVix · Founding Principle</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}