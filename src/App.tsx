import GameStateProvider from './providers/GameStateProvider';
import Home from './views/Home';

function App() {
  return (
    <main className='font-main'>
      <GameStateProvider>
        <Home />
      </GameStateProvider>
    </main>
  );
}

export default App;
