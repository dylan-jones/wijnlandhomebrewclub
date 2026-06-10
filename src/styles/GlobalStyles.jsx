import { createGlobalStyle, css, styled } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --gold: #C4973A;
    --gold-light: #d4a84a;
    --black: #111111;
    --dark: #1c1c1c;
    --white: #ffffff;
    --off-white: #f7f6f3;
    --light-gray: #f0eeeb;
    --mid-gray: #F5F5F4;
    --text: #2c2c2c;
    --text-muted: #666666;
    --max-w: 1200px;
    --font-bebas: 'Bebas Neue', sans-serif;
    --font-space: 'Space Grotesk', sans-serif;
    --font-work: 'Work Sans', sans-serif;

    --header-font-size-xl: 4.1rem;
    --header-font-size-lg: 3.6rem;
    --header-font-size-md: 2.4rem;
    --body-font-size: 1.6rem;
    --btn-font-size: 2rem;
    --caption-font-size: 1.2rem;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-work);
    color: var(--text);
    line-height: 2.4rem;
    background: var(--white);
    font-size: var(--body-font-size);
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  ul {
    list-style: none;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export const sectionPadding = css`
  padding: 8rem 0;
  scroll-margin-top: 8rem;
`;

export const Section = styled.section`
  ${sectionPadding}
`;

export const Container = styled.div`
  width: min(var(--max-w), 100%);
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-space);
  font-size: 3.6rem;
  line-height: 4.2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  input,
  textarea {
    width: 100%;
    padding: 0.8rem 1.6rem;
    border: 1px solid #656565;
    font-size: 1.6rem;
    background: var(--white);
    color: var(--black);
    outline: none;
    transition: border-color 0.2s;
    border-radius: 0;
    appearance: none;
    min-height: 5.6rem;
    font-family: var(--font-work);
    font-weight: 500;
  }

  input:focus,
  textarea:focus {
    border-color: var(--gold);
  }

  textarea {
    min-height: 13rem;
  }
`;

export const SecondaryButton = styled.button`
  display: inline-block;
  padding: 0.7rem 1.8rem;
  font-family: 'Oswald', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid var(--black);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  align-self: flex-start;
  background: var(--black);
  color: var(--white);

  &:hover {
    background: #333;
    border-color: #333;
  }
`;


export const TextColumn = styled.div`
  color: var(--white);
  font-size: 1.6rem;

  p {
    margin-bottom: 1.6rem;
  }
`;

export const BorderImage = styled.div`
  border: 4px solid var(--black);
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    object-fit: contain;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--black);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translate(0.8rem, 0.8rem);
  }

  @media (max-width: 900px) {
    max-width: 640px;
    margin: 0 auto;
  }
`;