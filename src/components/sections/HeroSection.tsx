import React from "react";
import hero from "@/assets/hero-benitoloop.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState({ x: "50%", y: "50%" });

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCoords({ x: `${x}%`, y: `${y}%` });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const orbStyle = {
    ["--x" as any]: coords.x,
    ["--y" as any]: coords.y,
  } as React.CSSProperties;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#2E7D32] via-[#2E7D32] to-[#1B5E20] text-white"
    >
      <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2 lg:py-24">
        {/* Left Content */}
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
            Circular fashion,{" "}
            <span className="text-[#FFC107]">reimagined</span> with BenitoLoop
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
            Donate items, fuel upcycling, and shop reclaimed designs — while
            tracking your CO₂, water, and landfill impact.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-semibold"
            >
              <Link to="/donate">Start a Donation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black font-semibold"
            >
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>

          <p className="mt-3 text-xs text-gray-300">
            Secure. Community-driven. Planet-positive.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={hero}
            alt="BenitoLoop upcycling workspace with reclaimed garments"
            className="relative z-10 w-full rounded-lg shadow-2xl object-cover"
          />
          <div
            className="absolute inset-0 -z-0 [background:radial-gradient(500px_circle_at_var(--x)_var(--y),rgba(255,193,7,0.15),transparent_40%)] transition-opacity"
            style={orbStyle}
          />
        </div>
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
    </section>
  );
};

export default HeroSection;

