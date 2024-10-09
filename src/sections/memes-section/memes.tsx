import { Container, Title, Grid } from "./memes-section.styles";

export function MemeSection() {
  return (
    <Container id="memes">
      <Title>Endless possibilities</Title>
      <Grid>
        <img src="/assets/goldenPixi.png" />
        <img src="/assets/pixiTitan.png" />
        <img src="/assets/davinciPixi.jpeg" />
        <img src="/assets/hopiumPixi.jpeg" />
        <img src="/assets/lockinPixi.jpeg" />
        <img src="/assets/soloPixi.jpeg" />
        <img src="/assets/uptoberPixi.png" />
      </Grid>
    </Container>
  );
}
