import { useCallback, useEffect, useState } from "react";
import { Ground } from "./ground";
import { Player } from "./player";

const GAME_SPEED = 3;
const JUMP_LIMIT = 120;
const JUMP_SPEED = 10;
const JUMP_KEYS = ["Space", "ArrowUp"];

export function Dino() {
  const [scenarioPosition, setScenarioPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [playerPositionY, setPlayerPositionY] = useState(3);
  const [isFalling, setIsFalling] = useState(false);
  const [isKeyDown, setIsKeyDown] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!JUMP_KEYS.includes(e.code) || isJumping || isKeyDown) return;
      setIsJumping(true);
      setIsKeyDown(true);
    },
    [isJumping, isKeyDown]
  );

  const handleKeyUp = useCallback(() => {
    setIsKeyDown(false);
  }, []);

  const gameLoop = useCallback(() => {
    setScenarioPosition((prev) => prev + GAME_SPEED);

    if (!isFalling && isJumping) {
      if (playerPositionY < JUMP_LIMIT) {
        setPlayerPositionY((prev) => prev + JUMP_SPEED);
      } else {
        setIsFalling(true);
      }
    } else {
      if (playerPositionY > 3) {
        setIsFalling(true);
        setIsJumping(false);
        setPlayerPositionY((prev) => (prev >= 3 ? prev - JUMP_SPEED : 3));
      } else {
        setIsFalling(false);
      }
    }
  }, [isFalling, isJumping, playerPositionY]);

  useEffect(() => {
    const interval = setInterval(gameLoop, 20);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameLoop, handleKeyDown, handleKeyUp]);

  return (
    <div style={{ position: "relative", height: "400px" }}>
      <Player positionY={playerPositionY} />;
      <Ground position={scenarioPosition} />
    </div>
  );
}
