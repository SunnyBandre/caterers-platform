"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CatererCard from "@/components/CatererCard";

export default function CaterersPage() {
  const [caterers, setCaterers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [selectedCaterer, setSelectedCaterer] = useState(null);

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://caterers-platform.onrender.com/api/caterers",
        );

        setCaterers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaterers();
  }, []);

  const filteredCaterers = caterers.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice =
      maxPrice === "" || item.pricePerPlate <= Number(maxPrice);

    return matchesSearch && matchesPrice;
  });

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-6 py-12">
        {/* Heading */}
        <div className="text-center text-white">
          <p className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
            Discover Premium Catering Services
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Explore Top Caterers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Find trusted caterers for weddings, birthdays, corporate events, and
            unforgettable celebrations.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:flex-row">
          <input
            type="text"
            placeholder="Search caterer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none"
          />

          <input
            type="text"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*$/.test(value)) {
                setMaxPrice(value);
              }
            }}
            className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none md:w-60"
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-20 text-center text-xl font-semibold text-white">
            Loading caterers...
          </div>
        )}

        {/* Empty */}
        {!loading && filteredCaterers.length === 0 && (
          <div className="mt-20 text-center text-xl text-gray-300">
            No caterers found
          </div>
        )}

        {/* Cards */}
        {!loading && filteredCaterers.length > 0 && (
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCaterers.map((caterer) => (
              <CatererCard
                key={caterer._id}
                caterer={caterer}
                onClick={() => setSelectedCaterer(caterer)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCaterer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold">{selectedCaterer.name}</h2>

                <p className="mt-2 text-gray-500">
                  📍 {selectedCaterer.location}
                </p>
              </div>

              <button
                onClick={() => setSelectedCaterer(null)}
                className="text-2xl font-bold text-gray-500 hover:cursor-pointer hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-100 p-5">
                <p className="text-sm text-gray-500">Price Per Plate</p>

                <h3 className="mt-2 text-3xl font-bold">
                  ₹{selectedCaterer.pricePerPlate}
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-100 p-5">
                <p className="text-sm text-gray-500">Rating</p>

                <h3 className="mt-2 text-3xl font-bold">
                  ⭐ {selectedCaterer.rating}
                </h3>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold">Available Cuisines</h4>

              <div className="mt-4 flex flex-wrap gap-3">
                {selectedCaterer.cuisines.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-black px-4 py-2 text-sm text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-10 w-full rounded-2xl bg-black py-4 text-lg font-semibold text-white transition hover:scale-[1.02]">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
