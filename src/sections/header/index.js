import { Fragment } from "react";

import {
  HEADER_ICONS,
  HEADER_NAV_OPTIONS,
  HEADER_SETTINGS,
} from "../../constants";

import SearchIcon from "../../styles/icons/search.svg";
import useHeaderStyles from "../../styles/components/headerStyles";

const Header = () => {
  const { parentStyles } = useHeaderStyles();

  return (
    <header className={parentStyles}>
      <div className="settings">
        {HEADER_SETTINGS.map((setting) => (
          <a href="/" key={setting}>
            {setting}
          </a>
        ))}
      </div>
      <div className="container">
        <div className="left">
          <div className="logo">LOGO</div>
          <div className="search-block">
            <img alt="search" src={SearchIcon} />
            <input type="text" placeholder="Product SKU, Name..." />
          </div>
        </div>
        <div className="right">
          {HEADER_NAV_OPTIONS.map(({ title, icon }) => (
            <Fragment key={title}>
              <img alt={title} src={HEADER_ICONS[icon]} />
              <span>{title}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
