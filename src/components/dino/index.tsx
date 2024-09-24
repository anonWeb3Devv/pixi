import { useCallback, useEffect, useState } from "react";
const GAME_SPEED = 3.5;
const JUMP_LIMIT = 120;
const JUMP_SPEED = 10;
const JUMP_KEYS = ["Space", "ArrowUp"];
const OBSTACLE_SPAWN_RATE = 2000;

const OBSTACLE_HEIGHT = 20;

type Obstacle = {
  id: number;
  position: number;
};

export function Dino() {
  const [scenarioPosition, setScenarioPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [playerPositionY, setPlayerPositionY] = useState(3);
  const [isFalling, setIsFalling] = useState(false);
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  const generateObstacle = useCallback(() => {
    if (obstacles.length > 5) return;

    const id = Math.random();
    const position = window.innerWidth + Math.floor(Math.random() * 1000);
    setObstacles((prev) => [...prev, { id, position }]);
  }, [obstacles.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isRunning && !isGameOver) {
        setIsRunning(true);
        return;
      }

      if (!JUMP_KEYS.includes(e.code) || isJumping || isKeyDown) return;
      setIsJumping(true);
      setIsKeyDown(true);
    },
    [isGameOver, isJumping, isKeyDown, isRunning]
  );

  const handleKeyUp = useCallback(() => {
    setIsKeyDown(false);
  }, []);

  const gameLoop = useCallback(() => {
    setScenarioPosition((prev) => prev + GAME_SPEED);

    setObstacles((prev) =>
      prev
        .map((obstacle) => ({
          ...obstacle,
          position: obstacle.position - GAME_SPEED,
        }))
        .filter((obstacle) => obstacle.position > -20)
    );

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
        setPlayerPositionY((prev) => (prev >= 3 ? prev - 8 : 3));
      } else {
        setIsFalling(false);
      }
    }
  }, [isFalling, isJumping, playerPositionY]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    if (!isRunning) return;

    const interval = setInterval(gameLoop, 20);

    if (isGameOver) {
      clearInterval(interval);
      return;
    }

    obstacles.forEach((obstacle) => {
      if (
        obstacle.position < 45 &&
        obstacle.position > 20 &&
        playerPositionY < OBSTACLE_HEIGHT + 10
      ) {
        clearInterval(interval);
        setIsGameOver(true);
      }
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    gameLoop,
    handleKeyDown,
    handleKeyUp,
    isGameOver,
    isRunning,
    obstacles,
    playerPositionY,
  ]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(generateObstacle, OBSTACLE_SPAWN_RATE);

    if (!isRunning || isGameOver) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [generateObstacle, isGameOver, isRunning]);

  return (
    <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
      {!isRunning && !isGameOver && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Press "Space" or "ArrowUp" to start
        </div>
      )}
      {isGameOver && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Game Over
        </div>
      )}

      {/* Player */}
      <div
        style={{
          position: "absolute",
          width: "45px",
          height: "45px",
          zIndex: 1,
          left: 10,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          bottom: playerPositionY,
          backgroundImage: "url(./images/dino/dino-stationary.png)",
        }}
      />

      {/* Ground */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundImage: "url(./images/dino/ground.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "repeat-x",
          height: "15px",
          backgroundPosition: `left ${-scenarioPosition}px bottom 0px`,
        }}
      />

      {obstacles.map((obstacle) => (
        <div
          key={obstacle.id}
          style={{
            position: "absolute",
            width: "20px",
            height: `${OBSTACLE_HEIGHT}px`,
            backgroundColor: "red",
            left: obstacle.position,
            bottom: 5,
          }}
        />
      ))}
    </div>
  );
}
