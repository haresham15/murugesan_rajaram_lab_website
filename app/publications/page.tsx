import PublicationsContent from "../pages/publications";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications | Rajaram Lab",
    description: "Key publications and research output from the Rajaram Lab at OSU.",
};

export default function PublicationsPage() {
    return <PublicationsContent />;
}
