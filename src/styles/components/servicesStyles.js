import { createUseStyles } from "react-jss";

import { rem } from "../mixins";

const useServicesStyles = createUseStyles(
  {
    parentStyles: {
      padding: [0, rem(203)],
      display: "flex",
      alignItems: "center",
      margin: [rem(103), 0],
      justifyContent: "space-between",
      "& .single-service": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: 700,
        fontSize: rem(25),
        "& img": {
          width: rem(77),
        },
      },
    },
  },
  { name: "Services" }
);

export default useServicesStyles;
