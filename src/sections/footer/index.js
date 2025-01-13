import { FOOTER_SETTINGS } from "../../constants";

import payments from "../../styles/images/payment.png";
import useFooterStyles from "../../styles/components/footerStyles";

const Footer = () => {
  const { parentStyles } = useFooterStyles();

  return (
    <div className={parentStyles}>
      {FOOTER_SETTINGS.map(({ title, options }) => (
        <div key={title} className="single-setting">
          <span className="title">{title}</span>
          {options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </div>
      ))}
      <div className="subscribe-block">
        <span>
          Subscribe to our mailing list to receive exclusive offers and the
          latest product updates
        </span>
        <div className="email-input">
          <input type="text" placeholder="Your E-mail" />
          <button>Subscribe</button>
        </div>
        <img alt="payment" src={payments} />
      </div>
    </div>
  );
};

export default Footer;
