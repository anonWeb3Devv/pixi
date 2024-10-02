type GroundProps = {
  scenarioPosition: number;
};

export function Ground({ scenarioPosition }: GroundProps) {
  return (
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
  );
}
