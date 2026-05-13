import Link from "next/link";
import { Microscope, ExternalLink } from "lucide-react";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
];

const externalLinks = [
    { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/?term=Rajaram+MV&sort=date" },
    { label: "ORCID", href: "https://orcid.org/0000-0002-1515-1122" },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Murugesan-Rajaram" },
    { label: "OSU College of Medicine", href: "https://medicine.osu.edu" },
];

export default function Footer() {
    return (
        <footer className="bg-osu-dark text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-osu-scarlet rounded-lg flex items-center justify-center">
                                <Microscope className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-lg">Rajaram Lab</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Advancing our understanding of cardiac dysfunction during infection and Mycobacterium tuberculosis pathogenesis.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold text-osu-scarlet">FAHA</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">Fellow of the American Heart Association</span>
                        </div>
                    </div>

                    {/* Site Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Navigate</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* External Resources */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-2">
                            {externalLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                                    >
                                        {link.label}
                                        <ExternalLink size={12} className="opacity-50" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Affiliation */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Affiliation</h3>
                        <div className="text-sm text-gray-400 space-y-1">
                            <p className="text-white font-medium">The Ohio State University</p>
                            <p>College of Medicine</p>
                            <p>Department of Microbial Infection and Immunity</p>
                        </div>
                        <div className="text-sm text-gray-400 space-y-1 pt-2">
                            <p>Biomedical Research Tower</p>
                            <p>460 W 12th Ave</p>
                            <p>Columbus, OH 43210</p>
                        </div>
                        <a
                            href="mailto:Murugesan.Rajaram@osumc.edu"
                            className="inline-block text-sm text-osu-scarlet hover:text-red-400 transition-colors mt-2"
                        >
                            Murugesan.Rajaram@osumc.edu
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rajaram Lab, The Ohio State University. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="https://medicine.osu.edu" target="_blank" className="hover:text-gray-300 transition-colors">
                            OSU College of Medicine
                        </Link>
                        <Link href="https://osu.edu" target="_blank" className="hover:text-gray-300 transition-colors">
                            The Ohio State University
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
