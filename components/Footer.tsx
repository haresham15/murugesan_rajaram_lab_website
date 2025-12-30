import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">Rajaram Lab</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Advancing cardiovascular science through cutting-edge research in immunology and disease mechanisms.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="font-semibold text-osu-scarlet">FAHA</span>
                        Fellow of the American Heart Association
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">Affiliation</h3>
                    <p className="text-sm text-gray-500">
                        The Ohio State University <br />
                        College of Medicine <br />
                        Department of Microbial Infection and Immunity
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">Contact</h3>
                    <div className="text-sm text-gray-500 space-y-2">
                        <p>Biomedical Research Tower</p>
                        <p>460 W 12th Ave, Columbus, OH 43210</p>
                        <a href="mailto:Murugesan.Rajaram@osumc.edu" className="block text-osu-scarlet hover:underline">
                            Murugesan.Rajaram@osumc.edu
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Rajaram Lab. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="https://medicine.osu.edu" className="hover:text-osu-scarlet transition-colors">OSU College of Medicine</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
