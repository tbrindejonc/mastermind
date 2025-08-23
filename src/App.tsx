import CurrentColorProvider from './providers/CurrentColorProvider';
import CurrentGuessesQuantityProvider from './providers/CurrentGuessesQuantityProvider';
import GameConfProvider from './providers/GameConfProvider';
import GameStateProvider from './providers/GameStateProvider';
import ViewSwapper from './views/ViewSwapper';

function App() {
  return (
    <main className='font-main'>
      <GameStateProvider>
        <GameConfProvider>
          <CurrentColorProvider>
            <CurrentGuessesQuantityProvider>
              <ViewSwapper />
            </CurrentGuessesQuantityProvider>
          </CurrentColorProvider>
        </GameConfProvider>
      </GameStateProvider>
    </main>
  );
}

export default App;
