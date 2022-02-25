import styled from "@emotion/styled";

const Container = ({ children, padding }) => (
  <StyledContainer padding={padding}>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: ${(p) => p.padding};
`;

export default Container;
