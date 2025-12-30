"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Microscope, BookOpen, Award } from "lucide-react";

export default function HomeContent() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-osu-scarlet/30 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0 opacity-40 transform scale-105 motion-safe:animate-kenburns" />

                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            Advancing Cardiovascular Science
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
                            The Rajaram Lab investigates the molecular mechanisms of innate immunity in heart failure and cardiac inflammation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/research"
                            className="px-8 py-4 bg-osu-scarlet text-white text-lg font-semibold rounded-full hover:bg-red-800 transition-all transform hover:scale-105 shadow-xl shadow-red-900/20 flex items-center gap-2"
                        >
                            Explore Research <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/publications"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                            Latest Publications <BookOpen className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-white rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* News Ticker Section */}
            <div className="bg-osu-gray/10 border-y border-gray-200 overflow-hidden py-3">
                <div className="flex whitespace-nowrap">
                    <motion.div
                        className="flex items-center gap-12 px-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[1, 2, 3].map((i) => (
                            <span key={i} className="flex items-center gap-12">
                                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Award className="w-4 h-4 text-osu-scarlet" />
                                    <strong>Latest Grant:</strong> Awarded NIH R01 to study macrophage signaling in cardiac remodeling.
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <BookOpen className="w-4 h-4 text-osu-scarlet" />
                                    <strong>New Publication:</strong> "Mechanisms of inflammasome activation..." in <em>Circulation Research</em>.
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Microscope className="w-4 h-4 text-osu-scarlet" />
                                    <strong>Lab Update:</strong> Welcome new postdoc Dr. Sarah Chen!
                                </span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bio / Mission Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-osu-scarlet pl-6">
                            Leading the Fight Against Cardiac Inflammation
                        </h2>
                        <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
                            <p>
                                Dr. Murugesan Rajaram, PhD, FAHA, is a Principal Investigator at The Ohio State University College of Medicine. His lab focuses on deciphering the complex crosstalk between the innate immune system and cardiac physiology.
                            </p>
                            <p>
                                By understanding how immune cells drive tissue damage and remodeling during heart failure, we aim to identify novel therapeutic targets that can improve patient outcomes.
                            </p>
                        </div>
                        <div className="pt-4 flex flex-wrap gap-4">
                            <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4">
                                <div className="bg-osu-scarlet/10 p-2 rounded-full text-osu-scarlet">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">FAHA</div>
                                    <div className="text-sm text-gray-500">Fellow of the American Heart Association</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                            {/* Placeholder for Dr. Rajaram's photo */}
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                [Dr. Rajaram Portrait - 4:3]
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-50 rounded-lg shadow-xl p-6 flex flex-col justify-center items-center gap-2 md:block hidden">
                            <div className="text-4xl font-bold text-osu-scarlet">15+</div>
                            <div className="text-sm text-gray-600 font-medium">Years of NIH Funding</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
