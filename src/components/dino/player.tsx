type PlayerProps = {
  positionY: number;
};

export function Player(props: PlayerProps) {
  const { positionY } = props;

  return (
    <div
      className={""}
      style={{
        ...styles.player,
        bottom: positionY,
        backgroundImage: "url(./images/dino/dino-stationary.png)",
      }}
    ></div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  player: {
    position: "absolute",
    width: "45px",
    height: "45px",
    zIndex: 1,
    left: 10,
    bottom: 3,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    // transition: "left 400ms ease-out, bottom 100ms ease-out",
  },
};
