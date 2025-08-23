import type {Dispatch, SetStateAction} from 'react';
import {useCurrentGuessRow} from '../providers/CurrentGuessRowProvider';
import type {AnswerIndicator, ColorNumber, Game, GameRow, GameState, MaxAttempts} from '../types/app_types';
import Button from './Button';
import ColorSelector from './ColorSelector';
import Help from './Help';
import {createGuess} from '../functions/create_guess';
import {useGameState} from '../providers/GameStateProvider';
import {checkAnswer} from '../functions/check_answer';
import {useCurrentGuessesQuantity} from '../providers/CurrentGuessesQuantityProvider';

type Props = {
  answerIndicator: AnswerIndicator;
  setGame: Dispatch<SetStateAction<Game<ColorNumber>>>;
  answer: GameRow<ColorNumber>;
  maxAttempts: MaxAttempts;
  gameState: GameState;
};

/**
 * Display game interface components
 *
 * @param answerIndicator {AnswerIndicator} - the type of answer indicator for the help
 */
export default function GameInterface({answerIndicator, setGame, answer, maxAttempts, gameState}: Props) {
  const {currentGuessRow, resetIndex, checkCanGuess, resetCurrentGuess} = useCurrentGuessRow();
  const {swapState} = useGameState();
  const {currentGuessesQuantity, incrementGuesses, resetGuesses} = useCurrentGuessesQuantity();

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
      ancientGuesses: [...prevGame.ancientGuesses, createGuess<ColorNumber>(currentGuessRow, answer, answerIndicator)],
    }));

    // increase guesses quantity both locally and in context
    const newGuessesQuantity: number = currentGuessesQuantity + 1;
    incrementGuesses();

    // end the game if the number of guesses reaches 10 and the configuration specified max 10 tries
    if (newGuessesQuantity >= 10 && maxAttempts === 'TEN') {
      swapState('LOST');
      resetGuesses();
      return;
    }

    // reset the current guess
    resetCurrentGuess();
    // reset the current circle index
    resetIndex();
  };

  return (
    <div className='flex flex-col items-center space-y-6'>
      <ColorSelector />
      <div className={`${gameState === 'LOST' ? 'hidden' : 'block'}`}>
        <Button onClick={handleGuess} text='Valider' />
      </div>
      <Help answerIndicator={answerIndicator} />
    </div>
  );
}
