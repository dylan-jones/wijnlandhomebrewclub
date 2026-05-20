import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ $outline }) => $outline ? "var(--white)" : "var(--black)"};
  color: ${({ $outline }) => $outline ? "var(--black)" : "var(--white)"};
  border: 4px solid var(--black);
  cursor: pointer;
  -webkit-appearance: none;
  position: relative;
  font-family: var(--font-space);
  font-size: var(--btn-font-size);
  font-weight: 700;
  text-transform: uppercase;
  height: 5rem;
  width: auto;
  padding: 0 2.4rem;
  
  &::after {
    transition: transform 0.3s ease;
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${({ $outline }) => $outline ? "var(--black)" : "var(--black)"};
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
`;

const PrimaryButton = ({ children, onClick, outline }) => {
  return (
    <Button onClick={onClick} $outline={outline}>
        {children}
    </Button>
    );
};

export default PrimaryButton;