import type {ColorNumber, GameColor, GameRow} from '../types/app_types';

/**
 * Check if the current guess is correct
 *
 * @param colorNumber {ColorNumber} - The number of colors to use in the guess
 * @param answer {GameRow<ColorNumber>} - The correct answer row
 */
export const checkAnswer = <N extends ColorNumber>(currentGuessRow: GameColor[], answer: GameRow<N>): boolean => {
  // convert answer to check for correctness
  const realAnswer = answer as GameColor[];

  // for each color check if correctly placed
  const guessResult = currentGuessRow.map((color, index) => {
    if (color === realAnswer[index]) {
      return 'CORRECT';
    }
    return 'INCORRECT';
  });

  // if all colors are correct
  if (guessResult.every((result) => result === 'CORRECT')) {
    return true;
  }

  return false;
};
