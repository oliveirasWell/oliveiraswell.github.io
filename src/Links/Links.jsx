import styled from "styled-components";
import { linksList } from "./linksList";

const linkStyle = { margin: "5px" };

const Text = styled.span`
  font-weight: ${({ $index }) => ($index % 2 === 0 ? 200 : 800)};
`;

export const Links = () =>
  Object.entries(linksList).map(([key, link], index) => (
    <a
      key={key}
      rel="noopener noreferrer"
      className="link"
      style={linkStyle}
      href={link.link}
      target="_blank"
    >
      <Text $index={index}> {link.text} </Text>
    </a>
  ));
