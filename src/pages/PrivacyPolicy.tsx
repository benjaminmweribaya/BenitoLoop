import Seo from "@/components/Seo";
import { FaShieldAlt, FaDatabase, FaUserShield, FaEnvelope, FaRegClock } from "react-icons/fa";

const PrivacyPolicy = () => {
    const updated = new Date().toISOString().split("T")[0];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Seo
                title="Privacy Policy — BenitoLoop"
                description="Learn how BenitoLoop collects, uses, and protects your data."
                canonical="/privacy"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Privacy Policy — BenitoLoop",
                    url: "/privacy",
                }}
            />

            {/* Header */}
            <section className="bg-[#2E7D32] text-white py-12 px-6 text-center">
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <p className="mt-2 text-[#FFC107]">Last updated: {updated}</p>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
                    At BenitoLoop, we value your trust and are committed to safeguarding your personal information.
                </p>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-10 space-y-12 max-w-5xl">

                {/* Intro */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">Our Commitment</h2>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        This Privacy Policy explains how BenitoLoop collects, uses, stores, and protects your data.
                        We are transparent about our practices, and we respect your right to control your personal information.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaDatabase className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">Information We Collect</h2>
                    </div>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                        <li>Account details such as your name, email address, and password (securely hashed).</li>
                        <li>Donation and purchase information, including item descriptions and delivery addresses.</li>
                        <li>Usage data such as pages visited, time spent, and device/browser details.</li>
                        <li>Images and media you upload to our platform.</li>
                        <li>Communication records from emails or messages sent to our support team.</li>
                    </ul>
                </section>

                {/* How We Use It */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaUserShield className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">How We Use Your Information</h2>
                    </div>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                        <li>Facilitate donations, upcycling projects, and product purchases.</li>
                        <li>Provide personalized recommendations and enhance your experience.</li>
                        <li>Process transactions and manage your account.</li>
                        <li>Improve security, detect fraud, and ensure platform reliability.</li>
                        <li>Comply with legal and regulatory requirements.</li>
                    </ul>
                </section>

                {/* Your Rights */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">Your Rights & Choices</h2>
                    </div>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                        <li>Access and review your personal data at any time.</li>
                        <li>Update or correct your information through your account settings.</li>
                        <li>Request data deletion or restriction of processing.</li>
                        <li>Opt out of non-essential marketing communications.</li>
                        <li>Request a copy of your data for portability purposes.</li>
                    </ul>
                </section>

                {/* Data Retention */}
                <section className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <FaRegClock className="text-[#2E7D32] text-2xl" />
                        <h2 className="text-2xl font-semibold text-[#2E7D32]">Data Retention & Security</h2>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We retain your data only as long as necessary for the purposes outlined in this policy.
                        Advanced encryption, firewalls, and monitoring tools are used to ensure your data’s safety.
                        While we take strong precautions, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                {/* Contact */}
                <section className="bg-white shadow-md p-6 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold text-[#2E7D32]">Contact Us</h2>
                    <p className="mt-4 text-gray-600">
                        If you have questions about our privacy practices, feel free to reach out to us.
                    </p>
                    <p className="mt-2 font-semibold text-[#2E7D32]">
                        Email: <a href="mailto:benitofashions2021@gmail.com" className="hover:underline">benitofashions2021@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
