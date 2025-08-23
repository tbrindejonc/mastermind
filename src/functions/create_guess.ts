import type {
  AnswerIndicator,
  AnswerRow,
  AnswerStatus,
  ColorNumber,
  GameColor,
  GameRow,
  Guess,
} from '../types/app_types';
import {listAnswerColors} from './list_answer_colors';

/**
 * Create a guess with a defined number of colors
 *
 * @param colorNumber {ColorNumber} - The number of colors to use in the guess
 * @param answer {GameRow<ColorNumber>} - The correct answer row
 * @param answerIndicator {AnswerIndicator} - The type of answer indicator for the guess
 */
export const createGuess = <N extends ColorNumber>(
  currentGuessRow: GameColor[],
  answer: GameRow<N>,
  answerIndicator: AnswerIndicator,
): Guess<N> => {
  // convert answer to check for correctness
  const realAnswer = answer as GameColor[];

  // List the colors in the answer
  const answerColorCount = listAnswerColors(realAnswer);

  // answers statuses initially all incorrect
  const result: AnswerStatus[] = Array(currentGuessRow.length).fill('INCORRECT');

  // check all correctly positionned colors
  currentGuessRow.forEach((color: GameColor, index: number) => {
    if (color === realAnswer[index]) {
      result[index] = 'CORRECT';
      answerColorCount[color] -= 1;
    }
  });

  // check partially correct colors if the rule is to check for it
  if (answerIndicator === 'FULL') {
    currentGuessRow.forEach((color: GameColor, index: number) => {
      if (result[index] === 'INCORRECT' && answerColorCount[color] > 0) {
        result[index] = 'PARTIAL';
        answerColorCount[color] -= 1;
      }
    });
  }

  // return the guess
  return {
    guess: currentGuessRow as GameRow<N>,
    answer: result as AnswerRow<N>,
  };
};
