import {gameColorToBackground, type CircleSize, type GameColor} from '../types/app_types';

type Props = {
  color: GameColor;
  absolutePosition?: boolean;
  position?: string;
  size: CircleSize;
};

export default function Circle({color, absolutePosition, position, size}: Props) {
  return (
    <div
      className={`${gameColorToBackground[color]} shadow-app-darker ${size === 'SMALL' ? 'size-[2vw]' : 'size-[4vw]'} rounded-full shadow-xl/60 ${absolutePosition ? `absolute ${position}` : ''}`}
    ></div>
  );
}
