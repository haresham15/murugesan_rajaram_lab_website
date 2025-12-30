"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Heart, ShieldAlert } from "lucide-react";

const researchAreas = [
    {
        title: "Innate Immunity in Heart Failure",
        icon: <ShieldAlert className="w-12 h-12 text-osu-scarlet" />,
        description: "Investigating how innate immune receptors (TLRs, NLRs) recognize danger signals released from damaged cardiac tissue and initiate inflammatory responses that contribute to heart failure progression.",
        details: [
            "Role of macrophage subsets in cardiac remodeling",
            "Signaling pathways linking metabolism and inflammation",
            "Therapeutic targeting of inflammasomes"
        ]
    },
    {
        title: "Macrophage Signaling Mechanisms",
        icon: <Activity className="w-12 h-12 text-osu-scarlet" />,
        description: "Deciphering the molecular checkpoints that regulate macrophage activation and polarization in the ischemic heart. We focus on the balance between reparative and destructive immune responses.",
        details: [
            "Transcriptional regulation of macrophage plasticity",
            "Crosstalk between cardiomyocytes and immune cells",
            "Impact of aging on immune responses"
        ]
    },
    {
        title: "Therapeutic Targets for Cardiac Inflammation",
        icon: <Heart className="w-12 h-12 text-osu-scarlet" />,
        description: "Translating molecular findings into novel therapeutic strategies. We are testing small molecule inhibitors and biologics that can dampen harmful inflammation while preserving host defense.",
        details: [
            "Preclinical models of myocardial infarction",
            "Biomarker discovery for patient stratification",
            "Drug delivery systems for cardiac-specific targeting"
        ]
    }
];

export default function ResearchContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-20 px-6 bg-gray-50 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-gray-900 mb-6"
                >
                    Research Areas
                </motion.h1>
                <p className="max-w-3xl mx-auto text-xl text-gray-600 font-light">
                    Our lab applies a multidisciplinary approach combining immunology, cardiology, and molecular biology to solve critical problems in heart disease.
                </p>
            </section>

            {/* Scrollytelling Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                {researchAreas.map((area, index) => (
                    <ResearchCard key={index} area={area} index={index} />
                ))}
            </div>
        </div>
    );
}

function ResearchCard({ area, index }: { area: typeof researchAreas[0], index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className={`flex flex-col md:flex-row items-center gap-12 py-24 border-b border-gray-100 last:border-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex-1 space-y-6">
                <div className="bg-osu-scarlet/5 inline-block p-4 rounded-2xl mb-4">
                    {area.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{area.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {area.description}
                </p>
                <ul className="space-y-3 pt-4">
                    {area.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="w-1.5 h-1.5 bg-osu-scarlet rounded-full mt-2.5" />
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex items-center justify-center relative group">
                    {/* Placeholder for scientific illustration */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white opacity-50" />
                    <div className="z-10 text-center p-8">
                        <div className="text-4xl text-gray-300 font-bold mb-2">FIG 0{index + 1}</div>
                        <p className="text-gray-400 text-sm">Interactive Visual Placeholder</p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-osu-scarlet/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold tracking-wider">View Data</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
