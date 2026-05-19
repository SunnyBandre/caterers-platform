"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CatererCard from "@/components/CatererCard";

export default function CaterersPage() {
  const [caterers, setCaterers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Caterers</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search caterer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-60"
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-lg font-medium">
          Loading caterers...
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredCaterers.length === 0 && (
        <div className="text-center text-gray-500 text-lg">
          No caterers found
        </div>
      )}

      {/* Caterers Grid */}
      {!loading && filteredCaterers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaterers.map((caterer) => (
            <CatererCard key={caterer._id} caterer={caterer} />
          ))}
        </div>
      )}
    </div>
  );
}
