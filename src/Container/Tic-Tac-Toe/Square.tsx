interface SquareProps {
  handleClick: any;
  value: string;
}

const Square = (props: SquareProps) => {
  let turnObj = null;
  if (props.value !== null) {
    turnObj =
      props.value === "X" ? (
        <svg
          className="h-16 w-16 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        <svg
          className="h-16 w-16 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
  return (
    <div
      className="w-32 h-32 m-2 border-2 border-yellow-500 text-white"
      onClick={props.handleClick}
    >
      <div className="h-32 flex items-center justify-center">
        <div>{turnObj}</div>
      </div>
    </div>
  );
};
export default Square;