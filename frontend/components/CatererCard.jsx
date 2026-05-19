export default function CatererCard({ caterer, onClick }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/20">
      {/* Image */}
      <div
        className="h-56 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Content */}
      <div className="p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{caterer.name}</h2>

            <p className="mt-2 text-gray-300">📍 {caterer.location}</p>
          </div>

          <div className="rounded-full bg-white/20 px-3 py-1 text-sm">
            ⭐ {caterer.rating}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {caterer.cuisines.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-white/20 px-3 py-1 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-300">Starting From</p>

            <h3 className="text-2xl font-bold">₹{caterer.pricePerPlate}</h3>
          </div>

          <button
            onClick={onClick}
            className="rounded-xl bg-white px-5 py-3 font-semibold cursor-pointer text-black transition group-hover:scale-105"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
