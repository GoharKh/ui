import { PRODUCTS } from "../../constants";

import LeftIcon from "../../styles/icons/left.svg";
import RightIcon from "../../styles/icons/right.svg";
import LiveChat from "../../styles/icons/liveChat.svg";
import useProductsStyles from "../../styles/components/productsStyle";

const Products = () => {
  const { parentStyles } = useProductsStyles();

  return (
    <div className={parentStyles}>
      <div className="header">
        <div className="header-title">
          <span>Categories</span>
          <div>
            <img alt="rightIcon" src={LeftIcon} />
            <img alt="leftIcon" src={RightIcon} />
          </div>
        </div>
        <button>
          <div>
            <span>Live Chat</span>
            <img alt="liveChat" src={LiveChat} />
          </div>
        </button>
      </div>
      <div className="product-list">
        {PRODUCTS.map(({ name, src }) => (
          <div key={name} className="product-item">
            <img alt={name} src={src} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
