import {
  BackgroundContainer,
  Container,
  Title,
  Grid,
} from "./memes-section.styles";

export function MemeSection() {
  return (
    <BackgroundContainer>
      <Container id="memes">
        <Title>Endless possibilities</Title>

        <Grid>
          <img height={200} width={200} src="/assets/pixiBath.png" />
          <img height={200} width={400} src="/assets/pixiTitan.png" />
          <img height={200} width={200} src="/assets/pixiBath.png" />
          <img height={200} width={400} src="/assets/pixiTitan.png" />
          <img height={200} width={200} src="/assets/pixiBath.png" />
          <img height={200} width={400} src="/assets/pixiTitan.png" />
          <img height={200} width={200} src="/assets/pixiBath.png" />
          <img height={200} width={400} src="/assets/pixiTitan.png" />
          <img height={200} width={200} src="/assets/pixiBath.png" />

          {/* <video src="/badApe6.mp4" autoPlay loop muted playsInline></video> */}
        </Grid>
      </Container>
    </BackgroundContainer>
  );
}
