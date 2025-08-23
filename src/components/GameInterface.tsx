import type {Dispatch, SetStateAction} from 'react';
import {useCurrentGuessRow} from '../providers/CurrentGuessRowProvider';
import type {AnswerIndicator, ColorNumber, Game, GameRow} from '../types/app_types';
import Button from './Button';
import ColorSelector from './ColorSelector';
import Help from './Help';
import {createGuess} from '../functions/create_guess';
import {useGameState} from '../providers/GameStateProvider';
import {checkAnswer} from '../functions/check_answer';

type Props = {
  answerIndicator: AnswerIndicator;
  setGame: Dispatch<SetStateAction<Game<ColorNumber>>>;
  answer: GameRow<ColorNumber>;
};

/**
 * Display game interface components
 *
 * @param answerIndicator {AnswerIndicator} - the type of answer indicator for the help
 */
export default function GameInterface({answerIndicator, setGame, answer}: Props) {
  const {currentGuessRow, resetIndex, checkCanGuess, resetCurrentGuess} = useCurrentGuessRow();
  const {swapState} = useGameState();

  /**
   * Handle the guess submission
   */
  const handleGuess = () => {
    // if the answer row isnt fully filled
    if (!checkCanGuess()) return;

    // If the guess is correct, swap the game state
    if (checkAnswer(currentGuessRow, answer)) {
      swapState('END');
      return;
    }

    // register the guessed row
    setGame((prevGame: Game<ColorNumber>) => ({
      ...prevGame,
      ancientGuesses: [...prevGame.ancientGuesses, createGuess<ColorNumber>(currentGuessRow, answer)],
    }));

    // reset the current guess
    resetCurrentGuess();
    // reset the current circle index
    resetIndex();
  };

  return (
    <div className='flex flex-col items-center space-y-6'>
      <ColorSelector />
      <Button onClick={handleGuess} text='Valider' />
      <Help answerIndicator={answerIndicator} />
    </div>
  );
}
