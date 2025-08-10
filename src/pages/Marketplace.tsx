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
    impact: 12, // liters saved
    impactLabel: "12 L water saved",
    category: "Bags",
    img: denimTote,
    impactIcon: <FaTint className="text-[#FFC107]" />,
  },
  {
    id: 2,
    title: "Patchwork Jacket",
    price: 120,
    impact: 0.3, // kg CO₂ avoided
    impactLabel: "0.3 kg CO₂ avoided",
    category: "Clothing",
    img: patchworkJacket,
    impactIcon: <FaLeaf className="text-[#FFC107]" />,
  },
  {
    id: 3,
    title: "Reclaimed Tee",
    price: 28,
    impact: 0.1, // m³ landfill reduced
    impactLabel: "0.1 m³ landfill reduced",
    category: "Clothing",
    img: reclaimedTee,
    impactIcon: <FaRecycle className="text-[#FFC107]" />,
  },
  {
    id: 4,
    title: "Leather Offcut Wallet",
    price: 36,
    impact: 1, // generic reclaimed material
    impactLabel: "Reclaimed leather",
    category: "Accessories",
    img: leatherWallet,
    impactIcon: <FaRecycle className="text-[#FFC107]" />,
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
    <div className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#2E7D32] to-[#1B5E20] text-white">
      <Seo
        title="Marketplace — BenitoLoop"
        description="Shop unique upcycled products with transparent impact."
      />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-center md:text-left">
          Marketplace
        </h1>
        <p className="mt-2 text-gray-200 text-center md:text-left">
          Discover one-of-a-kind pieces crafted from reclaimed materials —
          shop, support, and make an impact.
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
                    ? "bg-[#FFC107] text-black"
                    : "bg-transparent border border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black"
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
              className="rounded-lg border border-[#FFC107] bg-transparent text-[#FFC107] px-3 py-2 text-sm outline-none hover:bg-[#FFC107] hover:text-black transition"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-[#2E7D32] text-white"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedProducts.map((p) => (
            <article
              key={p.id}
              className="rounded-xl overflow-hidden bg-white text-black shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
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
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="mt-1 text-sm text-gray-600">{p.category}</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">${p.price}</span>
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

