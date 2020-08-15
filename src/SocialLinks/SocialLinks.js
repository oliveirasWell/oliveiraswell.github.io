import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { socialLinksList } from "./socialLinksList";
import { styleSocialItem } from "../utils/styles/styles";

const style = { minWidth: 55, textAlign: "center" };
const iconStyles = { margin: "10px" };

export const SocialLinks = ({
  textAlign = "right",
  justifyContent = "flex-end",
}) =>
  Object.values(socialLinksList).map((item, index) => (
    <div key={index} style={{ textAlign }}>
      <a href={item.link} className="link">
        <div style={{ ...styleSocialItem, justifyContent }}>
          {item.name}
          <div style={style}>
            <FontAwesomeIcon icon={item.icon} size="2x" style={iconStyles} />
          </div>
        </div>
      </a>
    </div>
  ));
