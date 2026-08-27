export const colors = {
  spotlight: "#ff0065",
  text: "#ffffff",
  muted: "#c0c0c0",
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

export const languageToggleStyle = {
  background: "none",
  border: `1px solid ${colors.spotlight}`,
  borderRadius: "4px",
  color: colors.spotlight,
  cursor: "pointer",
  font: "inherit",
  fontWeight: 500,
  marginLeft: "auto",
  padding: "0.25em 0.75em",
};

// The links panel is absolutely positioned at right: 0 and would otherwise
// paint over the toggle and swallow its clicks, so this row is lifted above it.
export const headerRowStyle = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1em",
  position: "relative",
  zIndex: 1,
};

export const linkGroupStyle = { padding: "0 1em 1em" };

export const linkGroupTitleStyle = {
  color: colors.spotlight,
  fontSize: "0.9rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  margin: "0 0 0.5em",
  padding: 0,
  textTransform: "uppercase",
};

export const reposSectionStyle = { marginTop: "1em" };

export const reposSubtitleStyle = {
  color: colors.muted,
  fontSize: "0.85rem",
  fontWeight: 300,
};

export const reposGridStyle = {
  display: "grid",
  gap: "0.75em",
  gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
  margin: "1em 0",
};

export const repoCardStyle = {
  border: "1px solid #2a2626",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  gap: "0.35em",
  padding: "0.85em",
};

export const repoNameStyle = { fontWeight: 500, wordBreak: "break-word" };

export const repoDescriptionStyle = {
  color: colors.muted,
  fontSize: "0.85rem",
  fontWeight: 300,
};

export const repoMetaStyle = {
  color: colors.spotlight,
  fontSize: "0.75rem",
  fontWeight: 400,
  marginTop: "auto",
};

export const reposAllStyle = { fontSize: "0.85rem", fontWeight: 300 };
