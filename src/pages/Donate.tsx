import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Seo from "@/components/Seo";
import {
  FaTshirt,
  FaHandHoldingHeart,
  FaTruck,
  FaRecycle,
  FaLeaf,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaTshirt className="text-3xl text-[#FFC107]" />,
    title: "List Your Item",
    description: "Upload photos and details so our AI can evaluate it.",
  },
  {
    icon: <FaTruck className="text-3xl text-[#FFC107]" />,
    title: "Schedule Pickup or Drop-off",
    description: "Choose a convenient time for us to collect your items.",
  },
  {
    icon: <FaRecycle className="text-3xl text-[#FFC107]" />,
    title: "Impact & Rewards",
    description:
      "Earn points, save resources, and track your environmental impact.",
  },
];

const Donate = () => {
  const [condition, setCondition] = useState(70);
  const [category, setCategory] = useState("");
  const [impact, setImpact] = useState({
    water: 0,
    co2: 0,
    landfill: 0,
  });

  // Simple estimation logic
  const updateImpact = (cat: string, cond: number) => {
    let base = { water: 0, co2: 0, landfill: 0 };
    if (cat === "clothing") base = { water: 3000, co2: 3, landfill: 0.05 };
    if (cat === "shoes") base = { water: 1500, co2: 2, landfill: 0.03 };
    if (cat === "accessories") base = { water: 800, co2: 1, landfill: 0.02 };
    if (cat === "other") base = { water: 500, co2: 0.5, landfill: 0.01 };

    const factor = cond / 100;
    setImpact({
      water: Math.round(base.water * factor),
      co2: +(base.co2 * factor).toFixed(2),
      landfill: +(base.landfill * factor).toFixed(3),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E7D32] to-[#1B5E20] text-white">
      <Seo
        title="Donate Clothing — BenitoLoop"
        description="List items, schedule pickup or drop-off, and earn rewards for circular fashion."
      />

      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center md:text-left">
          Start a Donation
        </h1>
        <p className="mt-2 text-gray-200 text-center md:text-left max-w-2xl">
          Give your clothes a second life — help the planet and earn rewards for
          contributing to a circular fashion economy.
        </p>

        {/* Steps */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/10 p-6 backdrop-blur-lg text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-200">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 bg-white/10 p-6 rounded-xl backdrop-blur-lg md:col-span-2">
            <div className="space-y-2">
              <Label htmlFor="photos">Photos</Label>
              <Input
                id="photos"
                type="file"
                multiple
                accept="image/*"
                className="bg-white text-black"
              />
              <p className="text-xs text-gray-300">
                Tip: Take clear, well-lit photos from multiple angles.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Item Title</Label>
              <Input
                id="title"
                placeholder="e.g., Vintage Denim Jacket"
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                onValueChange={(val) => {
                  setCategory(val);
                  updateImpact(val, condition);
                }}
              >
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="shoes">Shoes</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Condition</Label>
              <div className="px-2">
                <Slider
                  defaultValue={[70]}
                  max={100}
                  step={1}
                  onValueChange={(val) => {
                    setCondition(val[0]);
                    updateImpact(category, val[0]);
                  }}
                />
              </div>
              <p className="text-xs text-gray-300">
                0% = heavily worn, 100% = brand new
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Input
                id="notes"
                placeholder="Brand, size, unique features"
                className="bg-white text-black"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="bg-[#FFC107] text-black hover:bg-[#FFB300] w-full">
                Continue
              </Button>
              <Button
                variant="outline"
                className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black w-full"
              >
                Schedule Pickup
              </Button>
            </div>
          </div>

          {/* Right Column - Impact Preview */}
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg flex flex-col items-center justify-center text-center">
            <FaLeaf className="text-5xl text-[#FFC107] mb-4" />
            <h3 className="text-xl font-semibold">Estimated Impact</h3>
            {category ? (
              <div className="mt-4 space-y-3">
                <p>
                  <span className="font-bold text-[#FFC107]">
                    {impact.water}
                  </span>{" "}
                  L water saved
                </p>
                <p>
                  <span className="font-bold text-[#FFC107]">{impact.co2}</span>{" "}
                  kg CO₂ avoided
                </p>
                <p>
                  <span className="font-bold text-[#FFC107]">
                    {impact.landfill}
                  </span>{" "}
                  m³ landfill reduced
                </p>
              </div>
            ) : (
              <p className="text-gray-300 mt-4 text-sm">
                Select a category and condition to see your estimated impact.
              </p>
            )}
          </div>
        </form>

        {/* Impact CTA */}
        <div className="mt-12 bg-white/10 p-6 rounded-xl backdrop-blur-lg text-center">
          <FaHandHoldingHeart className="text-4xl text-[#FFC107] mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">
            Every Donation Makes an Impact
          </h3>
          <p className="mt-2 text-sm text-gray-200 max-w-lg mx-auto">
            By donating, you’re reducing landfill waste, saving water, and
            avoiding CO₂ emissions. BenitoLoop tracks your contributions so you
            can see your positive footprint grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
