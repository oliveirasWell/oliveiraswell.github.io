export const colors = {
  spotlight: "#ff0065",
  text: "#ffffff",
  muted: "#c0c0c0",
};

export const whiteTextStyle = { color: colors.text };
// Weight is reserved for the accent colour, so it carries the emphasis alone.
export const spotlightTextStyle = { color: colors.spotlight, fontWeight: 500 };
export const marginRight20Style = { marginRight: "20px" };

// Sized in rem, not em: an em would ride on the body font size and shrink the
// photo whenever that is tuned. object-fit is what frames an <img> - the
// background-* properties that used to sit here never applied to one.
export const imageStyle = {
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  objectFit: "cover",
  margin: "0 5px 5px",
};

// The name is the page heading now; it only needs the default h1 spacing gone.
export const nameHeadingStyle = { margin: 0 };

// The first thing a recruiter filters on, so it sits directly under the roles.
export const availabilityStyle = {
  color: colors.muted,
  fontSize: "0.85rem",
  fontWeight: 300,
  marginTop: "0.4em",
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
  fontWeight: 500,
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

// Sits inside the links column as a flex row of its own. The indent is in rem,
// not em: the group headings below indent by 1em of the 0.9rem body text, and
// an em here would resolve against this heading's own much larger font size.
export const linksPanelTitleStyle = {
  flexBasis: "100%",
  margin: 0,
  padding: "0 0.9rem 0.5rem",
};

export const linksContainerStyle = { display: "flex" };

export const languageToggleStyle = {
  background: "none",
  border: `1px solid ${colors.spotlight}`,
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

export const projectsGroupStyle = { marginTop: "1em" };

export const projectGridStyle = {
  display: "grid",
  gap: "0.75em",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  margin: "1em 0",
};

export const projectCardStyle = {
  border: "1px solid #2a2626",
  display: "flex",
  flexDirection: "column",
  gap: "0.5em",
  padding: "0.9em",
};

export const projectTitleStyle = { fontWeight: 500 };

export const projectDescriptionStyle = {
  color: colors.muted,
  fontSize: "0.85rem",
  fontWeight: 300,
};

export const projectToolsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.4em",
  marginTop: "auto",
  paddingTop: "0.3em",
};

export const projectToolStyle = {
  border: `1px solid ${colors.spotlight}`,
  color: colors.spotlight,
  fontSize: "0.7rem",
  fontWeight: 500,
  padding: "0.1em 0.45em",
};
