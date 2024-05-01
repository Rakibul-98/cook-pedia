import { FaArrowRight } from "react-icons/fa6";

export default function Catagories() {
    const cards = [
        { id: 1, img: "https://i.ibb.co/yBj4H2P/breakfast.jpg", title: "Breakfast" },
        { id: 2, img: "https://i.ibb.co/74BJk5j/lunch.jpg", title: "Lunch" },
        { id: 3, img: "https://i.ibb.co/2sy9wQ1/dinner.jpg", title: "Dinner" },
      ];
      
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-3">
      <div className="col-span-1 sm:col-span-1 px-10 place-self-center">
        <h1 className="text-4xl font-bold text-emerald-500 mb-5">
          Catagories
        </h1>
        <p>Explore a world of flavors with our recipe categories: Breakfast Delights, Lunchtime Favorites, Dinner Delicacies, Appetizers & Snacks, Sweets & Treats, Kid-Friendly Creations, International Flavors, Seasonal Specials, and Cooking Basics.</p>
      </div>
      <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg m-5 group"
          >
            <img className="w-full h-auto object-cover opacity-90 group-hover:opacity-30 group-hover:scale-110 duration-300" src={card.img} alt="" />
            <div className="absolute inset-0 flex  justify-center items-center pb-5 text-white font-bold">
              <h2 className="text-lg bg-emerald-500 px-3">{card.title}</h2>
              <button className="absolute right-0 bottom-5 group-hover:right-10 transform translate-x-full transition-all duration-500 ease-in-out hover:text-red-500"><FaArrowRight /></button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
