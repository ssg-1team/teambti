import {
  primary_color_m,
  primary_color_s,
  secondary_color_m,
  white,
} from "../constant/color";

export const bigButtonStyle = {
  width: 1 / 2,
  bgcolor: primary_color_s,
  color: primary_color_m,
  borderRadius: 5,
  textAlign: "center",
  fontSize: "1.0rem",
  fontWeight: "600",
  display: "inline",
  // fontFamily: "GangwonEduSaeeum_OTFMediumA",
  "&:hover": {
    bgcolor: secondary_color_m,
  },
};

export const smallButtonStyle = {
  width: 100,
  bgcolor: primary_color_m,
  color: "#F6F6F6",
  borderRadius: 5,
  textAlign: "center",
  fontSize: "0.8rem",
  fontWeight: "1000",
  display: "inline",
  // fontFamily: "GangwonEduSaeeum_OTFMediumA",
  "&:hover": {
    bgcolor: "#FFD4B2",
  },
};
