import Button from '../components/Button';

export default function Home() {
  return (
    <section className='bg-app-bg flex h-screen w-full flex-col items-center justify-center space-y-10'>
      <h1 className='text-app-cta text-shadow-app-main text-7xl font-bold text-shadow-md'>MASTERMIND</h1>
      <Button text='Jouer' />
    </section>
  );
}
