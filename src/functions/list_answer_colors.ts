import type {GameColor, GameColorNumber} from '../types/app_types';

/**
 * List the quantity of each color in the answer
 *
 * @param answer {GameColor[]} - the answer to list from
 */
export const listAnswerColors = (answer: GameColor[]): GameColorNumber => {
  // Initialize color counts
  let colorNumbers: GameColorNumber = {
    RED: 0,
    ORANGE: 0,
    YELLOW: 0,
    GREEN: 0,
    BLUE: 0,
    PURPLE: 0,
    PINK: 0,
    BROWN: 0,
    WHITE: 0,
  };

  // Count each color in the answer
  answer.forEach((color: GameColor) => {
    if (color in colorNumbers) {
      colorNumbers[color] += 1;
    }
  });

  // Return the color counts
  return colorNumbers;
};
