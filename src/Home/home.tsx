const Home = () =>{
return (
     <div className="bg-gray-900">
      <div className="w-full h-screen">
        <div className="flex h-screen">
          <div className="m-auto flex flex-col gap-6">
            <a href="/tic-tac-toe" className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
              Tic Tac Toe
            </a>
          </div>
        </div>
      </div>
    </div>
)
}
export default Home;