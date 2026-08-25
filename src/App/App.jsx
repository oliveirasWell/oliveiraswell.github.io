import perfil from "../utils/assets/perfil.jpg";
import { Links } from "../Links/Links";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import GlobalStyle from "../utils/styles/GlobalStyle";
import { company, content } from "../i18n/content";
import { useLanguage } from "../i18n/useLanguage";
import {
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

// Splits a "... {company} ..." string so the company name renders as a link.
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
                alt="Wellington Oliveira"
                style={imageStyle}
              />
              <span data-testid="title" style={firstNameStyle}>
                Wellington
              </span>
              <span style={lastNameStyle}>Oliveira</span>
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
        </div>

        <div style={bodyStyle}>
          <div className="resumeContainer" style={resumeContainerStyle}>
            <h1>{t.greeting}</h1>
            <span style={whiteTextStyle}>{withCompanyLink(t.intro)}</span>

            <br />
            <br />

            <span style={whiteTextStyle}>{t.experience}</span>

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
              </a>
            </span>
          </div>
        </div>

        <div className="linkFixedRight" style={linksPanelStyle}>
          <h1 style={linksPanelTitleStyle}>{t.linksTitle}</h1>

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
};

export default App;
