"use client";

import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, ExternalLink } from "lucide-react";

const newsItems = [
    {
        title: "New Publication in mBio: Cardiac Dysfunction Driven by Extracellular Vesicles",
        date: "February 2026",
        category: "Publication",
        excerpt:
            "Our latest paper demonstrates that Pseudomonas aeruginosa-mediated cardiac dysfunction is driven by extracellular vesicles released during pulmonary infection, published in mBio.",
        link: "https://pubmed.ncbi.nlm.nih.gov/41537584/",
        external: true,
    },
    {
        title: "AMPK Activation Study Published",
        date: "2025",
        category: "Publication",
        excerpt:
            "New research on cardioprotective effects of AMPK activation in H1N1 influenza virus infection is now available on PubMed.",
        link: "https://pubmed.ncbi.nlm.nih.gov/40909698/",
        external: true,
    },
    {
        title: "NIH R56 Award: Macrophage Efflux in TB Pathogenesis",
        date: "August 2024",
        category: "Funding",
        excerpt:
            "The lab has been awarded an NIH/NIAID R56 High Priority Short-Term Project Award to study the mechanism of macrophage efflux system in Mycobacterium tuberculosis pathogenesis.",
        link: "/research",
        external: false,
    },
    {
        title: "AHA Transformational Project Award: CFTR and Cardiac Dysfunction",
        date: "July 2024",
        category: "Funding",
        excerpt:
            "Dr. Rajaram received an American Heart Association Transformational Project Award to investigate how dysfunctional CFTR aggravates cardiac dysfunction during infection (2024–2027).",
        link: "/research",
        external: false,
    },
    {
        title: "LPS Clearance Review Published",
        date: "2024",
        category: "Publication",
        excerpt:
            "Our review article 'The Battle of LPS Clearance in Host Defense vs. Inflammatory Signaling' is now available, providing a comprehensive overview of LPS handling in innate immunity.",
        link: "https://pubmed.ncbi.nlm.nih.gov/39329771/",
        external: true,
    },
    {
        title: "S100A8/A9 Cardiac Dysfunction Paper Published",
        date: "2023",
        category: "Publication",
        excerpt:
            "New work showing that Pseudomonas aeruginosa pulmonary infection results in S100A8/A9-dependent cardiac dysfunction has been published.",
        link: "https://pubmed.ncbi.nlm.nih.gov/37624851/",
        external: true,
    },
];

export default function BlogContent() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gray-50 py-20 px-6 bg-grid">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        News & Updates
                    </motion.h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl">
                        Recent publications, grants, and milestones from the Rajaram Lab.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-8">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8 last:border-0"
                        >
                            <div className="md:w-1/4 space-y-2 shrink-0">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                                <div
                                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                        item.category === "Funding"
                                            ? "bg-emerald-50 text-emerald-700"
                                            : "bg-osu-scarlet/10 text-osu-scarlet"
                                    }`}
                                >
                                    <Tag size={12} />
                                    {item.category}
                                </div>
                            </div>
                            <div className="md:w-3/4 space-y-3">
                                <h2 className="text-xl font-bold text-gray-900 hover:text-osu-scarlet transition-colors leading-snug">
                                    {item.external ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-2"
                                        >
                                            {item.title}
                                            <ExternalLink size={14} className="text-gray-400 mt-1 shrink-0" />
                                        </a>
                                    ) : (
                                        <a href={item.link}>{item.title}</a>
                                    )}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.excerpt}
                                </p>
                                {item.external ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-osu-scarlet hover:underline"
                                    >
                                        Read on PubMed <ExternalLink size={12} />
                                    </a>
                                ) : (
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-osu-scarlet hover:underline"
                                    >
                                        Learn more <ArrowRight size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
