import { Text, TextWrapper } from "./styles";

export function StartScreen() {
  return (
    <TextWrapper>
      <Text>Click / tap = jump</Text>

      <button>
        <Text>Start</Text>
      </button>
    </TextWrapper>
  );
}
