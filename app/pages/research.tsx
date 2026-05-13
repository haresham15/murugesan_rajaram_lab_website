"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, ShieldAlert, Bug, Activity } from "lucide-react";

const researchAreas = [
    {
        title: "Cardiac Dysfunction During Infection",
        icon: <Heart className="w-12 h-12 text-osu-scarlet" />,
        description:
            "We investigate the pathogenesis of cardiac dysfunction caused by pneumonia-inducing bacterial and viral agents, including Pseudomonas aeruginosa and Influenza. Our recent work has identified that extracellular vesicles (EVs) — both host-derived exosomes and bacterial outer membrane vesicles — are key mediators of cardiac damage during pulmonary infection, even when bacterial dissemination into the heart is limited.",
        details: [
            "Mechanisms of P. aeruginosa-mediated cardiac dysfunction via extracellular vesicles",
            "S100A8/A9-dependent cardiac dysfunction during pulmonary infection",
            "Cardioprotective effects of AMPK activation in H1N1 influenza infection",
            "Dysfunctional CFTR and cardiac inflammation during infection (AHA-funded)",
        ],
        color: "from-red-50 to-rose-50",
    },
    {
        title: "Cardiac Macrophage Biology",
        icon: <ShieldAlert className="w-12 h-12 text-osu-scarlet" />,
        description:
            "Cardiac macrophages play critical roles in cardiac inflammation, fibrosis, tissue repair, and electrical conduction. We study their phenotype and function during both steady-state and infectious conditions, with a particular focus on how aging-mediated immune dysregulation — or 'inflammaging' — alters cardiac immune cell landscapes and increases susceptibility to infection-driven heart failure.",
        details: [
            "Phenotype and function of cardiac macrophages in steady-state and infection",
            "Impact of aging on cardiac immune cell phenotypes and susceptibility",
            "Crosstalk between cardiomyocytes and innate immune cells",
            "Influenza A virus modulation of ACE2 expression in human cardiomyocytes",
        ],
        color: "from-blue-50 to-indigo-50",
    },
    {
        title: "Mycobacterium tuberculosis Pathogenesis",
        icon: <Bug className="w-12 h-12 text-osu-scarlet" />,
        description:
            "Our laboratory studies the intricate interplay between Mycobacterium tuberculosis and its host. We aim to identify pathways utilized by M. tb to hijack the host immune system, with a focus on understanding how M. tb drives host cells to become drug-resistant — including through upregulation of drug efflux pumps such as MDR1. The ultimate goal is to shorten TB treatment regimens.",
        details: [
            "Mechanism of macrophage efflux system in M. tb pathogenesis (NIH R56-funded)",
            "PPARγ and CD36-mediated surfactant lipid uptake by alveolar macrophages",
            "Alveolar macrophage subpopulations and M. tb susceptibility",
            "Psychological stress and immune suppression in TB susceptibility in aged mice",
        ],
        color: "from-emerald-50 to-teal-50",
    },
    {
        title: "Infection, Inflammation & Emerging Disease",
        icon: <Activity className="w-12 h-12 text-osu-scarlet" />,
        description:
            "Our work extends to understanding how inflammatory pathways intersect with emerging infectious diseases and chronic inflammatory conditions. We investigate the regulation of LPS clearance in host defense, the role of the Renin-Angiotensin-Aldosterone System in granulomatous inflammation, and cross-infection dynamics between respiratory viruses.",
        details: [
            "The battle of LPS clearance in host defense vs. inflammatory signaling",
            "Renin-Angiotensin-Aldosterone System in sarcoidosis granulomatous inflammation",
            "Influenza A virus modulation of SARS-CoV-2 infectivity",
            "Editorial: Role of inflammation, stem cells, and progenitor cells in cardiovascular repair",
        ],
        color: "from-amber-50 to-yellow-50",
    },
];

export default function ResearchContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-20 px-6 bg-gray-50 bg-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Research Areas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-3xl mx-auto text-xl text-gray-500 font-light leading-relaxed"
                    >
                        Our lab applies a multidisciplinary approach combining immunology, microbiology, and
                        cardiovascular biology to understand how infections drive cardiac disease and how
                        pathogens evade host defense.
                    </motion.p>
                </div>
            </section>

            {/* Research Cards */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                {researchAreas.map((area, index) => (
                    <ResearchCard key={index} area={area} index={index} />
                ))}
            </div>

            {/* Techniques / Approaches Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                        Experimental Approaches
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Flow Cytometry",
                            "Animal Models",
                            "BSL-3 Facilities",
                            "Confocal Microscopy",
                            "RNA-seq / Transcriptomics",
                            "Primary Cell Culture",
                            "Extracellular Vesicle Isolation",
                            "Cardiomyocyte Assays",
                        ].map((technique) => (
                            <div
                                key={technique}
                                className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-700 text-center shadow-sm"
                            >
                                {technique}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function ResearchCard({
    area,
    index,
}: {
    area: (typeof researchAreas)[0];
    index: number;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className={`flex flex-col md:flex-row items-start gap-12 py-16 border-b border-gray-100 last:border-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
        >
            <div className="flex-1 space-y-6">
                <div
                    className={`bg-gradient-to-br ${area.color} inline-block p-4 rounded-2xl`}
                >
                    {area.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {area.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                <ul className="space-y-3 pt-2">
                    {area.details.map((detail, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700 text-sm"
                        >
                            <span className="w-1.5 h-1.5 bg-osu-scarlet rounded-full mt-2 shrink-0" />
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Visual accent panel */}
            <div className="flex-1 hidden md:block">
                <div
                    className={`aspect-[4/3] bg-gradient-to-br ${area.color} rounded-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden group`}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent" />
                    <div className="z-10 text-center p-8">
                        <div className="text-6xl text-gray-200/80 font-bold mb-2">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                            Research Area
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
