import type {Dispatch, SetStateAction} from 'react';
import {useCurrentGuessRow} from '../providers/CurrentGuessRowProvider';
import type {AnswerIndicator, ColorNumber, Game} from '../types/app_types';
import Button from './Button';
import ColorSelector from './ColorSelector';
import Help from './Help';
import {createGuess} from '../functions/create_guess';

type Props = {
  answerIndicator: AnswerIndicator;
  setGame: Dispatch<SetStateAction<Game<ColorNumber>>>;
};

/**
 * Display game interface components
 *
 * @param answerIndicator {AnswerIndicator} - the type of answer indicator for the help
 */
export default function GameInterface({answerIndicator, setGame}: Props) {
  const {currentGuessRow, checkCanGuess, resetCurrentGuess} = useCurrentGuessRow();

  /**
   * Handle the guess submission
   */
  const handleGuess = () => {
    // if the answer row isnt fully filled
    if (!checkCanGuess()) return;

    // register the guessed row
    setGame((prevGame: Game<ColorNumber>) => ({
      ...prevGame,
      ancientGuesses: [...prevGame.ancientGuesses, createGuess<ColorNumber>(currentGuessRow)],
    }));

    // reset the current guess
    resetCurrentGuess();
  };

  return (
    <div className='flex flex-col items-center space-y-6'>
      <ColorSelector />
      <Button onClick={handleGuess} text='Valider' />
      <Help answerIndicator={answerIndicator} />
    </div>
  );
}
