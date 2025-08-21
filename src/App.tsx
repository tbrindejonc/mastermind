import CurrentColorProvider from './providers/CurrentColorProvider';
import GameConfProvider from './providers/GameConfProvider';
import GameStateProvider from './providers/GameStateProvider';
import ViewSwapper from './views/ViewSwapper';

function App() {
  return (
    <main className='font-main'>
      <GameStateProvider>
        <GameConfProvider>
          <CurrentColorProvider>
            <ViewSwapper />
          </CurrentColorProvider>
        </GameConfProvider>
      </GameStateProvider>
    </main>
  );
}

export default App;
