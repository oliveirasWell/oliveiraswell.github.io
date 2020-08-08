/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-inline-styles/no-inline-styles */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import ReactGA from "react-ga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
import perfil from "./perfil.jpg";

import { socialLinks } from "./socialLinks";
import { links } from "./links";

const colors = {
  spotlight: "#ff0065",
};

const styles = {
  marginRight20: { marginRight: "20px" },
  image: {
    width: "3em",
    height: "3em",
    borderRadius: "50%",
    backgroundPosition: "center",
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    margin: "0 5px 5px",
  },
  flexDiv: {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  spanColored: {
    color: colors.spotlight,
  },
};

const PageContainerStyle = {
  display: "flex",
  padding: "1em",
  flexDirection: "column",
};
const pageHeaderStyle = { maxWidth: "100%", padding: "0 2em" };
const fotoPerfilStyle = {
  textTransform: "uppercase",
  ...styles.flexDiv,
  flexFlow: "wrap",
};
const styleWellington = { color: "white", fontSize: "3rem", fontWeight: 100 };
const styleOliveira = { color: "white", fontSize: "3rem", fontWeight: 900 };
const styleBody = { display: "flex", padding: "1em", flexDirection: "row" };

const socialLinksStyle = {
  display: "flex",
  padding: "1em",
  flexDirection: "column",
  flex: "1",
  margin: "5px",
  paddingRight: 0,
  flexGrow: 1,
};

const styleSubTittle = {
  display: "flex",
  flexDirection: "row",
  color: colors.spotlight,
};

const styleSocialItem = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  alignContent: "flex-end",
  textAlign: "right",
  justifyContent: "flex-end",
};
const styleContasiner = {
  padding: "1em",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  flexBasis: "50%",
};
const socialLinks2style = {
  display: "flex",
  padding: "1em",
  flexDirection: "column",
  margin: "5px",
  textAlign: "center",
};

const SocialLinks = ({ textAlign = "right", justifyContent = "flex-end" }) =>
  Object.values(socialLinks).map((item, index) => (
    <div key={index} style={{ textAlign }}>
      <a href={item.link} className="link">
        <div style={{ ...styleSocialItem, justifyContent }}>
          {item.name}
          <div style={{ minWidth: 55, textAlign: "center" }}>
            <FontAwesomeIcon
              icon={item.icon}
              size="2x"
              style={{ margin: "10px" }}
            />
          </div>
        </div>
      </a>
    </div>
  ));

const Links = () =>
  Object.values(links).map((link, index) => (
    <a
      key={index}
      rel="noopener noreferrer"
      className="link"
      style={{ margin: "5px" }}
      href={link.link}
      target="_blank"
    >
      <span style={{ fontWeight: index % 2 === 0 ? "200" : "800" }}>
        {" "}
        {link.text}{" "}
      </span>
    </a>
  ));

const App = () => {
  React.useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  );

  return (
    <div style={PageContainerStyle}>
      <div style={pageHeaderStyle}>
        <div className="justifyResponsive" style={fotoPerfilStyle}>
          <img
            className="black-white-img"
            src={perfil}
            alt={"Here I'am"}
            style={styles.image}
          />
          <span style={styleWellington}>Wellington</span>
          <span style={styleOliveira}>Oliveira</span>
        </div>
        <div style={styleSubTittle} className="resumeContainer">
          <span style={styles.marginRight20}>Fullstack Dev</span>
          <span style={styles.marginRight20}>Computer Engineer</span>
          <span style={styles.marginRight20}>MSc student in Big Data</span>
        </div>
      </div>

      <div style={styleBody}>
        <div
          className="resumeContainer"
          style={{ minWidth: "50%", padding: "1em" }}
        >
          <h1>Hi there</h1>
          <span style={{ color: "white" }}>
            Thank you to come here, my name is Wellington, I'm a computer
            engineer graduated from UFMS - Campo Grande - Brazil, MSc student in
            big data at UFSCAR. Current I work as Senior Developer at{" "}
            <a className="link" href="https://dextra.com.br/pt/">
              Dextra
            </a>
            .
          </span>

          <br />
          <br />

          <span style={{ color: "white" }}>
            After five years of experience of software development on Java and
            Javascript systems and also IoT devices I'm a fullstack professional
            that can design, develop, build and release aplications of several
            domains and tecnologies domains.
          </span>

          <br />
          <br />

          <span style={{ color: "white" }}>
            In my current interests are{" "}
            <span style={styles.spanColored}>Javascript</span>,{" "}
            <span style={styles.spanColored}>React</span>,{" "}
            <span style={styles.spanColored}>React Native</span>,{" "}
            <span style={styles.spanColored}>Big Data</span>,{" "}
            <span style={styles.spanColored}>Spark</span>,{" "}
            <span style={styles.spanColored}>Machine Learning</span>,{" "}
            <span style={styles.spanColored}>Code quality</span>,{" "}
            <span style={styles.spanColored}>Tests automation</span> and{" "}
            <span style={styles.spanColored}>
              General enviroment automation
            </span>{" "}
            from scripts to start app on startup to residential automation.
          </span>

          <br />
          <br />
          <span style={{ color: "white" }}>
            Want to send a message? Be my gest! Send an{" "}
            <a className="link" href="mailto:well.oliveira.snt@gmail.com">
              e-mail <span>😉</span>
            </a>
          </span>
        </div>
      </div>
      <div
        className="linkFixedRight"
        style={{ minWidth: "25%%", padding: "0.5em" }}
      >
        <h1 style={{ padding: "1em", flexGrow: 1, textAlign: "center" }}>
          Links
        </h1>

        <div style={{ display: "flex" }}>
          <div style={socialLinksStyle} className="no-display-mobile">
            <SocialLinks />
          </div>

          <div style={styleContasiner}>
            <Links />
          </div>
        </div>
      </div>

      <div style={socialLinks2style} className="only-display-mobile">
        <SocialLinks textAlign="center" justifyContent="center" />
      </div>
    </div>
  );
};

export default App;
