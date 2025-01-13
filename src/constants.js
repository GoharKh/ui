import UserIcon from "../src/styles/icons/user.svg";
import CartIcon from "../src/styles/icons/cart.svg";
import IdeaIcon from "../src/styles/icons/idea.png";
import ListIcon from "../src/styles/icons/document.svg";
import SupportIcon from "../src/styles/icons/support.png";
import CatalogIcon from "../src/styles/icons/catalog.svg";
import VectorIcon from "../src/styles/icons/lightning.svg";
import product1 from "../src/styles/images/products/1.jpeg";
import product2 from "../src/styles/images/products/2.jpeg";
import product3 from "../src/styles/images/products/3.jpeg";
import product4 from "../src/styles/images/products/4.jpeg";
import product5 from "../src/styles/images/products/5.jpeg";
import product6 from "../src/styles/images/products/6.jpeg";

export const HEADER_ICONS = {
  listIcon: ListIcon,
  userIcon: UserIcon,
  vector: VectorIcon,
  cartIcon: CartIcon,
};

export const HEADER_NAV_OPTIONS = [
  { title: "Lists", icon: "listIcon" },
  { title: "account", icon: "userIcon" },
  { title: "Quick Order", icon: "vector" },
  { title: "Cart", icon: "cartIcon" },
];

export const HEADER_SETTINGS = ["Request a Sample", "Help", "Contact"];

export const NAV_OPTIONS = [
  "Products",
  "Resources",
  "Services",
  "Locations",
  "Careers",
  "Support",
];

export const PRODUCTS = [
  {
    name: "Abrasives",
    src: product1,
  },
  {
    name: "Electrical",
    src: product2,
  },
  {
    name: "Welding",
    src: product3,
  },
  {
    name: "Safety",
    src: product4,
  },
  {
    name: "Fasteners",
    src: product5,
  },
  {
    name: "Hand Tools",
    src: product6,
  },
];

export const SERVICES = [
  {
    title: "Products Catalog",
    src: CatalogIcon,
  },
  {
    title: "24/7 Customer Support",
    src: SupportIcon,
  },
  {
    title: "Product Ideas",
    src: IdeaIcon,
  },
];


export const FOOTER_SETTINGS = [
    {
      title: "Helpful Links",
      options: [
        "Buyer’s Guides",
        "Calculators",
        "All Brands",
        "Catalog Updates",
      ],
    },
    {
      title: "Customer Services",
      options: [
        "Express Delivery",
        "Privacy Statement",
        "Terms of Use",
        "Pricing Policy",
        "Returns and Refunds",
        "Help and FAQ",
        "Return Points",
        "Returns and Orders",
      ],
    },
    {
      title: "Support",
      options: [
        "Contact Us",
        "FAQ",
        "Feedback",
        "Live Chat",
        "My Account",
        "+(844) 434-672",
      ],
    },
  ];