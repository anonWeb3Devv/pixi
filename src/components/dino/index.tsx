import { useCallback, useEffect, useRef, useState } from "react";

import { Player } from "./Player";
import { Ground } from "./ground";
import { Obstacle } from "./obstacle";
import { Backdrop, Heading, Points } from "./styles";
import { StartScreen } from "./start";
import { GameOverScreen } from "./game-over";
import { useData } from "./use-data";
import { useObstacle } from "./use-obstacle";
import { LeaderBoard } from "./leaderboard";
import styled from "styled-components";

const PLAYER_HEIGHT = 60;
const PLAYER_WIDTH = 40;
const PLAYER_X = 140;
const PLAYER_RIGHT_BORDER = PLAYER_X + PLAYER_WIDTH;

const GAME_SPEED = 3.5;
const JUMP_LIMIT = 120;
const JUMP_SPEED = 10;
// const OBSTACLE_SPAWN_RATE = 2000;
const OBSTACLE_WIDTH = 16;
const GROUND_LEVEL = 3;
const FALL_SPEED = 6;

export function Dino() {
  const intervalRef = useRef<number | null>(null);

  const [scenarioPosition, setScenarioPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [playerPositionY, setPlayerPositionY] = useState(3);
  const [isFalling, setIsFalling] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(GAME_SPEED);

  const { obstacles, setObstacles } = useObstacle({
    isRunning,
    score,
  });

  useData({ isGameOver, score });

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
  }, [setObstacles]);

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
    }
  }, [isGameOver, isJumping, isRunning, resetGame]);

  const gameLoop = useCallback(() => {
    setScenarioPosition((prev) => prev + gameSpeed);
    setScore((prev) => prev + 1);
    setGameSpeed((prev) => prev + 0.005);

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
        setIsGameOver(true);
        setIsRunning(false);
      }
    });
  }, [
    gameSpeed,
    isFalling,
    isJumping,
    obstacles,
    playerPositionY,
    setObstacles,
  ]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(gameLoop, 20);
    }

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [gameLoop, handleKeyDown, isRunning]);

  return (
    <PixiRunnerWrapper onClick={handleKeyDown}>
      <Heading>PIXI RUNNER</Heading>

      <div
        style={{
          position: "relative",
          height: "400px",
          borderRadius: "10px",
          overflow: "hidden",
          marginBlock: "50px",
        }}
      >
        {!isRunning && <Backdrop />}

        {!isRunning && !isGameOver && <StartScreen />}

        {isGameOver && <GameOverScreen score={score} />}

        <Points>Score: {score}</Points>

        {/* Player */}
        <Player
          isMoving={isRunning}
          isJumping={isJumping || isFalling}
          isGameOver={isGameOver}
          width={PLAYER_WIDTH}
          height={PLAYER_HEIGHT}
          positionY={playerPositionY}
          positionX={PLAYER_X}
        />

        {/* Ground */}
        <Ground scenarioPosition={scenarioPosition} />

        {/* Obstacles */}
        {obstacles.map((obstacle) => (
          <Obstacle
            key={obstacle.id}
            position={obstacle.position}
            img={obstacle.img}
          />
        ))}
      </div>

      <LeaderBoard />
    </PixiRunnerWrapper>
  );
}

const PixiRunnerWrapper = styled.div`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* padding-inline: 50px; */
  margin-inline: auto;
  max-width: 1220px;
  width: 80%;
`;
