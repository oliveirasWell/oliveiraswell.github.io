import perfil from "../utils/assets/perfil.jpg";
import { Links } from "../Links/Links";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Projects } from "../Projects/Projects";
import GlobalStyle from "../utils/styles/GlobalStyle";
import { calendly, company, content, resume } from "../i18n/content";
import { useLanguage } from "../i18n/useLanguage";
import {
  availabilityStyle,
  bodyStyle,
  firstNameStyle,
  headerRowStyle,
  imageStyle,
  languageToggleStyle,
  lastNameStyle,
  linksContainerStyle,
  linksListStyle,
  linksPanelStyle,
  linksPanelTitleStyle,
  marginRight20Style,
  nameHeadingStyle,
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

const CompanyLink = () => (
  <a
    className="link"
    href={company.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {company.name}
  </a>
);

const withCompanyLink = (text) => {
  const [before, after = ""] = text.split("{company}");

  return (
    <>
      {before}
      <CompanyLink />
      {after}
    </>
  );
};

const App = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  return (
    <>
      <GlobalStyle />
      <div style={pageContainerStyle}>
        <div style={pageHeaderStyle}>
          <div style={headerRowStyle}>
            <div className="justifyResponsive" style={profileStyle}>
              <img
                className="black-white-img"
                src={perfil}
                alt=""
                style={imageStyle}
              />
              <h1 style={nameHeadingStyle}>
                <span data-testid="title" style={firstNameStyle}>
                  Wellington
                </span>{" "}
                <span style={lastNameStyle}>Oliveira</span>
              </h1>
            </div>
            <button
              type="button"
              onClick={toggleLanguage}
              style={languageToggleStyle}
              aria-label={t.switchLabel}
            >
              {t.switchText}
            </button>
          </div>
          <div style={subtitleStyle} className="resumeContainer">
            {t.roles.map((role) => (
              <span key={role} style={marginRight20Style}>
                {role}
              </span>
            ))}
          </div>
          <div className="resumeContainer" style={availabilityStyle}>
            {t.availability}
          </div>
        </div>

        <div style={bodyStyle}>
          <div className="resumeContainer" style={resumeContainerStyle}>
            <span style={whiteTextStyle}>{t.intro}</span>

            <br />
            <br />

            <span style={whiteTextStyle}>{withCompanyLink(t.experience)}</span>

            <br />
            <br />

            <span style={whiteTextStyle}>{t.background}</span>

            <br />
            <br />

            <span style={whiteTextStyle}>
              {t.interestsIntro}{" "}
              {t.interests.map((interest, index) => (
                <span key={interest}>
                  <span style={spotlightTextStyle}>{interest}</span>
                  {index < t.interests.length - 2 && ", "}
                  {index === t.interests.length - 2 && ` ${t.conjunction} `}
                </span>
              ))}{" "}
              {t.interestsOutro}
            </span>

            <br />
            <br />

            <span style={whiteTextStyle}>
              {t.contact}{" "}
              <a className="link" href="mailto:well.oliveira.snt@gmail.com">
                {t.contactLink} <span>😉</span>
              </a>{" "}
              {t.contactOr}{" "}
              <a
                className="link"
                href={calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.bookCall}
              </a>
              . {t.resumeText}{" "}
              <a
                className="link"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.resumeLink}
              </a>
              .
            </span>

            <Projects titles={t.projectGroups} language={language} />
          </div>
        </div>

        <div className="linkFixedRight" style={linksPanelStyle}>
          <div style={linksContainerStyle}>
            <div style={socialLinksStyle} className="no-display-mobile">
              <SocialLinks />
            </div>

            <div style={linksListStyle}>
              <h1 style={linksPanelTitleStyle}>{t.linksTitle}</h1>
              <Links titles={t.linkGroups} />
            </div>
          </div>
        </div>

        <div style={socialLinksMobileStyle} className="only-display-mobile">
          <SocialLinks textAlign="center" justifyContent="center" />
        </div>
      </div>
    </>
  );
};

export default App;
