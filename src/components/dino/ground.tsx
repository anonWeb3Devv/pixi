type GroundProps = {
  position: number;
};

export function Ground(props: GroundProps) {
  const { position } = props;

  return (
    <div
      className=""
      style={{
        ...styles.ground,
        backgroundPosition: `left ${-position}px bottom 0px`,
      }}
    />
  );
}

const styles: Record<string, React.CSSProperties> = {
  ground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: "url(./images/dino/ground.png)",
    backgroundSize: "100% 100%",
    backgroundRepeat: "repeat-x",
    height: "15px",
    backgroundPosition: "left 0px bottom 0px",
  },
};
