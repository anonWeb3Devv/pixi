import { MainWrapper, Container, Box, InnerBox } from "./styled";

const Socials = () => {
  const boxes = Array.from({ length: 9 }, (_, index) => index + 1); // Total 9 boxes

  return (
    <MainWrapper>
      <Title></Title>
      <SubTile></SubTile>
      <Container>
        {boxes.map((box, index) => (
          <Box key={box} questionMark={index % 2 !== 0}>
            <InnerBox></InnerBox>
          </Box>
        ))}
      </Container>
    </MainWrapper>
  );
};

export default Socials;
