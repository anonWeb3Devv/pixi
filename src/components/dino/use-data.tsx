import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "../../../convex/_generated/api";

type Data = {
  score: number;
  isGameOver: boolean;
};

export function useData({ isGameOver, score }: Data) {
  const save = useMutation(api.scores.add);
  useEffect(() => {
    if (!isGameOver) return;

    save({ score });
  }, [isGameOver, save, score]);
}
