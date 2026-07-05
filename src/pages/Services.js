import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABand from '../components/CTABand';

export default function Services() {
  return (
    <div className="pg show">
      <Navbar />

      {/* PAGE HERO */}
      <section className="pg-hero">
        <div
          className="pg-hero-glow"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 80% -10%, rgba(107,138,255,0.07) 0%, transparent 70%)',
          }}
        ></div>
        <div className="pg-hero-dots"></div>
        <div className="pg-rel">
          <div className="pg-kicker">Services</div>
          <h1 className="pg-h1">
            From first build to <span className="ac">full-scale operation</span>
          </h1>
          <p className="pg-sub">
            Six service lines covering the full technology lifecycle — with dedicated ownership at every phase.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section">
        <div className="svc-list">

          {/* 1. Software & SaaS */}
          <div className="svc-row">
            <div className="svc-l">
              <div className="svc-iw i-w"><i className="ti ti-code"></i></div>
              <div>
                <div className="svc-name">Software & SaaS</div>
                <div className="svc-sub">Design to delivery and everything after</div>
              </div>
            </div>
            <div className="svc-r">
              <div className="svc-pills">
                <span className="svc-pill">Custom Development</span>
                <span className="svc-pill">SaaS Platforms</span>
                <span className="svc-pill">Cloud-Native</span>
                <span className="svc-pill">Multi-Tenant</span>
                <span className="svc-pill">API Design</span>
                <span className="svc-pill">Licensing</span>
                <span className="svc-pill">L1–L3 Support</span>
              </div>
              <div className="svc-desc">
                Bespoke software and multi-tenant SaaS platforms built for your operational context — not generic products adapted to fit. We own the full lifecycle from discovery and architecture through deployment, licensing, and ongoing support. Cloud-native on AWS, Azure, and GCP.
              </div>
            </div>
          </div>

          {/* 2. AI & Data Analytics */}
          <div className="svc-row">
            <div className="svc-l">
              <div className="svc-iw i-g"><i className="ti ti-brain"></i></div>
              <div>
                <div className="svc-name">AI & Data Analytics</div>
                <div className="svc-sub">The X in T + V + X</div>
              </div>
            </div>
            <div className="svc-r">
              <div className="svc-pills">
                <span className="svc-pill">Data Pipelines</span>
                <span className="svc-pill">Predictive Analytics</span>
                <span className="svc-pill">ML Models</span>
                <span className="svc-pill">BI Dashboards</span>
                <span className="svc-pill">NLP</span>
                <span className="svc-pill">GenAI</span>
                <span className="svc-pill">Agentic AI</span>
                <span className="svc-pill">Computer Vision</span>
              </div>
              <div className="svc-desc">
                We build the full AI stack — data pipelines that ingest and structure operational data, ML models that find patterns and generate predictions, BI dashboards that surface insight, and NLP, GenAI, and agentic AI layers that make it accessible and actionable. Applied to fraud detection in banking, patient analytics in healthcare, operational behaviour in railways, and learning analytics in education.
              </div>
            </div>
          </div>

          {/* 3. IT Services & Managed Ops */}
          <div className="svc-row">
            <div className="svc-l">
              <div className="svc-iw i-b"><i className="ti ti-server"></i></div>
              <div>
                <div className="svc-name">IT Services & Managed Ops</div>
                <div className="svc-sub">We run it. You focus on the mission.</div>
              </div>
            </div>
            <div className="svc-r">
              <div className="svc-pills">
                <span className="svc-pill">Managed Services</span>
                <span className="svc-pill">System Integration</span>
                <span className="svc-pill">IT Consulting</span>
                <span className="svc-pill">24/7 Monitoring</span>
                <span className="svc-pill">Legacy Modernisation</span>
                <span className="svc-pill">SLA-Driven Ops</span>
              </div>
              <div className="svc-desc">
                Managed infrastructure operations with defined SLAs, system integration connecting legacy platforms to modern APIs, and technology consulting for architecture and digital transformation decisions. Suited to organisations that need reliable, accountable IT operations without building a large internal function.
              </div>
            </div>
          </div>

          {/* 4. Cybersecurity */}
          <div className="svc-row">
            <div className="svc-l">
              <div className="svc-iw i-w"><i className="ti ti-shield-lock"></i></div>
              <div>
                <div className="svc-name">Cybersecurity</div>
                <div className="svc-sub">Audit, advisory & implementation</div>
              </div>
            </div>
            <div className="svc-r">
              <div className="svc-pills">
                <span className="svc-pill">Vulnerability Assessment</span>
                <span className="svc-pill">Penetration Testing</span>
                <span className="svc-pill">Security Audit</span>
                <span className="svc-pill">Advisory</span>
                <span className="svc-pill">Implementation</span>
              </div>
              <div className="svc-desc">
                Vulnerability assessment, penetration testing, security audits, advisory, and implementation — scoped to your environment, systems, and sector-specific risk profile.
              </div>
            </div>
          </div>

          {/* 5. Training & Capacity Building */}
          <div className="svc-row">
            <div className="svc-l">
              <div className="svc-iw i-g"><i className="ti ti-users-group"></i></div>
              <div>
                <div className="svc-name">Training & Capacity Building</div>
                <div className="svc-sub">Building capability, not just systems</div>
              </div>
            </div>
            <div className="svc-r">
              <div className="svc-pills">
                <span className="svc-pill">Technology Training</span>
                <span className="svc-pill">Capacity Building</span>
                <span className="svc-pill">Workshops</span>
                <span className="svc-pill">Accounting Services</span>
              </div>
              <div className="svc-desc">
                Technology training and capacity building for teams that need to work confidently with the systems we build — and for organisations that need structured financial operations alongside their technology engagements.
              </div>
            </div>
          </div>

          {/* 6. IT & Telecom Hardware */}
          <div className="svc-row">
            <div className="svc-l">
              <div className="svc-iw i-b"><i className="ti ti-device-desktop"></i></div>
              <div>
                <div className="svc-name">IT & Telecom Hardware</div>
                <div className="svc-sub">Contact us with specific requirements</div>
              </div>
            </div>
            <div className="svc-r">
              <div className="svc-pills">
                <span className="svc-pill">Hardware Supply</span>
                <span className="svc-pill">Installation & Commissioning</span>
                <span className="svc-pill">Annual Maintenance</span>
                <span className="svc-pill">Network Equipment</span>
              </div>
              <div className="svc-desc">
                Supply, installation, and annual maintenance of IT and telecom hardware for enterprise and public sector clients. Tell us what you need and we will assess and respond.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DELIVERY PRINCIPLES */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="kicker">Our delivery principles</div>
        <div className="proc-grid">
          <div className="proc-c">
            <div className="proc-n">01</div>
            <div className="proc-name">Understand first</div>
            <div className="proc-desc">Every engagement starts with the problem, the context, and what success actually looks like.</div>
          </div>
          <div className="proc-c">
            <div className="proc-n">02</div>
            <div className="proc-name">Design before building</div>
            <div className="proc-desc">Architecture, approach, and risk are worked through before any delivery begins.</div>
          </div>
          <div className="proc-c">
            <div className="proc-n">03</div>
            <div className="proc-name">Deliver in stages</div>
            <div className="proc-desc">Milestones with review gates — so you see progress and can course-correct early.</div>
          </div>
          <div className="proc-c">
            <div className="proc-n">04</div>
            <div className="proc-name">Transfer with confidence</div>
            <div className="proc-desc">Go-live includes training, documentation, and handover — not a handoff.</div>
          </div>
          <div className="proc-c">
            <div className="proc-n">05</div>
            <div className="proc-name">Stay accountable</div>
            <div className="proc-desc">Post-delivery support, SLA monitoring, and improvement are part of every engagement.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        heading="Not sure which service fits?"
        subtext="Let's talk through your challenge and find the right engagement model."
        buttonText="Get in touch"
      />

      <Footer />
    </div>
  );
}