"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap, Award, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    {
        name: "Naresh Kumar",
        role: "Researcher",
        image: null,
    },
    {
        name: "Sameerul Salam",
        role: "Post Doctoral Scholar",
        image: null,
    },
    {
        name: "Arnav Gopinath",
        role: "Undergraduate Student",
        image: null,
    },
    {
        name: "Simran Grissom",
        role: "Undergraduate Student",
        image: null,
    },
    {
        name: "Lasya Kopuri",
        role: "Undergraduate Student",
        image: null,
    },
    {
        name: "Aakash Shah",
        role: "Undergraduate Student",
        image: null,
    },
];

const grants = [
    {
        agency: "NIH / NIAID",
        title: "Mechanism of macrophage efflux system in Mycobacterium tuberculosis pathogenesis",
        role: "Principal Investigator",
        years: "Aug 2024 – Jul 2026",
        type: "R56 High Priority Short-Term Project Award",
    },
    {
        agency: "American Heart Association",
        title: "Dysfunctional CFTR aggravates cardiac dysfunction during infection",
        role: "Principal Investigator",
        years: "Jul 2024 – Jun 2027",
        type: "Transformational Project Award",
    },
];

export default function TeamContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* PI Section */}
            <section className="bg-gray-50 py-20 px-6 bg-grid">
                <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-5"
                    >
                        <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                            <img
                                src="/labteampics/murugesanrajaramheadshot.jpg"
                                alt="Dr. Murugesan Rajaram, PhD, FAHA"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <a
                                href="mailto:Murugesan.Rajaram@osumc.edu"
                                className="flex items-center gap-3 text-gray-600 hover:text-osu-scarlet transition-colors bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                            >
                                <Mail size={18} />
                                <span className="text-sm font-medium">Email Dr. Rajaram</span>
                            </a>
                            <a
                                href="https://pubmed.ncbi.nlm.nih.gov/?term=Rajaram+MV&sort=date"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-osu-scarlet transition-colors bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                            >
                                <BookOpen size={18} />
                                <span className="text-sm font-medium">PubMed</span>
                                <ExternalLink size={12} className="ml-auto text-gray-400" />
                            </a>
                            <a
                                href="https://orcid.org/0000-0002-1515-1122"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-osu-scarlet transition-colors bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                            >
                                <GraduationCap size={18} />
                                <span className="text-sm font-medium">ORCID</span>
                                <ExternalLink size={12} className="ml-auto text-gray-400" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Murugesan Rajaram, PhD, FAHA
                            </h1>
                            <p className="text-xl text-osu-scarlet font-medium">
                                Associate Professor & Principal Investigator
                            </p>
                            <p className="text-gray-500 mt-1">
                                Department of Microbial Infection and Immunity
                            </p>
                        </div>

                        <div className="text-gray-600 space-y-4 leading-relaxed">
                            <p>
                                Dr. Rajaram leads a dynamic research team dedicated to understanding the molecular mechanisms of host responses to microbial infections. His research program focuses on two major areas: the pathogenesis of cardiac dysfunction caused by pneumonia-inducing bacterial and viral agents, and the mechanisms of drug resistance in <em>Mycobacterium tuberculosis</em>.
                            </p>
                            <p>
                                He received his PhD in Microbiology from the University of Madras, India, and completed postdoctoral training at the University of Paris and The Ohio State University. As a Fellow of the American Heart Association (FAHA), Dr. Rajaram has been recognized for his contributions to the field of cardiac complications during infection.
                            </p>
                        </div>

                        {/* Honors & Funding */}
                        <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Award className="text-osu-scarlet" /> Active Funding
                            </h3>

                            <div className="grid gap-4">
                                {grants.map((grant, i) => (
                                    <div
                                        key={i}
                                        className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
                                    >
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                            <span className="text-sm font-bold text-osu-scarlet tracking-wide">
                                                {grant.agency}
                                            </span>
                                            <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                                                {grant.years}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 leading-snug">
                                            {grant.title}
                                        </h4>
                                        <div className="text-sm text-gray-500 mt-2 flex flex-wrap gap-2">
                                            <span className="bg-gray-50 px-2 py-0.5 rounded text-xs">
                                                {grant.type}
                                            </span>
                                            <span className="bg-gray-50 px-2 py-0.5 rounded text-xs">
                                                {grant.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div className="bg-osu-scarlet/5 p-4 rounded-xl border border-osu-scarlet/10 flex items-center gap-3">
                                    <Award className="text-osu-scarlet shrink-0" />
                                    <div>
                                        <div className="font-bold text-gray-900">
                                            Fellow of the American Heart Association (FAHA)
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Council on Basic Cardiovascular Sciences
                                        </div>
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
                    <h2 className="text-3xl font-bold text-gray-900">
                        Lab Members
                    </h2>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                            {/* Avatar with initials */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-osu-scarlet/10 group-hover:text-osu-scarlet transition-all">
                                    {member.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900 group-hover:text-osu-scarlet transition-colors text-lg">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-osu-scarlet font-medium mt-1">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
