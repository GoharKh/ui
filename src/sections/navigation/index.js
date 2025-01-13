import { NAV_OPTIONS } from "../../constants";

import PhoneIcon from "../../styles/icons/phone.svg";
import useNavigationStyles from "../../styles/components/navigationStyles";

const Navigation = () => {
  const { parentStyles } = useNavigationStyles();

  return (
    <div className={parentStyles}>
      <ul>
        {NAV_OPTIONS.map((option) => (
          <li key={option}>
            <a href="/">{option}</a>
          </li>
        ))}
      </ul>
      <div className="phone">
        <img alt="phone" src={PhoneIcon} />
        <span>+(844) 434-672</span>
      </div>
    </div>
  );
};

export default Navigation;
