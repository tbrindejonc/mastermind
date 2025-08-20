import Button from '../components/Button';
import {useGameConfig} from '../providers/GameConfProvider';
import {useGameState} from '../providers/GameStateProvider';
import type {ColorNumber} from '../types/app_types';

/**
 * Game configuration view, before playing
 */
export default function Config() {
  const {swapState} = useGameState();
  const {gameConfig, chooseColorNumber, chooseAnswerIndicator, chooseMaxAttempts} = useGameConfig();

  // choices for the number of colors to guess
  const colorNumberChoices: ColorNumber[] = [4, 5, 6];

  // go to home page
  const goBack = () => {
    swapState('HOME');
  };

  // start the game with current game configuration
  const startGame = () => {
    swapState('PLAYING');
  };

  return (
    <section className='bg-app-bg flex h-screen w-full flex-col items-center justify-center space-y-[6vh]'>
      <h1
        onClick={goBack}
        className='text-app-cta text-shadow-app-main text-7xl font-bold text-shadow-md hover:cursor-pointer'
      >
        MASTERMIND
      </h1>
      <h2 className='text-app-text text-4xl font-bold'>Réglages</h2>
      <section className='text-app-text flex w-[15vw] flex-col items-center space-y-12'>
        <div className='relative flex w-[15vw] flex-row items-center justify-between'>
          <h3 className='absolute -left-[25vw] w-[20vw] text-right text-2xl'>Couleurs à deviner</h3>
          {colorNumberChoices.map((num: ColorNumber) => {
            const isActive = num === gameConfig.colorNumber;

            return (
              <button
                key={num}
                onClick={() => {
                  chooseColorNumber(num);
                }}
                className={`size-14 rounded-full text-xl font-bold shadow-lg hover:cursor-pointer ${isActive ? 'bg-game-red text-app-darker shadow-app-darker' : 'bg-app-darker text-app-text shadow-app-text/50'}`}
              >
                <h4>{num}</h4>
              </button>
            );
          })}
        </div>
        <div className='relative flex w-[15vw] flex-row items-center justify-between'>
          <h3 className='absolute -left-[25vw] w-[20vw] text-right text-2xl'>Indication des réponses</h3>
          <div className='flex w-full flex-col items-center space-y-4'>
            <button
              onClick={() => {
                chooseAnswerIndicator('FULL');
              }}
              className={`bg-app-darker w-full rounded-md p-3 shadow-md hover:cursor-pointer ${gameConfig.answerIndicator === 'FULL' ? 'text-app-darker bg-game-red shadow-app-darker' : 'text-app-text bg-app-darker shadow-app-text/50'}`}
            >
              Complètes (avec position)
            </button>
            <button
              onClick={() => {
                chooseAnswerIndicator('PARTIAL');
              }}
              className={`bg-app-darker w-full rounded-md p-3 shadow-md hover:cursor-pointer ${gameConfig.answerIndicator === 'PARTIAL' ? 'text-app-darker bg-game-red shadow-app-darker' : 'text-app-text bg-app-darker shadow-app-text/50'}`}
            >
              Partielles (sans position)
            </button>
          </div>
        </div>
        <div className='relative flex w-[15vw] flex-row items-center justify-between'>
          <h3 className='absolute -left-[25vw] w-[20vw] text-right text-2xl'>Nombre de tentatives</h3>
          <div className='flex w-full flex-col items-center space-y-4'>
            <button
              onClick={() => {
                chooseMaxAttempts('INFINITE');
              }}
              className={`bg-app-darker w-full rounded-md p-3 shadow-md hover:cursor-pointer ${gameConfig.maxAttempts === 'INFINITE' ? 'text-app-darker bg-game-red shadow-app-darker' : 'text-app-text bg-app-darker shadow-app-text/50'}`}
            >
              Infini
            </button>
            <button
              onClick={() => {
                chooseMaxAttempts('TEN');
              }}
              className={`bg-app-darker w-full rounded-md p-3 shadow-md hover:cursor-pointer ${gameConfig.maxAttempts === 'TEN' ? 'text-app-darker bg-game-red shadow-app-darker' : 'text-app-text bg-app-darker shadow-app-text/50'}`}
            >
              10 manches
            </button>
          </div>
        </div>
        <Button text='Lancer' onClick={startGame} />
      </section>
    </section>
  );
}
