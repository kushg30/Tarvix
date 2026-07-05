import { useNavigate } from 'react-router-dom';

export default function CTABand({ heading, subtext, buttonText, accentText }) {
  const navigate = useNavigate();

  return (
    <div className="cta-band">
      <div>
        <div className="cta-h">
          {heading} {accentText && <span className="ac">{accentText}</span>}
        </div>
        <div className="cta-s">{subtext}</div>
      </div>
      <button className="btn-primary" onClick={() => navigate('/contact')}>
        {buttonText}
      </button>
    </div>
  );
}