import { createUseStyles } from "react-jss";

import { rem } from "../mixins";
import { primaryColor, secondaryColor, white } from "../constants/colors";

const useProductsStyles = createUseStyles(
  {
    parentStyles: {
      padding: [0, rem(23)],
      marginTop: rem(40),
      marginBottom: rem(10),
      color: primaryColor,
      "& .header": {
        display: "flex",
        gap: rem(22),
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        "& .header-title": {
          display: "flex",
          alignItems: "center",
          gap: rem(30),
          "& span": {
            fontSize: rem(25),
          },
          "& div": {
            gap: rem(10),
            display: "flex",
            cursor: "pointer",
          },
        },
        "& button": {
          color: white,
          cursor: "pointer",
          boxSizing: "border-box",
          width: rem(181),
          height: rem(50),
          padding: [rem(10), rem(20)],
          borderRadius: rem(25),
          fontWeight: 700,
          backgroundColor: secondaryColor,
          "& div": {
            display: "flex",
            gap: rem(40),
            alignItems: "center",
          },
        },
      },
      "& .product-list": {
        display: "flex",
        margin: [rem(23), 0],
        gap: `calc(100% - ${197 * 6} - 23)`,
        justifyContent: "space-between",
        "& .product-item": {
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: rem(197),
          height: rem(269),
          fontWeight: 700,
          gap: rem(10),
          "& img": {
            width: rem(197),
            height: rem(197),
            objectFit: "cover",
            borderRadius: rem(8),
          },
        },
      },
    },
  },
  { name: "Products" }
);

export default useProductsStyles;
