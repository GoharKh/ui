import { createUseStyles } from "react-jss";

import {
  gray3,
  gray1,
  primaryColor,
  secondaryColor,
} from "../constants/colors";
import { color, rem } from "../mixins";

const useHeaderStyles = createUseStyles(
  {
    parentStyles: {
      display: "flex",
      flexDirection: "column",
      "& .settings": {
        display: "flex",
        alignItems: "center",
        gap: rem(20),
        padding: [rem(12), rem(23)],
        marginLeft: "auto",
        "& a": {
          fontWeight: 400,
          color: secondaryColor,
          textDecorationColor: color(secondaryColor, 0.3),
        },
      },
      "& .container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: [0, rem(23)],
        "& .right": {
          display: "flex",
          width: rem(420),
          alignItems: "center",
          justifyContent: "space-between",
          "& > span": {
            cursor: "pointer",
            color: primaryColor,
            fontWeight: 400,
          },
        },
        "& .left": {
          display: "flex",
          alignItems: "center",
          gap: rem(30),
          // width: rem(620),
          "& .logo": {
            fontWeight: 700,
            fontSize: rem(37),
            lineHeight: rem(17),
          },
          "& .search-block": {
            position: "relative",
            display: "inline-block",
            width: rem(479),
            "& img": {
              position: "absolute",
              top: "50%",
              left: rem(12),
              transform: "translateY(-50%)",
              pointerEvents: "none",
            },
            "& input": {
              height: rem(45),
              width: "100%",
              borderRadius: rem(8),
              backgroundColor: gray3,
              border: `${rem(1)} solid ${gray3}`,
              paddingLeft: rem(55),
              "&::placeholder": {
                color: gray1,
                lineHeight: rem(19),
              },
            },
          },
        },
      },
    },
  },
  { name: "Header" }
);

export default useHeaderStyles;
