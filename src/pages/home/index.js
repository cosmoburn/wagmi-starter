import Container from "../../components/Container";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <HomeWrapper>
      <SectionWrapper>
        <Container>
          <h2>A section on the home page</h2>
          <p>With some content</p>
        </Container>
      </SectionWrapper>
      <SectionWrapper bg="#7cd0ff" color="black">
        <Container>
          <h2>Another section on the home page</h2>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
          <div>With content so we can scroll</div>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <h2>A section on the home page</h2>
        </Container>
      </SectionWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  background: ${(p) => (p.bg ? p.bg : "transparent")};
  color: ${(p) => (p.color ? p.color : "black")};
  padding: 3em 1em;

  @media only screen and (min-width: 600px) {
    padding: 3em 2em;
  }
`;

export default Home;
