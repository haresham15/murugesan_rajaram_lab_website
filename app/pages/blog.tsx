"use client";

import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
    {
        title: "Lab Awarded R01 Grant from NIH/NHLBI",
        date: "October 15, 2024",
        category: "Funding",
        excerpt: "We are thrilled to announce that the Rajaram Lab has been awarded a new R01 grant to investigate the role of macrophage metabolic reprogramming in cardiac ischemia-reperfusion injury.",
        slug: "#"
    },
    {
        title: "New Publication in Circulation Research",
        date: "September 2, 2024",
        category: "Publications",
        excerpt: "Our latest work identifying a novel mechanism of inflammasome activation in cardiomyocytes is now online. Congratulations to first author Dr. Sarah Chen!",
        slug: "#"
    },
    {
        title: "Dr. Rajaram Elected FAHA",
        date: "July 12, 2024",
        category: "Awards",
        excerpt: "Dr. Murugesan Rajaram has been elected as a Fellow of the American Heart Association (FAHA) by the Council on Basic Cardiovascular Sciences, recognizing his major contributions to the field.",
        slug: "#"
    },
    {
        title: "Welcome New Grad Students",
        date: "May 20, 2024",
        category: "Lab Life",
        excerpt: "The lab welcomes two new rotation students from the BSGP program. We look forward to a productive summer of research!",
        slug: "#"
    }
];

export default function BlogContent() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-gray-900 mb-6"
                    >
                        News & Updates
                    </motion.h1>
                    <p className="text-xl text-gray-600 font-light max-w-2xl">
                        The latest research breakthroughs, awards, and team updates from the Rajaram Lab.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-12">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0"
                        >
                            <div className="md:w-1/4 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar size={14} /> {item.date}
                                </div>
                                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-osu-scarlet/10 text-osu-scarlet text-xs font-semibold">
                                    <Tag size={12} /> {item.category}
                                </div>
                            </div>
                            <div className="md:w-3/4 space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 hover:text-osu-scarlet transition-colors">
                                    <Link href={item.slug}>{item.title}</Link>
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.excerpt}
                                </p>
                                <Link href={item.slug} className="inline-flex items-center gap-1 text-sm font-semibold text-osu-scarlet hover:underline">
                                    Read more <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
