"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, GraduationCap, ExternalLink, BookOpen } from "lucide-react";

export default function ContactContent() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-osu-dark text-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        Interested in our research or collaboration? We&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Location */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <MapPin className="text-osu-scarlet" /> Lab Location
                            </h2>
                            <div className="space-y-2 text-gray-600">
                                <p className="font-semibold text-gray-900">
                                    Biomedical Research Tower
                                </p>
                                <p>Room 305 (Office) / 360 (Lab)</p>
                                <p>460 W 12th Ave</p>
                                <p>Columbus, OH 43210</p>
                            </div>
                        </div>

                        {/* Contact Methods */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Mail className="text-osu-scarlet" /> Get in Touch
                            </h2>
                            <div className="space-y-3">
                                <a
                                    href="mailto:Murugesan.Rajaram@osumc.edu"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:border-osu-scarlet/30 transition-all group"
                                >
                                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-osu-scarlet/10 transition-colors">
                                        <Mail
                                            className="text-gray-500 group-hover:text-osu-scarlet"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                            Email
                                        </div>
                                        <div className="font-medium text-gray-900">
                                            Murugesan.Rajaram@osumc.edu
                                        </div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                                        <Phone className="text-gray-500" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                            Phone
                                        </div>
                                        <div className="font-medium text-gray-900">
                                            614-366-4660
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Academic Profiles */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Academic Profiles
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <ProfileLink
                                    icon={<BookOpen size={18} />}
                                    href="https://pubmed.ncbi.nlm.nih.gov/?term=Rajaram+MV&sort=date"
                                    label="PubMed"
                                />
                                <ProfileLink
                                    icon={<GraduationCap size={18} />}
                                    href="https://orcid.org/0000-0002-1515-1122"
                                    label="ORCID"
                                />
                                <ProfileLink
                                    icon={<GraduationCap size={18} />}
                                    href="https://www.researchgate.net/profile/Murugesan-Rajaram"
                                    label="ResearchGate"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-inner relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.417257912384!2d-83.0183188846168!3d40.00049997941543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ec0c54157d7%3A0x6b3b55239dfc6183!2sBiomedical%20Research%20Tower!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale-[50%] contrast-110 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            title="Biomedical Research Tower, OSU"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ProfileLink({
    icon,
    href,
    label,
}: {
    icon: React.ReactNode;
    href: string;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 hover:border-osu-scarlet/30 hover:text-osu-scarlet transition-all shadow-sm group"
        >
            {icon}
            <span className="text-sm font-medium">{label}</span>
            <ExternalLink
                size={12}
                className="text-gray-400 group-hover:text-osu-scarlet transition-colors"
            />
        </a>
    );
}
