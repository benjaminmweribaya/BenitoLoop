import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaShoppingCart, FaLeaf, FaTint, FaRecycle } from "react-icons/fa";

// Example placeholder images
import denimTote from "@/assets/products/denim-tote.jpg";
import patchworkJacket from "@/assets/products/patchwork-jacket.jpg";
import reclaimedTee from "@/assets/products/reclaimed-tee.jpg";
import leatherWallet from "@/assets/products/leather-wallet.jpg";

const products = [
  {
    id: 1,
    title: "Upcycled Denim Tote",
    price: 42,
    impact: 12,
    impactLabel: "12 L water saved",
    category: "Bags",
    img: denimTote,
    impactIcon: <FaTint className="text-[#2E7D32]" />,
  },
  {
    id: 2,
    title: "Patchwork Jacket",
    price: 120,
    impact: 0.3,
    impactLabel: "0.3 kg CO₂ avoided",
    category: "Clothing",
    img: patchworkJacket,
    impactIcon: <FaLeaf className="text-[#2E7D32]" />,
  },
  {
    id: 3,
    title: "Reclaimed Tee",
    price: 28,
    impact: 0.1,
    impactLabel: "0.1 m³ landfill reduced",
    category: "Clothing",
    img: reclaimedTee,
    impactIcon: <FaRecycle className="text-[#2E7D32]" />,
  },
  {
    id: 4,
    title: "Leather Offcut Wallet",
    price: 36,
    impact: 1,
    impactLabel: "Reclaimed leather",
    category: "Accessories",
    img: leatherWallet,
    impactIcon: <FaRecycle className="text-[#2E7D32]" />,
  },
];

const categories = ["All", "Bags", "Clothing", "Accessories"];
const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "impact-asc", label: "Impact: Low to High" },
  { value: "impact-desc", label: "Impact: High to Low" },
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("price-asc");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "impact-asc":
        return a.impact - b.impact;
      case "impact-desc":
        return b.impact - a.impact;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen relative bg-white text-gray-900">
      <Seo
        title="Marketplace — BenitoLoop"
        description="Shop unique upcycled products with transparent impact."
      />

      {/* Gradient edges */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#2E7D32] via-green-500 to-[#A5D6A7]" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#A5D6A7] via-green-500 to-[#2E7D32]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-extrabold text-center md:text-left text-[#2E7D32]">
          Marketplace
        </h1>
        <p className="mt-2 text-gray-600 text-center md:text-left max-w-2xl">
          Discover one-of-a-kind pieces crafted from reclaimed materials — shop,
          support, and make an impact.
        </p>

        {/* Filters and Sort */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 ${selectedCategory === cat
                    ? "bg-[#2E7D32] text-white"
                    : "bg-transparent border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                  }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-[#2E7D32] bg-transparent text-[#2E7D32] px-3 py-2 text-sm outline-none hover:bg-[#2E7D32] hover:text-white transition"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-white text-gray-900"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedProducts.map((p) => (
            <article
              key={p.id}
              className="rounded-xl overflow-hidden border-2 border-[#2E7D32] bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative w-full h-56">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 flex items-center gap-1 bg-[#FFC107] text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {p.impactIcon} {p.impactLabel}
                </span>
              </div>
              <div className="p-4 flex flex-col justify-between h-36">
                <div>
                  <h3 className="font-semibold text-lg text-[#2E7D32]">
                    {p.title}
                  </h3>
                  <div className="mt-1 text-sm text-gray-600">{p.category}</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    ${p.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-[#2E7D32] text-white hover:bg-[#1B5E20] flex items-center gap-2"
                  >
                    <FaShoppingCart /> Add to cart
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;


