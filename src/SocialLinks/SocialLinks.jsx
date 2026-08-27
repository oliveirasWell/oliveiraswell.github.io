import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinksList } from "./socialLinksList";
import { socialItemStyle } from "../utils/styles/styles";

const iconContainerStyle = { minWidth: 55, textAlign: "center" };
const iconStyle = { margin: "10px" };

export const SocialLinks = ({
  textAlign = "right",
  justifyContent = "flex-end",
}) =>
  Object.entries(socialLinksList).map(([key, item]) => (
    <div key={key} style={{ textAlign }}>
      <a
        href={item.link}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ ...socialItemStyle, justifyContent }}>
          {item.name}
          <div style={iconContainerStyle}>
            <FontAwesomeIcon icon={item.icon} size="2x" style={iconStyle} />
          </div>
        </div>
      </a>
    </div>
  ));
