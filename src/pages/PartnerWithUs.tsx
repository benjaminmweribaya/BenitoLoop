import { FaLeaf, FaHandshake, FaRecycle, FaTruck, FaTshirt, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const PartnerWithUs = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById("partner-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white text-gray-800">

            {/* Hero Section */}
            <section className="bg-[#1B1B1B] text-white py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#FFC107]">Partner With BenitoLoop</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    Join us in closing the fashion loop. Together, we can turn waste into opportunity and make sustainable fashion the new normal.
                </p>
                <Button
                    onClick={scrollToForm}
                    className="mt-6 bg-[#2E7D32] hover:bg-[#256528] text-white px-6 py-3 rounded-md text-lg"
                >
                    Apply Now
                </Button>
            </section>

            {/* Why Partner */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#2E7D32]">Why Partner With Us?</h2>
                <p className="mt-3 text-gray-600">
                    We collaborate with like-minded businesses, NGOs, and innovators to accelerate sustainable change in the fashion industry.
                </p>
                <div className="grid gap-8 md:grid-cols-3 mt-10">
                    {[
                        { icon: <FaRecycle size={40} className="text-[#FFC107]" />, title: "Sustainability First", desc: "Help reduce textile waste and promote eco-friendly practices." },
                        { icon: <FaHandshake size={40} className="text-[#FFC107]" />, title: "Collaborative Growth", desc: "Access new markets and share knowledge with our network." },
                        { icon: <FaGlobe size={40} className="text-[#FFC107]" />, title: "Global Impact", desc: "Be part of a movement that inspires communities worldwide." },
                    ].map((item, i) => (
                        <div key={i} className="p-6 border rounded-lg hover:shadow-lg transition">
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="mt-2 text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Partnership Categories */}
            <section className="bg-gray-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-[#2E7D32]">Partnership Opportunities</h2>
                <div className="grid gap-8 md:grid-cols-4 mt-10 max-w-6xl mx-auto">
                    {[
                        { icon: <FaTshirt size={30} />, label: "Upcycling Studios" },
                        { icon: <FaRecycle size={30} />, label: "Recyclers" },
                        { icon: <FaTruck size={30} />, label: "Logistics Providers" },
                        { icon: <FaLeaf size={30} />, label: "Environmental NGOs" },
                    ].map((cat, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border text-center shadow-sm hover:shadow-lg transition">
                            <div className="text-[#2E7D32] flex justify-center mb-3">{cat.icon}</div>
                            <h4 className="font-semibold">{cat.label}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#2E7D32]">How It Works</h2>
                <div className="mt-10 grid gap-8 md:grid-cols-3 text-center">
                    {[
                        { step: "1", title: "Apply Online", desc: "Fill out our quick partner application form." },
                        { step: "2", title: "Get Approved", desc: "Our team reviews and confirms your partnership." },
                        { step: "3", title: "Start Collaborating", desc: "Work together to transform waste into wearable art." },
                    ].map((item, i) => (
                        <div key={i} className="p-6 border rounded-lg bg-white hover:shadow-lg transition">
                            <div className="text-3xl font-bold text-[#FFC107]">{item.step}</div>
                            <h4 className="font-semibold mt-4">{item.title}</h4>
                            <p className="mt-2 text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Application Form */}
            <section id="partner-form" className="bg-[#F0F8F4] text-gray-900 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-[#2E7D32]">Partner Application Form</h2>
                <form className="mt-8 max-w-3xl mx-auto grid gap-6">
                    <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md bg-white text-black" required />
                    <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-white text-black" required />
                    <input type="text" placeholder="Organization Name" className="w-full p-3 rounded-md bg-white text-black" required />
                    <select className="w-full p-3 rounded-md bg-white text-black" required>
                        <option value="">Select Partnership Type</option>
                        <option>Upcycling Studio</option>
                        <option>Recycler</option>
                        <option>Logistics Provider</option>
                        <option>NGO</option>
                    </select>
                    <textarea placeholder="Tell us about your work" rows={4} className="w-full p-3 rounded-md bg-white text-black" required />
                    <Button type="submit" className="bg-[#2E7D32] hover:bg-[#256528] text-white px-6 py-3 rounded-md text-lg">
                        Submit Application
                    </Button>
                </form>
            </section>

        </div>
    );
};

export default PartnerWithUs;

