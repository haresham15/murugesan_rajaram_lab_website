"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FlaskConical, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function OpportunitiesContent() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 px-6 bg-gray-50 bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Join Our Team
                    </motion.h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        We are always looking for motivated scientists and trainees to join us
                        in understanding cardiac immunity and tuberculosis pathogenesis.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
                {/* Postdoc Position */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-2xl p-8 shadow-sm bg-white relative overflow-hidden hover:shadow-lg transition-shadow"
                >
                    <div className="absolute top-0 right-0 p-3 px-5 bg-osu-scarlet text-white font-bold text-xs uppercase tracking-wider rounded-bl-2xl">
                        Open Position
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-osu-scarlet/10 rounded-lg flex items-center justify-center">
                            <FlaskConical className="w-5 h-5 text-osu-scarlet" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Postdoctoral Fellow
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We are seeking a highly motivated postdoctoral fellow to lead
                        projects on cardiac macrophage biology during infection or
                        <em> M. tuberculosis</em> host-pathogen interactions. The ideal
                        candidate will have a strong background in immunology, microbiology,
                        or cardiovascular biology.
                    </p>

                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                        <Requirement text="PhD or MD/PhD in a related field" />
                        <Requirement text="Experience with flow cytometry or animal models" />
                        <Requirement text="First-author publication(s)" />
                        <Requirement text="BSL-2/BSL-3 experience preferred for TB projects" />
                    </div>

                    <a
                        href="mailto:Murugesan.Rajaram@osumc.edu?subject=Postdoc Application — Rajaram Lab"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-osu-scarlet text-white font-medium rounded-lg hover:bg-osu-scarlet-dark transition-all shadow-lg shadow-red-900/10"
                    >
                        Apply Now <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Graduate Students */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="border border-gray-100 rounded-2xl p-8 bg-gray-50"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-gray-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Graduate Students
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We welcome rotation students from the Biomedical Sciences Graduate
                        Program (BSGP) and related programs at OSU. Our lab provides training
                        in innate immunity, macrophage biology, cardiac physiology, and
                        mycobacterial pathogenesis. Contact Dr. Rajaram to discuss potential
                        rotation projects.
                    </p>
                    <Link
                        href="/contact"
                        className="text-osu-scarlet font-medium hover:underline flex items-center gap-2"
                    >
                        Contact Lab <ArrowRight size={16} />
                    </Link>
                </motion.div>

                {/* Undergraduate Students */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="border border-gray-100 rounded-2xl p-8 bg-gray-50"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Undergraduate Researchers
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Motivated undergraduate students interested in gaining hands-on
                        research experience in immunology and infectious disease are
                        encouraged to reach out. We have a track record of mentoring
                        undergraduates in meaningful research projects.
                    </p>
                    <Link
                        href="/contact"
                        className="text-osu-scarlet font-medium hover:underline flex items-center gap-2"
                    >
                        Get in Touch <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

function Requirement({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-gray-700">
            <CheckCircle2 className="text-osu-scarlet flex-shrink-0" size={18} />
            <span className="text-sm">{text}</span>
        </div>
    );
}
