import { createUseStyles } from "react-jss";

import { color, rem } from "../mixins";
import { underline1, primaryColor, secondaryColor } from "../constants/colors";

const useNavigationStyles = createUseStyles(
  {
    parentStyles: {
      display: "flex",
      padding: rem(23),
      justifyContent: "space-between",
      "& ul": {
        display: "flex",
        gap: rem(22),
        padding: 0,
        "& li a": {
          cursor: "pointer",
          fontWeight: 300,
          fontSize: rem(22),
          color: primaryColor,
          textDecorationColor: color(underline1, 0.5),
        },
      },
      "& .phone": {
        display: "flex",
        alignItems: "end",
        gap: rem(10),
        "& span": {
          fontWeight: 300,
          fontSize: rem(22),
          color: secondaryColor,
          borderBottom: `${rem(1)} solid ${color(secondaryColor, 0.3)}`,
        },
      },
    },
  },
  { name: "Navigation" }
);

export default useNavigationStyles;
