import {useState} from 'react';
import {useGameConfig} from '../providers/GameConfProvider';
import {useGameState} from '../providers/GameStateProvider';
import type {ColorNumber, Game, GameRow, Guess} from '../types/app_types';
import {initGame} from '../functions/init_game';
import Row from '../components/Row';
import GuessRow from '../components/GuessRow';
import CurrentGuessRowProvider from '../providers/CurrentGuessRowProvider';
import GameInterface from '../components/GameInterface';
import Button from '../components/Button';

export default function Game() {
  const {swapState, gameState} = useGameState();
  const {gameConfig} = useGameConfig();

  // get the number of colors to guess in the game
  const colorNumber = gameConfig.colorNumber;

  // create array of circles to hide the answer
  const answerCache: GameRow<ColorNumber> = Array(colorNumber).fill('INCORRECT') as GameRow<ColorNumber>;

  // initialize blank game
  const [game, setGame] = useState<Game<ColorNumber>>(() => initGame(colorNumber));

  // go to home page
  const goBack = () => {
    swapState('HOME');
  };

  // go to config page
  const playAgain = () => {
    swapState('CONFIG');
  };

  return (
    <section className='bg-app-bg flex h-screen w-full flex-col items-center justify-center space-y-[2vh] overflow-hidden'>
      <h1
        onClick={goBack}
        className='text-app-cta text-shadow-app-main text-7xl font-bold text-shadow-md hover:cursor-pointer'
      >
        MASTERMIND
      </h1>
      <h1 className={`text-app-text text-2xl font-bold ${gameState === 'END' ? 'block' : 'hidden'}`}>Félicitation !</h1>
      <h1 className={`text-app-text text-2xl font-bold ${gameState === 'LOST' ? 'block' : 'hidden'}`}>Perdu !</h1>
      <div
        className={`absolute top-9 right-[15vw] ${gameState === 'END' || gameState === 'LOST' ? 'block' : 'hidden'}`}
      >
        <Button text='Rejouer' onClick={playAgain} />
      </div>
      <div className='flex w-full flex-row items-center space-x-6 px-[5vw]'>
        <CurrentGuessRowProvider circleNumber={colorNumber}>
          <GameInterface
            answerIndicator={gameConfig.answerIndicator}
            setGame={setGame}
            answer={game.toGuess}
            maxAttempts={gameConfig.maxAttempts}
            gameState={gameState}
          />
          <div className='flex h-full w-4/5 flex-col space-y-6 ps-[10vw]'>
            <div className='text-app-text space-y-[5vh] text-xl'>
              <div className='flex flex-row items-center space-x-[10vw]'>
                <Row row={gameState === 'END' || gameState === 'LOST' ? game.toGuess : answerCache} size='LARGE' />
                <h3>Couleurs à deviner</h3>
              </div>
              <div className='flex flex-row items-center space-x-[10vw]'>
                <GuessRow />
                <h3>Ma proposition</h3>
              </div>
            </div>
            <div className='h-[55vh] space-y-6 overflow-auto pt-6'>
              {game.ancientGuesses
                .slice()
                .reverse()
                .map((guess: Guess<ColorNumber>, index: number) => (
                  <div className='flex flex-row items-center space-x-[5vw]' key={index}>
                    <Row row={guess.guess} size='LARGE' />
                    <Row row={guess.answer} size='SMALL' />
                  </div>
                ))}
            </div>
          </div>
        </CurrentGuessRowProvider>
      </div>
    </section>
  );
}
