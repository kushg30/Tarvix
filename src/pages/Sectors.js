import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sectors() {
  return (
    <div className="pg show">
      <Navbar />

      {/* PAGE HERO */}
      <section className="pg-hero">
        <div
          className="pg-hero-glow"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 30% -10%, rgba(107,138,255,0.07) 0%, transparent 70%)',
          }}
        ></div>
        <div className="pg-hero-dots"></div>
        <div className="pg-rel">
          <div className="pg-kicker">Sectors</div>
          <h1 className="pg-h1">
            Sector knowledge <span className="ac">built into how we work</span>
          </h1>
          <p className="pg-sub">
            We come with domain context — not just technical capability. That means faster problem definition, fewer surprises mid-project, and solutions that fit how your sector actually operates.
          </p>
        </div>
      </section>

      {/* SECTOR GRID */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="sector-grid">

          {/* 1. Private Enterprise */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-g"><i className="ti ti-briefcase"></i></div>
              <div>
                <div className="scd-title">Private Enterprise</div>
                <div className="scd-sub">Mid-Market · Corporates</div>
              </div>
            </div>
            <div className="scd-desc">
              Custom SaaS, AI, and IT services for organisations looking to scale operations, automate processes, and differentiate through technology — delivered with precision and structured accountability.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">Custom SaaS</span>
              <span className="uc-pill">Process Automation</span>
              <span className="uc-pill">Data Analytics</span>
              <span className="uc-pill">CRM / ERP</span>
              <span className="uc-pill">Digital Products</span>
            </div>
          </div>

          {/* 2. Government */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-b"><i className="ti ti-building-community"></i></div>
              <div>
                <div className="scd-title">Government</div>
                <div className="scd-sub">Central · State Departments</div>
              </div>
            </div>
            <div className="scd-desc">
              Citizen service platforms, departmental workflow systems, e-procurement, and digital public infrastructure — built with understanding of NIC, MeitY, GeM, and e-Office frameworks and how government procurement cycles work.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">Citizen Portals</span>
              <span className="uc-pill">e-Procurement</span>
              <span className="uc-pill">Workflow Automation</span>
              <span className="uc-pill">GeM Integration</span>
              <span className="uc-pill">GIS Systems</span>
            </div>
          </div>

          {/* 3. Public Sector Units */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-w"><i className="ti ti-building-factory-2"></i></div>
              <div>
                <div className="scd-title">Public Sector Units</div>
                <div className="scd-sub">Central PSUs · State PSEs</div>
              </div>
            </div>
            <div className="scd-desc">
              ERP modernisation, compliance systems, workforce management, and MIS platforms built for PSU procurement norms — with GeM compatibility and audit readiness as standard design requirements.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">ERP Modernisation</span>
              <span className="uc-pill">Compliance Systems</span>
              <span className="uc-pill">Workforce Management</span>
              <span className="uc-pill">MIS Dashboards</span>
              <span className="uc-pill">GeM Integration</span>
            </div>
          </div>

          {/* 4. Banking & Finance */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-b"><i className="ti ti-building-bank"></i></div>
              <div>
                <div className="scd-title">Banking & Finance</div>
                <div className="scd-sub">Banks · NBFCs · Fintech</div>
              </div>
            </div>
            <div className="scd-desc">
              Core banking integration, payment infrastructure, and AI-powered risk and compliance systems — designed with RBI and SEBI regulatory requirements built in from the start, not added later.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">Core Banking Integration</span>
              <span className="uc-pill">Fraud Detection</span>
              <span className="uc-pill">KYC / AML</span>
              <span className="uc-pill">Lending Platforms</span>
              <span className="uc-pill">Payment Infrastructure</span>
            </div>
          </div>

          {/* 5. Healthcare */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-g"><i className="ti ti-heart-rate-monitor"></i></div>
              <div>
                <div className="scd-title">Healthcare</div>
                <div className="scd-sub">Hospitals · Public Health · HealthTech</div>
              </div>
            </div>
            <div className="scd-desc">
              HMIS, EMR, telemedicine platforms, and population health analytics aligned with ABDM and FHIR/HL7 standards — for both public health programmes and private healthcare providers.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">HMIS / EMR</span>
              <span className="uc-pill">ABDM Integration</span>
              <span className="uc-pill">Telemedicine</span>
              <span className="uc-pill">Lab & Pharmacy</span>
              <span className="uc-pill">Health Analytics</span>
            </div>
          </div>

          {/* 6. Education */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-w"><i className="ti ti-school"></i></div>
              <div>
                <div className="scd-title">Education</div>
                <div className="scd-sub">Universities · Schools · Skill Development</div>
              </div>
            </div>
            <div className="scd-desc">
              LMS, student lifecycle management, NEP-aligned learning platforms, and analytics for institutions, state boards, and skill development bodies.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">LMS Platforms</span>
              <span className="uc-pill">Student ERP</span>
              <span className="uc-pill">Exam Management</span>
              <span className="uc-pill">Admission Systems</span>
              <span className="uc-pill">Learning Analytics</span>
            </div>
          </div>

          {/* 7. Telecom */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-b"><i className="ti ti-device-mobile-signal"></i></div>
              <div>
                <div className="scd-title">Telecom</div>
                <div className="scd-sub">Carriers · ISPs · Tower Companies</div>
              </div>
            </div>
            <div className="scd-desc">
              OSS/BSS integration, subscriber management, network analytics, and AI-powered churn prediction — for operators managing scale in India's 5G and broadband environment.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">OSS / BSS Integration</span>
              <span className="uc-pill">Subscriber Management</span>
              <span className="uc-pill">Network Analytics</span>
              <span className="uc-pill">Churn Prediction</span>
            </div>
          </div>

          {/* 8. Railways */}
          <div className="scd">
            <div className="scd-head">
              <div className="scd-iw i-g"><i className="ti ti-train"></i></div>
              <div>
                <div className="scd-title">Railways</div>
                <div className="scd-sub">Indian Railways · Metro · Safety Systems</div>
              </div>
            </div>
            <div className="scd-desc">
              Operations management, safety analytics, training simulation, and asset management — with understanding of RDSO, CRIS, and the Kavach/ATP ecosystem. Specific focus on behaviour analytics, fault prediction, and deployment tracking tools.
            </div>
            <div className="uc-pills">
              <span className="uc-pill">Operations Management</span>
              <span className="uc-pill">Safety Analytics</span>
              <span className="uc-pill">Training Simulation</span>
              <span className="uc-pill">Fault Prediction</span>
              <span className="uc-pill">Asset Tracking</span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}