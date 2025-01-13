import { createUseStyles } from "react-jss";

import { rem } from "../mixins";
import {
  dark,
  gray,
  gray2,
  primaryColor,
  secondaryColor,
  white,
} from "../constants/colors";

const useFooterStyles = createUseStyles(
  {
    parentStyles: {
      padding: [rem(24), rem(24)],
      display: "flex",
      alignItems: "start",
      height: rem(331),
      boxSizing: "border-box",
      backgroundColor: primaryColor,
      justifyContent: "space-between",
      "& .single-setting": {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        "& span": {
          color: white,
          padding: [rem(3), 0],
        },
        "& .title": {
          fontSize: rem(24.2),
          color: gray2,
          fontWeight: 700,
          marginBottom: rem(16),
        },
      },
      "& .subscribe-block": {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        "& span": {
          fontWeight: 700,
          color: gray2,
        },
        "& .email-input": {
          position: "relative",
          display: "inline-block",
          margin: [rem(23), 0],
          "& button": {
            position: "absolute",
            top: 0,
            right: 0,
            color: white,
            fontWeight: 700,
            borderRadius: rem(8),
            padding: [rem(19), rem(47)],
            backgroundColor: secondaryColor,
            cursor: "pointer",
          },
          "& input": {
            height: rem(57),
            width: rem(464),
            backgroundColor: dark,
            border: `${rem(1)} solid ${dark}`,
            borderRadius: rem(11),
            "&::placeholder": {
              color: gray,
              lineHeight: rem(19),
            },
          },
        },
        "& img": {
          width: rem(81),
          height: rem(48),
          marginTop: rem(23),
        },
      },
    },
  },
  { name: "Services" }
);

export default useFooterStyles;
