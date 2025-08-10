import Seo from "@/components/Seo";
import { FaHandshake, FaUser, FaStore, FaCreditCard, FaBan, FaBalanceScale, FaSyncAlt, FaEnvelope } from "react-icons/fa";

const TermsOfService = () => {
    const updated = new Date().toISOString().split("T")[0];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Seo
                title="Terms of Service — BenitoLoop"
                description="Read the terms that govern the use of BenitoLoop's services."
                canonical="/terms"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Terms of Service — BenitoLoop",
                    url: "/terms",
                }}
            />

            {/* Header */}
            <section className="bg-[#2E7D32] text-white py-12 px-6 text-center">
                <h1 className="text-4xl font-bold">Terms of Service</h1>
                <p className="mt-2 text-[#FFC107]">Last updated: {updated}</p>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
                    These terms govern your use of BenitoLoop’s services. Please read them carefully before using our platform.
                </p>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-10 space-y-12 max-w-5xl">

                {/* Acceptance */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaHandshake className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">1. Acceptance of Terms</h2>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        By creating an account, accessing, or using BenitoLoop, you agree to comply with these Terms of Service
                        and our Privacy Policy. If you do not agree, you must discontinue use immediately.
                    </p>
                </section>

                {/* Accounts */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaUser className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">2. Accounts and Eligibility</h2>
                    </div>
                    <p className="mt-4 text-gray-600">
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                        You must be at least 18 years old or have parental consent to use our services.
                    </p>
                </section>

                {/* Donations & Marketplace */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaStore className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">3. Donations and Marketplace</h2>
                    </div>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                        <li>Donations must comply with our guidelines and applicable local regulations.</li>
                        <li>Partners must ensure accurate descriptions, pricing, and availability of listed items.</li>
                        <li>Orders are subject to inventory status and shipping policies.</li>
                    </ul>
                </section>

                {/* Payments */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaCreditCard className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">4. Payments</h2>
                    </div>
                    <p className="mt-4 text-gray-600">
                        All payments are securely processed by trusted third-party providers. We do not store raw payment details.
                        Transactions may be subject to verification for security purposes.
                    </p>
                </section>

                {/* Prohibited Activities */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaBan className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">5. Prohibited Activities</h2>
                    </div>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                        <li>Unauthorized access to systems, data, or accounts.</li>
                        <li>Uploading harmful code or disrupting services.</li>
                        <li>Engaging in fraudulent or unlawful activities.</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaBalanceScale className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">6. Limitation of Liability</h2>
                    </div>
                    <p className="mt-4 text-gray-600">
                        To the fullest extent permitted by law, BenitoLoop shall not be liable for indirect, incidental,
                        or consequential damages arising from the use of our services.
                    </p>
                </section>

                {/* Changes */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaSyncAlt className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">7. Changes to Terms</h2>
                    </div>
                    <p className="mt-4 text-gray-600">
                        We may update these terms periodically. Continued use of our services after updates constitutes
                        acceptance of the revised terms.
                    </p>
                </section>

                {/* Contact */}
                <section className="bg-white shadow-md p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold text-[#2E7D32]">8. Contact Us</h2>
                    <p className="mt-4 text-gray-600">
                        If you have questions or concerns about these Terms of Service, please reach out to our legal team.
                    </p>
                    <p className="mt-2 font-semibold text-[#2E7D32]">
                        Email: <a href="mailto:benitofashions2021@gmail.com" className="hover:underline">benitofashions2021@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
