export function Obstacle({ position, img }: { position: number; img: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left: position,
        bottom: 5,
      }}
    >
      <img src={img} alt="obstacle" />
    </div>
  );
}
