"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Microscope,
    BookOpen,
    Award,
    Heart,
    ShieldAlert,
    Bug,
    ExternalLink,
    FlaskConical,
} from "lucide-react";

const researchPillars = [
    {
        title: "Cardiac Dysfunction During Infection",
        description:
            "Investigating how bacterial and viral pneumonia (P. aeruginosa, Influenza) drives cardiac dysfunction through extracellular vesicles and inflammatory mediators.",
        icon: <Heart className="w-8 h-8" />,
        href: "/research",
    },
    {
        title: "Cardiac Macrophage Biology",
        description:
            "Studying the phenotype and function of cardiac macrophages in steady-state heart function, infection, and aging-mediated immune dysregulation.",
        icon: <ShieldAlert className="w-8 h-8" />,
        href: "/research",
    },
    {
        title: "Tuberculosis Pathogenesis",
        description:
            "Deciphering host-pathogen interplay in M. tuberculosis infection, including macrophage efflux systems and drug resistance mechanisms.",
        icon: <Bug className="w-8 h-8" />,
        href: "/research",
    },
];

const recentPublications = [
    {
        title: "Pseudomonas aeruginosa-mediated cardiac dysfunction is driven by extracellular vesicles released during infection",
        journal: "mBio",
        year: "2026",
        pmid: "41537584",
    },
    {
        title: "Cardioprotective effects of AMPK activation in H1N1 influenza virus infection",
        journal: "PubMed",
        year: "2025",
        pmid: "40909698",
    },
    {
        title: "The Battle of LPS Clearance in Host Defense vs. Inflammatory Signaling",
        journal: "PubMed",
        year: "2024",
        pmid: "39329771",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0, 0, 0.58, 1] as const },
    }),
};

export default function HomeContent() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* ─── Hero Section ─── */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-osu-dark text-white overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-osu-dark/90 to-osu-scarlet/20 z-10" />
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 z-[5] opacity-30 bg-grid" />

                {/* Animated accent circles */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-osu-scarlet/10 rounded-full blur-3xl z-[6] animate-float" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-osu-scarlet/5 rounded-full blur-3xl z-[6] animate-float" style={{ animationDelay: "3s" }} />

                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium text-gray-300">
                            <FlaskConical className="w-4 h-4 text-osu-scarlet" />
                            The Ohio State University · College of Medicine
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-balance">
                            Cardiac Immunity{" "}
                            <span className="text-osu-scarlet">&</span>{" "}
                            Tuberculosis Pathogenesis
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                            The Rajaram Lab investigates host-pathogen interactions driving cardiac dysfunction during infection
                            and the molecular mechanisms of{" "}
                            <em className="text-gray-200">Mycobacterium tuberculosis</em> drug resistance.
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
                            className="px-8 py-4 bg-osu-scarlet text-white text-lg font-semibold rounded-full hover:bg-osu-scarlet-dark transition-all transform hover:scale-105 shadow-xl shadow-red-900/20 flex items-center gap-2"
                        >
                            Explore Research <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/publications"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                            Publications <BookOpen className="w-5 h-5" />
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

            {/* ─── PI Bio / Mission Section ─── */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-osu-scarlet pl-6">
                            Understanding Host Responses to Microbial Infections
                        </h2>
                        <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
                            <p>
                                Dr. Murugesan Rajaram, PhD, FAHA, is an Associate Professor in the
                                Department of Microbial Infection and Immunity at The Ohio State
                                University College of Medicine.
                            </p>
                            <p>
                                His research program focuses on understanding the molecular mechanisms
                                of host responses to human microbial infections. Using both animal and
                                <em> in vitro</em> models, the lab investigates cardiac dysfunction
                                caused by pneumonia-inducing agents and the mechanisms of drug
                                resistance in <em>Mycobacterium tuberculosis</em>.
                            </p>
                        </div>
                        <div className="pt-2 flex flex-wrap gap-4">
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 border border-gray-100">
                                <div className="bg-osu-scarlet/10 p-2.5 rounded-full text-osu-scarlet">
                                    <Award size={22} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">FAHA</div>
                                    <div className="text-sm text-gray-500">
                                        Fellow of the American Heart Association
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 border border-gray-100">
                                <div className="bg-osu-scarlet/10 p-2.5 rounded-full text-osu-scarlet">
                                    <BookOpen size={22} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">h-index 42</div>
                                    <div className="text-sm text-gray-500">
                                        Google Scholar Citations
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 ring-1 ring-gray-200">
                            <img
                                src="/labteampics/murugesanrajaramheadshot.jpg"
                                alt="Dr. Murugesan Rajaram, PhD, FAHA"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating stat card */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 flex flex-col gap-1 md:block hidden border border-gray-100">
                            <div className="text-3xl font-bold text-osu-scarlet">70+</div>
                            <div className="text-sm text-gray-600 font-medium">Publications</div>
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-osu-scarlet/20 rounded-2xl -z-10 hidden md:block" />
                    </motion.div>
                </div>
            </section>

            {/* ─── Research Pillars ─── */}
            <section className="py-24 px-6 bg-gray-50 bg-grid">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Research Focus Areas
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Our multidisciplinary approach combines immunology, microbiology, and
                            cardiovascular biology to address critical questions in infectious disease.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {researchPillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <Link
                                    href={pillar.href}
                                    className="group block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-osu-scarlet/20 transition-all duration-300 h-full"
                                >
                                    <div className="w-14 h-14 bg-osu-scarlet/10 rounded-xl flex items-center justify-center text-osu-scarlet mb-6 group-hover:bg-osu-scarlet group-hover:text-white transition-all duration-300">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-osu-scarlet transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {pillar.description}
                                    </p>
                                    <div className="mt-6 text-sm font-semibold text-osu-scarlet flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowRight size={14} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Recent Publications ─── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between mb-12"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Recent Publications</h2>
                            <p className="text-gray-500 mt-2">Latest peer-reviewed research from the lab</p>
                        </div>
                        <Link
                            href="/publications"
                            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-osu-scarlet hover:underline"
                        >
                            View all <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                    <div className="space-y-4">
                        {recentPublications.map((pub, index) => (
                            <motion.a
                                key={pub.pmid}
                                href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="group flex items-start gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-osu-scarlet/20 hover:shadow-md transition-all"
                            >
                                <div className="text-sm font-mono text-gray-400 pt-1 w-12 text-right shrink-0">
                                    {pub.year}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-osu-scarlet transition-colors leading-snug">
                                        {pub.title}
                                    </h4>
                                    <div className="text-sm text-gray-500 mt-1.5 flex items-center gap-2">
                                        <span className="font-medium text-gray-600">{pub.journal}</span>
                                        <span className="text-gray-300">•</span>
                                        <span>PMID: {pub.pmid}</span>
                                    </div>
                                </div>
                                <ExternalLink size={16} className="text-gray-300 group-hover:text-osu-scarlet transition-colors mt-1 shrink-0" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            href="/publications"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-osu-scarlet"
                        >
                            View all publications <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Funding Banner ─── */}
            <section className="py-16 px-6 bg-osu-dark text-white">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold">Funded by Leading Institutions</h3>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Our research is supported by the National Institutes of Health (NIH/NIAID) and the American Heart Association (AHA).
                        </p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
                            <Microscope size={20} className="text-osu-scarlet" />
                            <span className="font-medium text-white">NIH / NIAID</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
                            <Heart size={20} className="text-osu-scarlet" />
                            <span className="font-medium text-white">American Heart Association</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
