import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  // Form submission state: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pg show">
      <Navbar />

      {/* PAGE HERO */}
      <section className="pg-hero">
        <div
          className="pg-hero-glow"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% -10%, rgba(77,255,160,0.07) 0%, transparent 70%)',
          }}
        ></div>
        <div className="pg-hero-dots"></div>
        <div className="pg-rel">
          <div className="pg-kicker">Contact</div>
          <h1 className="pg-h1">
            Let's start a <span className="ac">conversation</span>
          </h1>
          <p className="pg-sub">
            Share what you're working on — whether it's an early question or a specific requirement — and we'll take it from there.
          </p>
        </div>
      </section>

      {/* CONTACT WRAP */}
      <div className="contact-wrap">

        {/* LEFT — Contact Info */}
        <div className="c-left">
          <div className="ci-row">
            <div className="ci-iw i-g"><i className="ti ti-mail"></i></div>
            <div>
              <div className="ci-lbl">Email</div>
              <div className="ci-val">contact@tarvix.in</div>
              <div className="ci-sub">General enquiries and new work</div>
            </div>
          </div>
          <div className="ci-row" style={{ marginBottom: 0 }}>
            <div className="ci-iw i-b"><i className="ti ti-map-pin"></i></div>
            <div>
              <div className="ci-lbl">Based in</div>
              <div className="ci-val">Hyderabad, Telangana</div>
              <div className="ci-sub">Tarvix Systems LLP</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="c-right">
          <div className="form-h">Send us a message</div>
          <div className="form-sub">Tell us about your requirement.</div>

          {/* SUCCESS MESSAGE */}
          {status === 'success' && (
            <div id="form-success" style={{ display: 'block' }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                color: '#4DFFA0',
                marginBottom: 5,
              }}>
                Message sent.
              </div>
              <div style={{ fontSize: 13, color: 'rgba(228,230,239,0.55)' }}>
                We'll be in touch shortly.
              </div>
            </div>
          )}

          {/* FORM — hide after successful submission */}
          {status !== 'success' && (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New enquiry — TarVix website" />
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="fg">
                <div className="fd">
                  <label>Full Name *</label>
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="fd">
                  <label>Organisation *</label>
                  <input type="text" name="organisation" placeholder="Company / Department" required />
                </div>
                <div className="fd full">
                  <label>Email *</label>
                  <input type="email" name="email" placeholder="your.email@organisation.com" required />
                </div>
                <div className="fd full">
                  <label>Area of interest</label>
                  <select name="interest" defaultValue="">
                    <option value="">Select...</option>
                    <option>Software & SaaS</option>
                    <option>AI & Data Analytics</option>
                    <option>IT Services & Managed Operations</option>
                    <option>Cybersecurity</option>
                    <option>Training & Capacity Building</option>
                    <option>IT & Telecom Hardware</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="fd full">
                  <label>Your requirement *</label>
                  <textarea
                    name="requirement"
                    placeholder="Tell us about your challenge — the more context you share, the better we can respond."
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? 'Sending…'
                  : status === 'error'
                  ? 'Failed — email us at contact@tarvix.in'
                  : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}