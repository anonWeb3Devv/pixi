import { useCallback, useEffect, useState } from "react";

function isMultipleOf500(number: number) {
  if (number === 0) return false;

  return number % 500 === 0 || number % 200 === 0 || number % 150 === 0;
}

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
  return obstaclesOptions[Math.floor(Math.random() * obstaclesOptions.length)];
}

type Obstacle = {
  id: number;
  position: number;
  img: string;
  height: number;
};

type ObstacleProps = {
  isRunning: boolean;
  score: number;
};

export function useObstacle({ isRunning, score }: ObstacleProps) {
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  const generateObstacle = useCallback(() => {
    if (obstacles.length > 5) return;

    const id = Date.now(); // Use Date.now() for unique IDs
    const position = window.innerWidth + Math.floor(Math.random() * 1000);

    const obstacle = getRandomObstacle();
    setObstacles((prev) => [...prev, { id, position, ...obstacle }]);
  }, [obstacles.length]);

  useEffect(() => {
    if (isRunning) {
      if (isMultipleOf500(score)) {
        generateObstacle();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, score]);
  return { obstacles, setObstacles };
}
