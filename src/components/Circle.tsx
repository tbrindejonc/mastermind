import {
  answerStatusToBackground,
  gameColorToBackground,
  type AnswerStatus,
  type CircleSize,
  type GameColor,
} from '../types/app_types';

type Props = {
  color: GameColor | AnswerStatus;
  absolutePosition?: boolean;
  position?: string;
  size: CircleSize;
};

export default function Circle({color, absolutePosition, position, size}: Props) {
  /**
   * Check if the color is a game color or an answer status
   *
   * @param color <GameColor | AnswerStatus> - The color to check
   */
  const isGameColor = (color: GameColor | AnswerStatus): color is GameColor => {
    return color in gameColorToBackground;
  };

  return (
    <div
      className={`${isGameColor(color) ? gameColorToBackground[color] : answerStatusToBackground[color]} shadow-app-darker ${size === 'SMALL' ? 'size-[2vw]' : 'size-[4vw]'} rounded-full shadow-xl/60 ${absolutePosition ? `absolute ${position}` : ''}`}
    ></div>
  );
}
