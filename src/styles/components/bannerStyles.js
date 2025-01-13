import { createUseStyles } from "react-jss";
import { color, rem } from "../mixins";
import {
  border2,
  gradient1,
  gradient2,
  primaryColor,
  secondaryColor,
  white,
} from "../constants/colors";
import banner from "../../styles/images/banner.jpeg";
import tool from "../../styles/images/tool.jpeg";

const useBannerStyles = createUseStyles(
  {
    parentStyles: {
      padding: [0, rem(23)],
      "& .banner": {
        display: "flex",
        height: rem(675),
        position: "relative",
        borderRadius: rem(16),
        backgroundSize: "cover",
        background: `linear-gradient(to left, ${color(gradient2, 0.74)},${color(
          gradient1,
          0.51
        )}), url(${banner})`,
        "&:not(.firstBanner)": {
          border: `1px solid ${border2}`,
          backgroundSize: [rem(853), rem(682)],
          background: `linear-gradient(to left, ${color(white, 0)},  ${color(
            white,
            0.6
          )},${color(
            white,
            1
          )}) no-repeat right center, url(${tool}) no-repeat right center`,
          backgroundPosition: `right -${rem(100)} center`,
          "& span": {
            position: "absolute",
            width: rem(565),
            top: rem(255),
            left: rem(120),
            fontSize: rem(22),
            textAlign: "start",
            lineHeight: rem(27),
            fontWeight: 400,
            height: rem(183),
            color: "#000000",
          },
        },
        "& h1": {
          width: rem(520),
          position: "absolute",
          top: rem(273),
          left: rem(120),
          color: white,
          fontWeight: 700,
          fontSize: rem(46),
          lineHeight: rem(55),
          textAlign: "start",
          "&.has-content": {
            position: "absolute",
            top: rem(140),
            width: rem(600),
            fontSize: rem(35),
            lineHeight: rem(42, 36),
            color: primaryColor,
          },
        },
        "& button": {
          position: "absolute",
          top: rem(555),
          left: rem(120),
          padding: [rem(19), rem(47)],
          color: white,
          fontSize: rem(22),
          borderRadius: rem(16),
          backgroundColor: secondaryColor,
          cursor: "pointer",
          "&.has-content": {
            top: rem(455),
          },
        },
      },
      "& .slide-container": {
        display: "flex",
        position: "absolute",
        top: rem(630),
        right: rem(30),
      },
      "& .slide-dot": {
        width: rem(8),
        height: rem(8),
        margin: rem(5),
        opacity: 0.6,
        borderRadius: rem(4),
        backgroundColor: white,
        cursor: "pointer",
      },
      "& .slide-dot.active": {
        width: rem(26),
        opacity: 1,
      },
    },
  },
  { name: "Banner" }
);

export default useBannerStyles;
