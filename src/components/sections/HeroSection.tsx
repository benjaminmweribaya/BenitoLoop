import React from "react";
import hero from "@/assets/hero-illustration.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient Border on Edges */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#2E7D32] via-green-500 to-[#A5D6A7]" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#A5D6A7] via-green-500 to-[#2E7D32]" />

      <div className="container mx-auto grid items-center gap-12 px-6 py-16 md:grid-cols-2 lg:py-24">
        {/* Left Content */}
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
            Circular fashion,{" "}
            <span className="bg-gradient-to-r from-[#2E7D32] to-green-500 bg-clip-text text-transparent">
              reimagined
            </span>{" "}
            with BenitoLoop
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            Donate items, fuel upcycling, and shop reclaimed designs — while
            tracking your CO₂, water, and landfill impact.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#2E7D32] hover:bg-[#256b28] text-white font-semibold shadow-lg"
            >
              <Link to="/donate">Start a Donation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white font-semibold"
            >
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Secure. Community-driven. Planet-positive.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-2xl border-4 border-[#2E7D32] bg-white shadow-2xl p-4">
            <img
              src={hero}
              alt="BenitoLoop upcycling workspace with reclaimed garments"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



