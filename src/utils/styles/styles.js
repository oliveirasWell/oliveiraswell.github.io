export const colors = {
  spotlight: "#ff0065",
  text: "#ffffff",
};

export const whiteTextStyle = { color: colors.text };
export const spotlightTextStyle = { color: colors.spotlight };
export const marginRight20Style = { marginRight: "20px" };

export const imageStyle = {
  width: "3em",
  height: "3em",
  borderRadius: "50%",
  backgroundPosition: "center",
  backgroundSize: "100% auto",
  backgroundRepeat: "no-repeat",
  margin: "0 5px 5px",
};

export const pageContainerStyle = {
  display: "flex",
  padding: "1em",
  flexDirection: "column",
};

export const pageHeaderStyle = { maxWidth: "100%", padding: "0 2em" };

export const profileStyle = {
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-end",
  textTransform: "uppercase",
  flexFlow: "wrap",
};

export const firstNameStyle = {
  ...whiteTextStyle,
  fontSize: "3rem",
  fontWeight: 100,
};

export const lastNameStyle = {
  ...whiteTextStyle,
  fontSize: "3rem",
  fontWeight: 900,
};

export const subtitleStyle = {
  display: "flex",
  flexDirection: "row",
  color: colors.spotlight,
};

export const bodyStyle = {
  display: "flex",
  padding: "1em",
  flexDirection: "row",
};

export const resumeContainerStyle = { minWidth: "50%", padding: "1em" };

export const socialLinksStyle = {
  display: "flex",
  padding: "1em",
  flexDirection: "column",
  flex: "1",
  margin: "5px",
  paddingRight: 0,
  flexGrow: 1,
};

export const socialItemStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  alignContent: "flex-end",
  textAlign: "right",
  justifyContent: "flex-end",
};

export const linksListStyle = {
  padding: "1em",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  flexBasis: "50%",
};

export const socialLinksMobileStyle = {
  display: "flex",
  padding: "1em",
  flexDirection: "column",
  margin: "5px",
  textAlign: "center",
};

export const linksPanelStyle = { minWidth: "25%", padding: "0.5em" };

export const linksPanelTitleStyle = {
  padding: "1em",
  flexGrow: 1,
  textAlign: "center",
};

export const linksContainerStyle = { display: "flex" };
