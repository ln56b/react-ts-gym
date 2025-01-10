type ButtonProps = {
  text: string;
  formulate: () => void;
};
export default function Button({ text, formulate }: ButtonProps) {
  return (
    <button
      onClick={formulate}
      className="px-8 py-4 border-[2px] mx-auto rounded-md bg-slate-950 border-blue-400 border-solid blue-shadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
