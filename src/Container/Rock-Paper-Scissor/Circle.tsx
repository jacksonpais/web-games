interface ICircleProps {
  handleClick: any;
  value: string;
  selected: boolean;
}

const Circle = (props: ICircleProps) => {
  let activeClass = props.selected !== false ? "bg-yellow-500" : "";
  return (
    <div
      className={`w-48 h-48 m-2 border-4 border-yellow-500 ${activeClass} text-white rounded-full`}
      onClick={props.handleClick}
    >
      <div className="h-48 flex items-center justify-center">
        <div>
          <img
            className="object-cover w-44 h-44 rounded-full mb-2"
            src={`/images/rock-paper-scissor/${props.value}.png`}
          />
        </div>
      </div>
    </div>
  );
};
export default Circle;
