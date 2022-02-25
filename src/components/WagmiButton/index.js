import styled from "@emotion/styled";

const WagmiButton = ({ color, onClick, children }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.color};
  color: black;
  cursor: pointer;
  border: none;
  border: 3px solid black;
  padding: 1rem 1.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;
  min-width: 180px;
  -webkit-box-shadow: 4px 4px 0px 0px #000000;
  box-shadow: 4px 4px 0px 0px #000000;

  &:focus {
    outline: none;
  }
`;

export default WagmiButton;
