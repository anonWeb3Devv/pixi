import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

const PLAYER_HEIGHT = 60;
const PLAYER_WIDTH = 40;
const PLAYER_X = 140;
const PLAYER_RIGHT_BORDER = PLAYER_X + PLAYER_WIDTH;

const GAME_SPEED = 3.5;
const JUMP_LIMIT = 120;
const JUMP_SPEED = 10;
const OBSTACLE_SPAWN_RATE = 2000;
const OBSTACLE_WIDTH = 16;
const GROUND_LEVEL = 3;
const FALL_SPEED = 6;

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
  const obstacleIntervalRef = useRef<number | null>(null);

  const [scenarioPosition, setScenarioPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [playerPositionY, setPlayerPositionY] = useState(3);
  const [isFalling, setIsFalling] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(GAME_SPEED);

  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  const resetGame = useCallback(() => {
    setScenarioPosition(0);
    setIsJumping(false);
    setPlayerPositionY(3);
    setIsFalling(false);
    setIsRunning(false);
    setIsGameOver(false);
    setObstacles([]);
    setGameSpeed(GAME_SPEED);
    setScore(0);
  }, []);

  const generateObstacle = useCallback(() => {
    if (obstacles.length > 5) return;

    const id = Date.now(); // Use Date.now() for unique IDs
    const position = window.innerWidth + Math.floor(Math.random() * 1000);

    const obstacle = getRandomObstacle();
    setObstacles((prev) => [...prev, { id, position, ...obstacle }]);
  }, [obstacles.length]);

  const handleKeyDown = useCallback(() => {
    if (isGameOver) {
      resetGame();
      return;
    }

    if (!isRunning) {
      setIsRunning(true);
      return;
    }

    if (!isJumping) {
      setIsJumping(true);
      // setIsKeyDown(true);
    }
  }, [isGameOver, isJumping, isRunning, resetGame]);

  // const handleKeyUp = useCallback(() => {
  //   setIsKeyDown(false);
  // }, []);

  const gameLoop = useCallback(() => {
    setScenarioPosition((prev) => prev + gameSpeed);
    setScore((prev) => prev + 1);
    setGameSpeed((prev) => prev + 0.001);

    setObstacles((prev) =>
      prev
        .map((obstacle) => ({
          ...obstacle,
          position: obstacle.position - gameSpeed,
        }))
        .filter((obstacle) => obstacle.position > -OBSTACLE_WIDTH)
    );

    if (isJumping && !isFalling) {
      if (playerPositionY < JUMP_LIMIT) {
        setPlayerPositionY((prev) => prev + JUMP_SPEED);
      } else {
        setIsFalling(true);
      }
    } else if (isFalling) {
      if (playerPositionY > GROUND_LEVEL) {
        setPlayerPositionY((prev) => Math.max(GROUND_LEVEL, prev - FALL_SPEED));
      } else {
        setIsFalling(false);
        setIsJumping(false);
      }
    }

    obstacles.forEach((obstacle) => {
      if (
        obstacle.position < PLAYER_RIGHT_BORDER &&
        obstacle.position > PLAYER_X - OBSTACLE_WIDTH &&
        playerPositionY < obstacle.height
      ) {
        clearInterval(intervalRef.current!);
        clearInterval(obstacleIntervalRef.current!);
        setIsGameOver(true);
        setIsRunning(false);
      }
    });
  }, [gameSpeed, isFalling, isJumping, obstacles, playerPositionY]);

  useEffect(() => {
    // window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("keyup", handleKeyUp);

    if (isRunning) {
      intervalRef.current = window.setInterval(gameLoop, 20);
    }

    return () => {
      // window.removeEventListener("keydown", handleKeyDown);
      // window.removeEventListener("keyup", handleKeyUp);
      clearInterval(intervalRef.current!);
    };
  }, [gameLoop, handleKeyDown, isRunning]);

  useEffect(() => {
    if (isRunning) {
      obstacleIntervalRef.current = window.setInterval(
        generateObstacle,
        OBSTACLE_SPAWN_RATE
      );
    }

    return () => clearInterval(obstacleIntervalRef.current!);
  }, [generateObstacle, isRunning]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={handleKeyDown}
    >
      <Heading>PIXI RUNNER</Heading>
      <div style={{ position: "relative", height: "400px" }}>
        {!isRunning && !isGameOver && (
          <>
            <Backdrop />
            <Text style={{ display: "flex", flexDirection: "column" }}>
              <span>"click" or "tap" to start</span>
              <span>Click / tap = jump</span>
            </Text>
          </>
        )}
        {isGameOver && (
          <>
            <Backdrop />

            <Text style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "30px" }}>Game Over</span>
              <span>"click" or "tap" to restart</span>
            </Text>
          </>
        )}

        <Points>Score: {score}</Points>

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
    </div>
  );
}

const Heading = styled.h2`
  font-family: "Handjet-regular";
  align-self: center;
  font-size: 50px;

  @media ${mobileFirst.sm} {
    font-size: 80px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
`;

const Text = styled.p`
  font-family: "Handjet-Regular";
  font-size: 20px;
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
`;

const Points = styled.p`
  font-family: "Handjet-Regular";
  font-size: 20px;
  color: black;
  text-align: center;
  position: absolute;
  top: 20px;
  right: 30px;

  /* z-index: 101; */
`;
