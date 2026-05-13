"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

interface Publication {
    title: string;
    journal: string;
    year: string;
    authors: string;
    pmid: string;
    featured?: boolean;
}

const publications: Publication[] = [
    {
        title: "Pseudomonas aeruginosa-mediated cardiac dysfunction is driven by extracellular vesicles released during infection",
        journal: "mBio",
        year: "2026",
        authors: "Kumar N, Salam S, et al., Rajaram MV.",
        pmid: "41537584",
        featured: true,
    },
    {
        title: "Cardioprotective effects of AMPK activation in H1N1 influenza virus infection",
        journal: "PubMed",
        year: "2025",
        authors: "Rajaram MV, et al.",
        pmid: "40909698",
        featured: true,
    },
    {
        title: "The Battle of LPS Clearance in Host Defense vs. Inflammatory Signaling",
        journal: "Cells",
        year: "2024",
        authors: "Rajaram MV, et al.",
        pmid: "39329771",
        featured: true,
    },
    {
        title: "The Renin-Angiotensin-Aldosterone System Regulates Sarcoidosis Granulomatous Inflammation",
        journal: "Journal of Clinical Investigation",
        year: "2024",
        authors: "Rajaram MV, et al.",
        pmid: "38941161",
    },
    {
        title: "Pseudomonas aeruginosa pulmonary infection results in S100A8/A9-dependent cardiac dysfunction",
        journal: "PLoS Pathogens",
        year: "2023",
        authors: "Rajaram MV, et al.",
        pmid: "37624851",
    },
    {
        title: "The Many Hosts of Mycobacteria 9 (MHM9): A conference report",
        journal: "Tuberculosis",
        year: "2023",
        authors: "Rajaram MV, et al.",
        pmid: "37531864",
    },
    {
        title: "Editorial: The role of inflammation, stem cells and progenitor cells in cardiovascular repair",
        journal: "Frontiers in Cardiovascular Medicine",
        year: "2023",
        authors: "Rajaram MV, et al.",
        pmid: "37144059",
    },
    {
        title: "Influenza A virus modulates ACE2 expression and SARS-CoV-2 infectivity in human cardiomyocytes",
        journal: "iScience",
        year: "2022",
        authors: "Rajaram MV, et al.",
        pmid: "36474635",
    },
    {
        title: "Psychological stress creates an immune suppressive environment in the lung that increases susceptibility of aged mice to Mycobacterium tuberculosis infection",
        journal: "Frontiers in Immunology",
        year: "2022",
        authors: "Rajaram MV, et al.",
        pmid: "36189368",
    },
];

const featuredPubs = publications.filter((p) => p.featured);
const allPubs = publications;

export default function PublicationsContent() {
    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <section className="bg-gray-50 py-20 px-6 bg-grid">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Publications
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 mb-8 max-w-2xl"
                    >
                        Peer-reviewed research from the Rajaram Lab. For a complete list, see our external profiles.
                    </motion.p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://pubmed.ncbi.nlm.nih.gov/?term=Rajaram+MV&sort=date"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:border-osu-scarlet/30 hover:shadow-sm transition-all"
                        >
                            <FileText size={16} className="text-osu-scarlet" /> PubMed
                            <ExternalLink size={12} className="text-gray-400" />
                        </a>
                        <a
                            href="https://scholar.google.com/citations?user=_search_Murugesan_Rajaram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:border-osu-scarlet/30 hover:shadow-sm transition-all"
                        >
                            <BookOpen size={16} className="text-osu-scarlet" /> Google Scholar
                            <ExternalLink size={12} className="text-gray-400" />
                        </a>
                        <a
                            href="https://orcid.org/0000-0002-1515-1122"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:border-osu-scarlet/30 hover:shadow-sm transition-all"
                        >
                            ORCID
                            <ExternalLink size={12} className="text-gray-400" />
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 pt-16">
                {/* Featured Papers */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Recent Highlights
                        </h2>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="grid gap-6">
                        {featuredPubs.map((pub, index) => (
                            <motion.a
                                key={pub.pmid}
                                href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:border-osu-scarlet/30"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-osu-scarlet rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-osu-scarlet transition-colors leading-snug">
                                            {pub.title}
                                        </h3>
                                        <div className="text-gray-600 font-medium mb-3">
                                            <span className="italic">{pub.journal}</span>
                                            <span className="text-gray-300 mx-2">•</span>
                                            {pub.year}
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">
                                            {pub.authors}
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium border border-gray-100">
                                            PMID: {pub.pmid}
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={18}
                                        className="text-gray-300 group-hover:text-osu-scarlet transition-colors shrink-0 mt-1"
                                    />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

                {/* All Publications */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Selected Publications
                        </h2>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="space-y-2">
                        {allPubs.map((pub, index) => (
                            <a
                                key={pub.pmid}
                                href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-5 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="text-gray-400 font-mono text-sm pt-1 w-12 text-right shrink-0">
                                    {pub.year}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-osu-scarlet transition-colors leading-snug">
                                        {pub.title}
                                    </h4>
                                    <div className="text-sm text-gray-500 mt-1">
                                        <span className="italic">{pub.journal}</span>
                                        <span className="text-gray-300 mx-2">•</span>
                                        PMID: {pub.pmid}
                                    </div>
                                </div>
                                <ExternalLink
                                    size={14}
                                    className="text-gray-300 group-hover:text-osu-scarlet transition-colors mt-1 shrink-0"
                                />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
