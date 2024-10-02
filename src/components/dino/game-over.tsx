import { Text, TextWrapper } from "./styles";

type GameOverScreenProps = {
  score: number;
};

export function GameOverScreen({ score }: GameOverScreenProps) {
  return (
    <TextWrapper>
      <Text style={{ fontSize: "25px" }}>Game Over</Text>
      <Text style={{ fontSize: "30px" }}>Score: {score}</Text>
      <Text>"click" or "tap" to restart</Text>
    </TextWrapper>
  );
}
