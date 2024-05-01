
export default function Banner() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/DpD7Kwk/banner.jpg"
        alt=""
      />
      <div className="absolute text-3xl flex flex-col items-center justify-center mb-24"> 
        <div className="text-center text-white">
          <p className="text-6xl font-bold mb-2">Tasty Tales</p>
          <p> Recipes from Around the World</p>
        </div>
        <div className="flex mt-5">
          <div className="relative flex-grow">
            <input
              type="text"
              className="block w-full rounded-l-full bg-gray-100 px-4 py-2 focus:outline-none text-sm"
              placeholder="Search recipe"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full text-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
