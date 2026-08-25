import perfil from "../utils/assets/perfil.jpg";
import { Links } from "../Links/Links";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import GlobalStyle from "../utils/styles/GlobalStyle";
import {
  bodyStyle,
  firstNameStyle,
  imageStyle,
  lastNameStyle,
  linksContainerStyle,
  linksListStyle,
  linksPanelStyle,
  linksPanelTitleStyle,
  marginRight20Style,
  pageContainerStyle,
  pageHeaderStyle,
  profileStyle,
  resumeContainerStyle,
  socialLinksMobileStyle,
  socialLinksStyle,
  spotlightTextStyle,
  subtitleStyle,
  whiteTextStyle,
} from "../utils/styles/styles";

const interests = [
  "Javascript",
  "React",
  "React Native",
  "Big Data",
  "Spark",
  "Machine Learning",
  "Code quality",
  "Tests automation",
  "General environment automation",
];

const App = () => (
  <>
    <GlobalStyle />
    <div style={pageContainerStyle}>
      <div style={pageHeaderStyle}>
        <div className="justifyResponsive" style={profileStyle}>
          <img
            className="black-white-img"
            src={perfil}
            alt="Wellington Oliveira"
            style={imageStyle}
          />
          <span data-testid="title" style={firstNameStyle}>
            Wellington
          </span>
          <span style={lastNameStyle}>Oliveira</span>
        </div>
        <div style={subtitleStyle} className="resumeContainer">
          <span style={marginRight20Style}>Fullstack Dev</span>
          <span style={marginRight20Style}>Computer Engineer</span>
          <span style={marginRight20Style}>MSc student in Big Data</span>
        </div>
      </div>

      <div style={bodyStyle}>
        <div className="resumeContainer" style={resumeContainerStyle}>
          <h1>Hi there</h1>
          <span style={whiteTextStyle}>
            Thank you for coming here, my name is Wellington, I&apos;m a
            computer engineer graduated from UFMS - Campo Grande - Brazil, MSc
            student in big data at UFSCAR. Currently I work as Senior Developer
            at{" "}
            <a
              className="link"
              href="https://dextra.com.br/pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dextra
            </a>
            .
          </span>

          <br />
          <br />

          <span style={whiteTextStyle}>
            After five years of experience of software development on Java and
            Javascript systems and also IoT devices I&apos;m a fullstack
            professional that can design, develop, build and release
            applications of several domains and technologies domains.
          </span>

          <br />
          <br />

          <span style={whiteTextStyle}>
            My current interests are{" "}
            {interests.map((interest, index) => (
              <span key={interest}>
                <span style={spotlightTextStyle}>{interest}</span>
                {index < interests.length - 2 && ", "}
                {index === interests.length - 2 && " and "}
              </span>
            ))}{" "}
            from scripts to start app on startup to residential automation.
          </span>

          <br />
          <br />

          <span style={whiteTextStyle}>
            Want to send a message? Be my guest! Send an{" "}
            <a className="link" href="mailto:well.oliveira.snt@gmail.com">
              e-mail <span>😉</span>
            </a>
          </span>
        </div>
      </div>

      <div className="linkFixedRight" style={linksPanelStyle}>
        <h1 style={linksPanelTitleStyle}>Links</h1>

        <div style={linksContainerStyle}>
          <div style={socialLinksStyle} className="no-display-mobile">
            <SocialLinks />
          </div>

          <div style={linksListStyle}>
            <Links />
          </div>
        </div>
      </div>

      <div style={socialLinksMobileStyle} className="only-display-mobile">
        <SocialLinks textAlign="center" justifyContent="center" />
      </div>
    </div>
  </>
);

export default App;
