/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: ${({ $outline }) => $outline ? "var(--white)" : "var(--black)"};
  color: ${({ $outline }) => $outline ? "var(--black)" : "var(--white)"};
  border: 4px solid var(--black);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  font-family: var(--font-space);
  font-size: var(--btn-font-size);
  font-weight: 700;
  text-transform: uppercase;
  height: 5rem;
  width: auto;
  padding: 0 2.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &::after {
    transition: transform 0.3s ease;
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--black);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform:  translate(0.8rem, 0.8rem);
  }

  &:hover {
    &:after {
        transform: translate(1.2rem, 1.2rem);
    }
  }

  &:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
  }
`;

const Button = styled.button`
  ${buttonStyles}
`;

const Anchor = styled.a`
  ${buttonStyles}
`;

const PrimaryButton = ({ children, onClick, outline, href, type = "button", disabled = false }) => {
  if (href) {
    const handleClick = (e) => {
      if (href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (typeof history !== "undefined" && history.replaceState) {
            history.replaceState(null, "", href);
          }
        }
      }
      onClick?.(e);
    };

    return (
      <Anchor href={href} onClick={handleClick} $outline={outline}>
        {children}
      </Anchor>
    );
  }

  return (
    <Button onClick={onClick} $outline={outline} type={type} disabled={disabled}>
      {children}
    </Button>
  );
};

export default PrimaryButton;