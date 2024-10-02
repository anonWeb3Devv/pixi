import {
  // BackgroundContainer,
  Container,
  Title,
  Grid,
} from "./memes-section.styles";

export function MemeSection() {
  return (
    // <BackgroundContainer>
    <Container id="memes">
      <Title>Endless possibilities</Title>

      <Grid>
        <img src="/assets/pixiBath.png" />
        <img src="/assets/pixiTitan.png" />
        <img src="/assets/pixiBath.png" />
        <img src="/assets/pixiTitan.png" />
        <img src="/assets/pixiBath.png" />
        <img src="/assets/pixiTitan.png" />
        <img src="/assets/pixiBath.png" />
        <img src="/assets/pixiTitan.png" />
        {/* <img src="/assets/pixiBath.png" /> */}

        {/* <video src="/badApe6.mp4" autoPlay loop muted playsInline></video> */}
      </Grid>
    </Container>
    // </BackgroundContainer>
  );
}
