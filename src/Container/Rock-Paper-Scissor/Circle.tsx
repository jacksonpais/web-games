const Circle = (props: any) => {
  return (
    <div
      className="w-48 h-48 m-2 border-4 border-yellow-500 text-white rounded-full"
      onClick={props.handleClick}
    >
      <div className="h-48 flex items-center justify-center">
        <div>{props.value}</div>
      </div>
    </div>
  );
};
export default Circle;
