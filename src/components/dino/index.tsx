import { useCallback, useEffect, useRef, useState } from "react";

const PLAYER_HEIGHT = 60;
const PLAYER_WIDTH = 40;
const PLAYER_X = 140;
const PLAYER_RIGHT_BORDER = PLAYER_X + PLAYER_WIDTH;

const GAME_SPEED = 3.5;
const JUMP_LIMIT = 120;
const JUMP_SPEED = 10;
const JUMP_KEYS = ["Space", "ArrowUp"];
const OBSTACLE_SPAWN_RATE = 2000;
const OBSTACLE_WIDTH = 16;

type Obstacle = {
  id: number;
  position: number;
  img: string;
  height: number;
};

const obstaclesImages = [
  "./images/dino/obstacle_1.png",
  "./images/dino/obstacle_2.png",
];

const obstaclesOptions = [
  {
    img: "./images/dino/obstacle_1.png",
    height: 19,
  },
  {
    img: "./images/dino/obstacle_2.png",
    height: 26,
  },
];

function getRandomObstacle() {
  return obstaclesOptions[Math.floor(Math.random() * obstaclesImages.length)];
}

function getImage({
  isMoving,
  isJumping,
  isGameOver,
}: {
  isMoving: boolean;
  isJumping: boolean;
  isGameOver: boolean;
}) {
  if (isGameOver) {
    return "./images/dino/over.png";
  }

  if (isJumping) {
    return "./images/dino/jump.png";
  }

  if (isMoving) {
    return "./images/dino/moving.gif";
  }

  return "./images/dino/stationary.png";
}

export function Dino() {
  const intervalRef = useRef<number | null>(null);

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

    const obstacle = getRandomObstacle();
    setObstacles((prev) => [...prev, { id, position, ...obstacle }]);
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

    obstacles.forEach((obstacle) => {
      if (
        obstacle.position < PLAYER_RIGHT_BORDER - 10 &&
        obstacle.position > PLAYER_X - OBSTACLE_WIDTH &&
        playerPositionY < obstacle.height + 10
      ) {
        clearInterval(intervalRef.current!);
        setIsGameOver(true);
        setIsRunning(false);
      }
    });

    if (isGameOver) {
      clearInterval(intervalRef.current!);
      return;
    }
  }, [isFalling, isGameOver, isJumping, obstacles, playerPositionY]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    if (!isRunning) return;

    const interval = setInterval(gameLoop, 20);
    intervalRef.current = interval;

    return () => {
      clearInterval(intervalRef.current!);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameLoop, handleKeyDown, handleKeyUp, isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(generateObstacle, OBSTACLE_SPAWN_RATE);

    if (isGameOver) {
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
          width: PLAYER_WIDTH,
          height: PLAYER_HEIGHT,
          zIndex: 1,
          left: PLAYER_X,
          backgroundRepeat: "no-repeat",
          backgroundSize: "160% 100%",
          backgroundPositionX: "-10px",
          bottom: playerPositionY,
          backgroundImage: `url(${getImage({
            isMoving: isRunning,
            isJumping: isJumping || isFalling,
            isGameOver: isGameOver,
          })})`,
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

      {/* Obstacles */}
      {obstacles.map((obstacle) => (
        <div
          key={obstacle.id}
          style={{
            position: "absolute",
            border: "1px solid red",
            left: obstacle.position,
            bottom: 5,
          }}
        >
          <img src={obstacle.img} alt="obstacle" />
        </div>
      ))}
    </div>
  );
}
