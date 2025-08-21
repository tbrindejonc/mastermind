import {gameColorToBackground, type GameColor} from '../types/app_types';

type Props = {
  color: GameColor;
  absolutePosition?: boolean;
  position?: string;
};

export default function Circle({color, absolutePosition, position}: Props) {
  return (
    <div
      className={`${gameColorToBackground[color]} shadow-app-darker size-[4vw] rounded-full shadow-xl/60 ${absolutePosition ? `absolute ${position}` : ''}`}
    ></div>
  );
}
