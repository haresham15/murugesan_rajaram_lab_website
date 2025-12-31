"use client";

import { motion } from "framer-motion";
import { Link2, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

const featuredPublications = [
    {
        title: "Innate immune signaling in cardiac ischemia-reperfusion injury",
        journal: "Circulation Research",
        year: "2024",
        authors: "Smith J, Doe A, Rajaram M.",
        link: "#",
        citationCount: 45
    },
    {
        title: "Macrophage polarization regulates fibrosis in heart failure",
        journal: "Journal of Clinical Investigation",
        year: "2022",
        authors: "Rajaram M, Johnson B, et al.",
        link: "#",
        citationCount: 120
    },
    {
        title: "TLR4-mediated inflammation in cardiomyopathy",
        journal: "Nature Reviews Cardiology",
        year: "2020",
        authors: "Rajaram M, et al.",
        link: "#",
        citationCount: 200
    }
];

const allPublications = [
    ...featuredPublications,
    {
        title: "Novel biomarkers for cardiac inflammation",
        journal: "PLOS One",
        year: "2019",
        authors: "Williams T, Rajaram M.",
        link: "#"
    },
    {
        title: "Review: The role of NLRs in cardiovascular disease",
        journal: "Frontiers in Immunology",
        year: "2018",
        authors: "Rajaram M.",
        link: "#"
    },
    {
        title: "Targeting inflammation to prevent heart failure",
        journal: "Journal of the American College of Cardiology",
        year: "2017",
        authors: "Davis L, Rajaram M.",
        link: "#"
    }
];

export default function PublicationsContent() {
    return (
        <div className="min-h-screen bg-white pb-20">
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-gray-900 mb-6"
                    >
                        Publications
                    </motion.h1>
                    <div className="flex gap-4">
                        <Link href="https://scholar.google.com" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-black font-medium hover:bg-white transition-colors">
                            <ExternalLink size={16} /> Google Scholar
                        </Link>
                        <Link href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-black font-medium hover:bg-white transition-colors">
                            <ExternalLink size={16} /> PubMed
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 -mt-10">

                {/* Key Papers Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Key Papers</h2>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="grid gap-6">
                        {featuredPublications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:border-osu-scarlet/30"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-osu-scarlet rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-osu-scarlet transition-colors">
                                    <Link href={pub.link} className="flex items-center gap-2">
                                        {pub.title} <Link2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </h3>
                                <div className="text-gray-600 font-medium mb-4">
                                    {pub.journal} <span className="text-gray-400">•</span> {pub.year}
                                </div>
                                <p className="text-gray-500 text-sm mb-4">
                                    {pub.authors}
                                </p>

                                {pub.citationCount && (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                        <FileText size={12} /> Cited by {pub.citationCount}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* All Publications List */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">All Publications</h2>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="space-y-4">
                        {allPublications.map((pub, index) => (
                            <div key={index} className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-0">
                                <div className="text-gray-400 font-mono text-sm pt-1 w-12 text-right">{pub.year}</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 hover:text-osu-scarlet transition-colors">
                                        <Link href={pub.link}>{pub.title}</Link>
                                    </h4>
                                    <div className="text-sm text-gray-600 mt-1">{pub.journal}</div>
                                    <div className="text-sm text-gray-500 mt-1">{pub.authors}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
