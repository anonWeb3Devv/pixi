declare module "use-sound" {
  export default function useSound(
    sound: string,
    { volume: number, duration: number }?
  ): [() => void, { sound: HTMLAudioElement }];
}
