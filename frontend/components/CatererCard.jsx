export default function CatererCard({ caterer }) {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition bg-white hover:cursor-pointer">
      <h2 className="text-xl font-semibold">{caterer.name}</h2>

      <p className="text-gray-500 mt-1">📍 {caterer.location}</p>

      <p className="mt-2">₹{caterer.pricePerPlate} / plate</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {caterer.cuisines.map((item, index) => (
          <span
            key={index}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-4 font-medium">⭐ {caterer.rating}</p>
    </div>
  );
}
