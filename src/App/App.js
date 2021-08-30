/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-fragments */
import React from "react";
import ReactGA from "react-ga";

import perfil from "../utils/assets/perfil.jpg";
import { Links } from "../Links/Links";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import {
  fotoPerfilStyle,
  PageContainerStyle,
  pageHeaderStyle,
  socialLinks2style,
  socialLinksStyle,
  styleBody,
  styleContasiner,
  styleOliveira,
  styles,
  styleSubTittle,
  styleTitle,
  linkFixedRightstyle,
  linkFixedRightH1,
  socialLinksContainerMobile,
  emailStyle,
  colorWhiteStyles,
  resumeDescriptionTextStyled,
  resumeContainerStyled,
} from "../utils/styles/styles";

import GlobalStyle from "../utils/styles/GlobalStyle";

const interrestsContainerStyles = { color: "white" };

const App = () => {
  React.useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  );

  return (
    <React.Fragment>
      <GlobalStyle />
      <div style={PageContainerStyle}>
        <div style={pageHeaderStyle}>
          <div className="justifyResponsive" style={fotoPerfilStyle}>
            <img
              className="black-white-img"
              src={perfil}
              alt={"Here I'am"}
              style={styles.image}
            />
            <span data-testid="title" style={styleTitle}>
              Wellington
            </span>
            <span style={styleOliveira}>Oliveira</span>
          </div>
          <div style={styleSubTittle} className="resumeContainer">
            <span style={styles.marginRight20}>Fullstack Dev</span>
            <span style={styles.marginRight20}>Computer Engineer</span>
            <span style={styles.marginRight20}>MSc student in Big Data</span>
          </div>
        </div>

        <div style={styleBody}>
          <div className="resumeContainer" style={resumeContainerStyled}>
            <h1>Hi there</h1>
            <span style={resumeDescriptionTextStyled}>
              Thank you to come here, my name is Wellington, I'm a computer
              engineer graduated from UFMS - Campo Grande - Brazil, MSc student
              in big data at UFSCAR. Current I work as Senior Software Engineer at{" "}
              <a className="link" href="https://www.bairesdev.com/">
                Bairesdev
              </a>
              {" "}provinding SE services around the world
            </span>

            <br />
            <br />

            <span style={colorWhiteStyles}>
              After five years of experience of software development on Java and
              Javascript systems and also IoT devices I'm a fullstack
              professional that can design, develop, build and release
              applications of several domains and technologies domains.
            </span>

            <br />
            <br />

            <span style={interrestsContainerStyles}>
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
                General environment automation
              </span>{" "}
              from scripts to start app on startup to residential automation.
            </span>

            <br />
            <br />
            <span style={emailStyle}>
              Want to send a message? Be my gest! Send an{" "}
              <a className="link" href="mailto:well.oliveira.snt@gmail.com">
                e-mail <span>😉</span>
              </a>
            </span>
          </div>
        </div>
        <div className="linkFixedRight" style={linkFixedRightstyle}>
          <h1 style={linkFixedRightH1}>Links</h1>

          <div style={socialLinksContainerMobile}>
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
    </React.Fragment>
  );
};

export default App;
