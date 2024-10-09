import styled from "styled-components";
import { Text, TextWrapper } from "./styles";
import { useState } from "react";

const Input = styled.input`
  text-align: center;
`;

type StartScreenProps = {
  onStart: (name: string) => void;
};

export function StartScreen({ onStart }: StartScreenProps) {
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  function handleSubmit() {
    console.log(name);
    if (!name) {
      setError("Please enter your name");
      return;
    }

    setName("");
    onStart(name);
  }

  return (
    <TextWrapper>
      <Text>Click / tap = jump</Text>

      <Input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={handleSubmit}>
        <Text>Start</Text>
      </button>

      {!!error && (
        <Text
          style={{
            fontSize: "16px",
            color: "red",
            letterSpacing: "2px",
            fontFamily: "Handjet-Medium",
          }}
        >
          {error}
        </Text>
      )}
    </TextWrapper>
  );
}
