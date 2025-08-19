type Props = {
  text: string;
};

export default function Button({text}: Props) {
  return (
    <button className='bg-app-cta text-app-darker shadow-app-darker/50 hover:shadow-app-main/40 w-[15vw] rounded py-1 text-2xl font-bold shadow-xl transition duration-500 ease-in-out hover:cursor-pointer'>
      {text}
    </button>
  );
}
