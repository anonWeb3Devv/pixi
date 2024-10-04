import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "../../../convex/_generated/api";

type Data = {
  score: number;
  isGameOver: boolean;
  name: string;
};

export function useData({ isGameOver, score, name }: Data) {
  const save = useMutation(api.scores.add);
  useEffect(() => {
    if (!isGameOver) return;

    save({ score, name });
  }, [isGameOver, name, save, score]);
}
