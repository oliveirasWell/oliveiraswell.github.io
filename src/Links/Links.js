import React from "react";
import styled from "styled-components";
import { linksList } from "./linksList";

const aStyle = { margin: "5px" };

const Span = styled.span`
  fontWeight: ${({ index }) => (index % 2 === 0 ? "200" : "800")} }
`;

export const Links = () =>
  Object.values(linksList).map((link, index) => (
    <a
      key={index}
      rel="noopener noreferrer"
      className="link"
      style={aStyle}
      href={link.link}
      target="_blank"
    >
      <Span index={index}> {link.text} </Span>
    </a>
  ));
