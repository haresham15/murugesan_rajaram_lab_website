"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OpportunitiesContent() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl font-bold text-gray-900 mb-6"
                    >
                        Join Our Team
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are always looking for motivated students and fellows to join us in our mission to understand cardiac immunity.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 pb-20">

                {/* Postdoc Position */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 border border-gray-200 rounded-2xl p-8 shadow-lg bg-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 bg-osu-scarlet text-white font-bold text-xs uppercase tracking-wider rounded-bl-2xl">
                        Open Position
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Postdoctoral Fellow</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We are seeking a highly motivated postdoctoral fellow to lead a project on macrophage metabolism in heart failure. The ideal candidate will have a strong background in immunology or cardiovascular biology.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <Requirement text="PhD or MD/PhD in related field" />
                        <Requirement text="Experience with flow cytometry" />
                        <Requirement text="First-author publications" />
                        <Requirement text="Strong scientific writing skills" />
                    </div>

                    <Link
                        href="mailto:Murugesan.Rajaram@osumc.edu?subject=Postdoc Application"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-osu-scarlet transition-all shadow-lg shadow-gray-200"
                    >
                        Apply Now <ArrowRight size={18} />
                    </Link>
                </motion.div>

                {/* Graduate Students */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 border border-gray-100 rounded-2xl p-8 bg-gray-50"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Gradient Students</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We welcome rotation students from the Biomedical Sciences Graduate Program (BSGP) at OSU. Contact Dr. Rajaram to discuss potential projects.
                    </p>
                    <Link href="/contact" className="text-osu-scarlet font-medium hover:underline flex items-center gap-2">
                        Contact Lab <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

function Requirement({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-gray-700">
            <CheckCircle2 className="text-osu-scarlet flex-shrink-0" size={20} />
            <span>{text}</span>
        </div>
    );
}
