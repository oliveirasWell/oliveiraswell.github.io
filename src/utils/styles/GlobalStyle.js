import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  body {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  
  body {
      line-height: 1.5;
      background-color: #100e0e;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      margin: 0;
  }

  h2 {
      margin-top: 1em;
      padding-top: 1em;
  }
  
  h1,
  h2 {
      font-weight: 100;
      color: #c0c0c0;
  }
  
  a {
      text-decoration: none;
  }
  
  span {
      font-weight: 500;
  }
  
  .link:hover {
      color: #ff0065;
      transition: color 200ms ease-in-out;
  }
  
  .link {
      color: #ffffff;
      transition: color 200ms ease-in-out;
  }
  
  .black-white-img {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
      transition: filter 200ms ease-in-out;
  }
  
  .black-white-img:hover {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      transition: filter 200ms ease-in-out;
  }
  
  @media (min-width: 500px) {
      .linkFixedRight {
          position: absolute;
          right: 0;
          max-width: 45%;
      }
  }
  
  @media (max-width: 200px) {
      .linkFixedRight {
          position: unset;
          display: flex;
          max-width: 100%;
      }
  }
  
  @media (min-width: 500px) {
      .resumeContainer {
          max-width: 50%;
      }
  }
  
  @media (max-width: 500px) {
      .resumeContainer {
          max-width: 100%;
      }
  }
  
  
  @media (min-width: 500px) {
      .justifyResponsive {
          justify-content: flex-start;
      }
  }
  
  @media (max-width: 500px) {
      .justifyResponsive {
          justify-content: center;
      }
  }
  
  @media (max-width: 500px) {
      .no-display-mobile {
          display: none !important;
      }
  }
  
  @media (min-width: 500px) {
      .only-display-mobile {
          display: none !important;
      }
  }
`;

export default GlobalStyle;
