import {useState} from 'react';
import ColorSelector from '../components/ColorSelector';
import Help from '../components/Help';
import {useGameConfig} from '../providers/GameConfProvider';
import {useGameState} from '../providers/GameStateProvider';
import type {ColorNumber, Game} from '../types/app_types';
import {initGame} from '../functions/init_game';
import Button from '../components/Button';

export default function Game() {
  const {swapState} = useGameState();
  const {gameConfig} = useGameConfig();

  // get the number of colors to guess in the game
  const colorNumber = gameConfig.colorNumber;

  // initialize blank game
  const [_game, _setGame] = useState<Game<ColorNumber>>(() => initGame(colorNumber));

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
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
