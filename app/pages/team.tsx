"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap, Award, DollarSign } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    {
        name: "Dr. Sarah Chen",
        role: "Postdoctoral Fellow",
        description: "Focusing on macrophage metabolism in heart failure.",
        image: null // Placeholder handling
    },
    {
        name: "Michael Ross",
        role: "PhD Candidate",
        description: "Studying TLR signaling pathways.",
        image: null
    },
    {
        name: "Emily Zhang",
        role: "Research Assistant",
        description: "Lab management and genotyping core.",
        image: null
    },
    {
        name: "David Kumar",
        role: "Undergraduate Researcher",
        description: "Assisting with cell culture and PCR.",
        image: null
    }
];

const alumni = [
    "John Doe, PhD (Now at NIH)",
    "Jane Smith, MD (Residency at Cleveland Clinic)",
    "Alex Johnson, MS (Biotech Industry)"
];

const grants = [
    {
        agency: "NIH / NHLBI",
        code: "R01 HL123456",
        title: "Mechanisms of Innate Immunity in Cardiac Remodeling",
        role: "Principal Investigator",
        years: "2023 - 2028"
    },
    {
        agency: "American Heart Association",
        code: "TPA 987654",
        title: "Therapeutic Targeting of Inflammasomes",
        role: "Principal Investigator",
        years: "2022 - 2025"
    }
];

export default function TeamContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* PI Section */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                    >
                        <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden shadow-xl flex items-center justify-center text-gray-500 font-medium">
                            [PI Headshot]
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="mailto:Murugesan.Rajaram@osumc.edu" className="flex items-center gap-3 text-gray-600 hover:text-osu-scarlet transition-colors bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                <Mail size={18} />
                                <span className="text-sm font-medium">Email Dr. Rajaram</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 text-gray-600 hover:text-osu-scarlet transition-colors bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                <GraduationCap size={18} />
                                <span className="text-sm font-medium">Google Scholar</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Murugesan Rajaram, PhD, FAHA</h1>
                            <p className="text-xl text-osu-scarlet font-medium">Associate Professor & Principal Investigator</p>
                            <p className="text-gray-500">Department of Microbial Infection and Immunity</p>
                        </div>

                        <div className="prose prose-lg text-gray-600">
                            <p>
                                Dr. Rajaram leads a dynamic research team dedicated to understanding the role of the innate immune system in cardiovascular diseases. With a specific focus on myocardial infarction and heart failure, his work aims to bridge the gap between immunology and cardiology.
                            </p>
                            <p>
                                As a Fellow of the American Heart Association (FAHA), Dr. Rajaram has been recognized for his contributions to the field of cardiac complications in sepsis and pneumonia.
                            </p>
                        </div>

                        {/* Honors & Funding Highlights */}
                        <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Award className="text-osu-scarlet" /> Honors & Funding
                            </h3>

                            <div className="grid gap-4">
                                {grants.map((grant, i) => (
                                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-sm font-bold text-osu-scarlet tracking-wide">{grant.agency}</span>
                                            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{grant.years}</span>
                                        </div>
                                        <h4 className="font-semibold text-gray-900">{grant.title}</h4>
                                        <div className="text-sm text-gray-500 mt-1 flex gap-4">
                                            <span>{grant.code}</span>
                                            <span>•</span>
                                            <span>{grant.role}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="bg-osu-scarlet/5 p-4 rounded-lg border border-osu-scarlet/10 flex items-center gap-3">
                                    <Award className="text-osu-scarlet shrink-0" />
                                    <div>
                                        <div className="font-bold text-gray-900">Fellow of the American Heart Association (FAHA)</div>
                                        <div className="text-sm text-gray-600">Council on Basic Cardiovascular Sciences</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Current Lab Members</h2>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
                                [Photo]
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900 group-hover:text-osu-scarlet transition-colors">{member.name}</h3>
                                <p className="text-sm text-osu-scarlet font-medium mb-2">{member.role}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Alumni Section */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Lab Alumni</h2>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {alumni.map((alum, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-600 bg-white p-4 rounded-lg shadow-sm">
                                <div className="w-2 h-2 bg-osu-scarlet rounded-full" />
                                {alum}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
