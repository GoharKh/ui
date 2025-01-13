import classNames from "classnames";

import useBannerStyles from "../../styles/components/bannerStyles";

const Banner = ({ firstBanner, title, content, buttonTitle }) => {
  const { parentStyles } = useBannerStyles();

  return (
    <div className={parentStyles}>
      <div className={classNames("banner", { firstBanner })}>
        <h1 className={classNames({ "has-content": content })}>{title}</h1>
        {content && <span>{content}</span>}
        <button className={classNames({ "has-content": content })}>
          {buttonTitle}
        </button>
        <div className="slide-container">
          <span className="slide-dot active"></span>
          <span className="slide-dot"></span>
          <span className="slide-dot"></span>
          <span className="slide-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
