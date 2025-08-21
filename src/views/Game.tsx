import {useGameState} from '../providers/GameStateProvider';

export default function Game() {
  const {swapState} = useGameState();

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
    </section>
  );
}
