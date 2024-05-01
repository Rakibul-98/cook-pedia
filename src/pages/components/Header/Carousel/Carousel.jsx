import { useState } from "react";

export default function Carousel() {
  const [selectedIdx, setSelectedIdx] = useState(1);

  const items = [
    { id: 1, image: "https://i.ibb.co/k4D50fH/pizza.jpg" },
    { id: 2, image: "https://i.ibb.co/vBLDRW6/biryani.jpg" },
    { id: 3, image: "https://i.ibb.co/xgkqYSx/pasta.jpg" },
  ];

  const handleItemClick = (index) => {
    setSelectedIdx(index);
  };

  return (
    <div className="w-9/12 mx-auto flex justify-center p-10">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`flex-none w-1/3 transform transition-transform ${
            index === selectedIdx ? "scale-125 z-10 border-2 border-white" : "opacity-75"
          }`}
          onClick={() => handleItemClick(index)}
        >
          <img src={item.image} alt="" className="w-full" />
        </div>
      ))}
    </div>
  )
}
