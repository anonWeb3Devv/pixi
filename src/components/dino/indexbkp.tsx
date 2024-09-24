import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

interface Obstacle {
  id: number;
  x: number;
  width: number;
}

export function Dino() {
  const dinoYRef = useRef(0);
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [startScreen, setStartScreen] = useState(true);
  const [groundOffset, setGroundOffset] = useState(0);
  const obstaclesRef = useRef<Obstacle[]>([]);

  const jumpHeight = 150;
  const gravity = 5;
  const obstacleSpeed = 5;
  const obstacleSpawnRate = 1000;

  function generateObstacle(): Obstacle {
    return {
      id: Math.random(),
      x: 500 + Math.random() * 300,
      width: 20,
    };
  }

  function handleJump() {
    if (!isJumping && !gameOver) {
      setIsJumping(true);
      dinoYRef.current += jumpHeight;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver) {
        clearInterval(interval);
        return;
      }
      if (isJumping) {
        dinoYRef.current = Math.max(0, dinoYRef.current - gravity);
        if (dinoYRef.current <= 0) setIsJumping(false);
      }

      setGroundOffset((prev) => (prev <= -1000 ? 0 : prev - obstacleSpeed));

      // Move each obstacle left
      obstaclesRef.current = obstaclesRef.current
        .map((obstacle) => ({
          ...obstacle,
          x: obstacle.x - obstacleSpeed,
        }))
        .filter((obstacle) => obstacle.x > -obstacle.width);

      setScore(score + 1);

      obstaclesRef.current.forEach((obstacle) => {
        if (obstacle.x < 62 && obstacle.x > 30 && dinoYRef.current < 45) {
          setGameOver(true);
          clearInterval(interval);
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [gameOver, isJumping, score]);

  // Spawn new obstacles at regular intervals
  useEffect(() => {
    const obstacleInterval = setInterval(() => {
      obstaclesRef.current = [...obstaclesRef.current, generateObstacle()];
    }, obstacleSpawnRate);

    return () => clearInterval(obstacleInterval);
  }, []);


  return (
    <div
      className={styles.world}
      tabIndex={0}
      onKeyDown={handleJump}
      onTouchStart={handleJump}
    >
      <div className={styles.score}>{score}</div>
      <div className={`${styles["start-screen"]} ${styles.hide}`}>
        Press any key to start
      </div>

      <img
        src="images/dino/ground.png"
        className={styles.ground}
        style={{ left: groundOffset + "px" }}
      />
      <img
        src="images/dino/ground.png"
        className={styles.ground}
        style={{ left: groundOffset + 1000 + "px" }}
      />
      <img
        src="images/dino/dino-stationary.png"
        className={styles.dino}
        style={{
          bottom: dinoYRef.current + "px",
        }}
      />

      {obstaclesRef.current.map((obstacle) => (
        <img
          key={obstacle.id}
          src="images/dino/cactus.png"
          className={styles.cactus}
          style={{ left: obstacle.x + "px" }}
        />
      ))}
    </div>
  );
}
