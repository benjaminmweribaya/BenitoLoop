import Seo from "@/components/Seo";
import { FaLeaf, FaTint, FaRecycle, FaTshirt } from "react-icons/fa";
import { MdHistory, MdTrendingUp } from "react-icons/md";

const lifetimeData = [
  {
    label: "CO₂ avoided",
    value: "1.2 t",
    color: "#FFC107",
    icon: <FaLeaf className="text-2xl" />,
    description: "Equivalent to 2,800 km driven by car",
  },
  {
    label: "Water saved",
    value: "18k L",
    color: "#03A9F4",
    icon: <FaTint className="text-2xl" />,
    description: "Enough to fill 90 bathtubs",
  },
  {
    label: "Landfill reduced",
    value: "4.3 m³",
    color: "#8BC34A",
    icon: <FaRecycle className="text-2xl" />,
    description: "Equal to 70 large trash bins",
  },
  {
    label: "Items processed",
    value: "27",
    color: "#FF5722",
    icon: <FaTshirt className="text-2xl" />,
    description: "Donated, upcycled, or resold",
  },
];

const recentActivity = [
  "Donation collected • 2 jackets, 1 pair of jeans",
  "AI sorting complete • Recommended: Upcycle",
  "Order shipped • Upcycled Denim Tote",
  "New marketplace listing • Patchwork Jacket",
];

const upcomingGoals = [
  { goal: "Save 25k L of water", progress: 72 },
  { goal: "Avoid 2 t of CO₂ emissions", progress: 60 },
  { goal: "Reduce landfill by 6 m³", progress: 71 },
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E7D32] to-[#1B5E20] text-white">
      <Seo
        title="Impact Dashboard — BenitoLoop"
        description="Track CO₂, water, and landfill savings from your donations and purchases."
      />

      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center md:text-left">
          Impact Dashboard
        </h1>
        <p className="mt-2 text-gray-200 text-center md:text-left">
          Your contributions to a circular fashion economy are making a real
          difference.
        </p>

        {/* Lifetime Stats */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lifetimeData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white text-black p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${item.color}33`, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-sm font-medium text-gray-700">{item.label}</p>
              <p className="mt-2 text-xs text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Goals */}
        <section className="mt-12 rounded-xl bg-white/10 p-6 backdrop-blur-lg">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <MdTrendingUp className="text-[#FFC107]" /> Upcoming Goals
          </h2>
          <div className="mt-6 space-y-6">
            {upcomingGoals.map((goal, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{goal.goal}</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${goal.progress}%`,
                      backgroundColor: "#FFC107",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Feed */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl bg-white/10 p-6 backdrop-blur-lg">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <MdHistory className="text-[#FFC107]" /> Recent Activity
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-200">
              {recentActivity.map((activity, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-white/10 p-6 backdrop-blur-lg">
            <h2 className="text-xl font-semibold">Why Your Impact Matters</h2>
            <p className="mt-4 text-sm text-gray-200">
              Every item you donate or purchase reduces demand for virgin
              materials, saves precious water, and prevents greenhouse gas
              emissions. Together, we are building a truly circular fashion
              economy.
            </p>
            <p className="mt-4 text-sm text-gray-200">
              BenitoLoop ensures transparency by tracking the lifecycle of every
              item you interact with. Your personal dashboard is updated in
              real-time to show your tangible contributions.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold">
            Keep up the momentum — every action counts!
          </h3>
          <button className="mt-4 bg-[#FFC107] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#FFB300] transition">
            Make Another Contribution
          </button>
        </div>
      </div>
    </div>
  );
};

export default Impact;

