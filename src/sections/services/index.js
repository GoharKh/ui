import { SERVICES } from "../../constants";

import useServicesStyles from "../../styles/components/servicesStyles";

const Services = () => {
  const { parentStyles } = useServicesStyles();

  return (
    <div className={parentStyles}>
      {SERVICES.map(({ title, src }) => (
        <div key={title} className="single-service">
          <img alt={title} src={src} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default Services;
