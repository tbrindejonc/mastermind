import type {ColorNumber, GameColor, Row} from '../types/app_types';

/**
 * Randomly selects colors for the answer
 *
 * @param colorNumber {ColorNumber} - The number of colors to select
 */
export const chooseAnswer = (colorNumber: ColorNumber): Row<ColorNumber> => {
  // possible colors to pick
  const GAME_COLORS: GameColor[] = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'PINK', 'BROWN'];

  // chosen colors for the answer
  const answer: GameColor[] = [];

  // randomly select colors for the answer
  for (let i = 0; i < colorNumber; i++) {
    const index = Math.floor(Math.random() * GAME_COLORS.length);
    answer.push(GAME_COLORS[index]);
  }

  // return the selected answer
  return answer as Row<ColorNumber>;
};
