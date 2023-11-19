function ClickabeImage({
  setState,
  state,
}: {
  setState: (arg: number) => void;
  state: number;
}) {
  return (
    <img
      onClick={() => {
        setState(state + 1);
      }}
      src="https://reactjs.org/logo-og.png"
      alt="React"
      className="origin-center translate-x-1/2 transition-all border-[5px] border-violet-600 hover:rounded-ss-[50%] hover:rounded-ee-[50%] bg-red-300 w-1/2"
      style={{
        margin: `${state}px 0`,
      }}
    />
  );
}

export default ClickabeImage;
