import {useState} from 'react';
import ColorSelector from '../components/ColorSelector';
import Help from '../components/Help';
import {useGameConfig} from '../providers/GameConfProvider';
import {useGameState} from '../providers/GameStateProvider';
import type {ColorNumber, Game, GameRow} from '../types/app_types';
import {initGame} from '../functions/init_game';
import Button from '../components/Button';
import Row from '../components/Row';
import GuessRow from '../components/GuessRow';
import CurrentGuessRowProvider from '../providers/CurrentGuessRowProvider';

export default function Game() {
  const {swapState} = useGameState();
  const {gameConfig} = useGameConfig();

  // get the number of colors to guess in the game
  const colorNumber = gameConfig.colorNumber;

  // create array of circles to hide the answer
  const answerCache: GameRow<ColorNumber> = Array(colorNumber).fill('INCORRECT') as GameRow<ColorNumber>;

  // initialize blank game
  const [, _setGame] = useState<Game<ColorNumber>>(() => initGame(colorNumber));

  // go to home page
  const goBack = () => {
    swapState('HOME');
  };

  return (
    <section className='bg-app-bg flex h-screen w-full flex-col items-center justify-center space-y-[6vh]'>
      <h1
        onClick={goBack}
        className='text-app-cta text-shadow-app-main text-7xl font-bold text-shadow-md hover:cursor-pointer'
      >
        MASTERMIND
      </h1>
      <div className='flex w-full flex-row items-center space-x-6 px-[5vw]'>
        <div className='flex flex-col items-center space-y-6'>
          <ColorSelector />
          <Button onClick={() => {}} text='Valider' />
          <Help answerIndicator={gameConfig.answerIndicator} />
        </div>
        <div className='flex h-full w-4/5 flex-col space-y-6 ps-[10vw]'>
          <div className='text-app-text space-y-[5vh] text-xl'>
            <div className='flex flex-row items-center space-x-[10vw]'>
              <Row row={answerCache} size='LARGE' />
              <h3>Couleurs à deviner</h3>
            </div>
            <div className='flex flex-row items-center space-x-[10vw]'>
              <CurrentGuessRowProvider circleNumber={colorNumber}>
                <GuessRow circleNumber={colorNumber} />
              </CurrentGuessRowProvider>
              <h3>Ma proposition</h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
