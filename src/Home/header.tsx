interface HeaderProps {
  title: string;
}
const Header = (props: HeaderProps) => {
  return (
    <div className="w-full border border-white text-white p-3 flex items-center justify-between">
      <a
        href="/"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
      >
        Back
      </a>
      <h1 className="text-xl text-center flex-1">{props.title}</h1>
      <div className="w-24"></div>
    </div>
  );
};
export default Header;
