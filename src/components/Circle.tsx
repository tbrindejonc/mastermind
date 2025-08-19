type Props = {
  color: string;
  absolutePosition?: boolean;
  position?: string;
};

export default function Circle({color, absolutePosition, position}: Props) {
  return (
    <div
      className={`${color} shadow-app-darker size-[4vw] rounded-full shadow-xl/60 ${absolutePosition ? `absolute ${position}` : ''}`}
    ></div>
  );
}
