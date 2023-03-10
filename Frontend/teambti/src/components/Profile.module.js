export const tagStyle = {
  mx: "auto",
  p: 1,
  mr: 1,
  mt: 3,
  bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "grey.200"),
  color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
  borderColor: (theme) =>
    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
  borderRadius: 2,
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "100",
  display: "inline",
  fontFamily: "GangwonEduSaeeum_OTFMediumA",
};

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "50%",
  height: "auto",
  maxHeight: "80%",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};
