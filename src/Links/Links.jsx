import { linkGroups } from "./linksList";
import { linkGroupStyle, linkGroupTitleStyle } from "../utils/styles/styles";

const linkStyle = { display: "block", fontWeight: 300, margin: "5px" };

export const Links = ({ titles }) =>
  linkGroups.map((group) => (
    <div key={group.id} style={linkGroupStyle}>
      <h2 style={linkGroupTitleStyle}>{titles[group.id]}</h2>
      {group.items.map((item) => (
        <a
          key={item.link}
          rel="noopener noreferrer"
          className="link"
          style={linkStyle}
          href={item.link}
          target="_blank"
        >
          {item.text}
        </a>
      ))}
    </div>
  ));
