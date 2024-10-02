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

type PlayerProps = {
  isMoving: boolean;
  isJumping: boolean;
  isGameOver: boolean;
  width: number;
  height: number;
  positionY: number;
  positionX: number;
};

export function Player(props: PlayerProps) {
  const {
    isMoving,
    isJumping,
    isGameOver,
    width,
    height,
    positionY,
    positionX,
  } = props;

  return (
    <div
      style={{
        position: "absolute",
        width: width,
        height: height,
        zIndex: 1,
        left: positionX,
        backgroundRepeat: "no-repeat",
        backgroundSize: "160% 100%",
        backgroundPositionX: "-10px",
        bottom: positionY,
        backgroundImage: `url(${getImage({
          isMoving: isMoving,
          isJumping: isJumping,
          isGameOver: isGameOver,
        })})`,
      }}
    />
  );
}
