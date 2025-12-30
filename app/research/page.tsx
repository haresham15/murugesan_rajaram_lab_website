import ResearchContent from "../pages/research";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research | Rajaram Lab",
    description: "Explore our research on innate immunity and heart failure.",
};

export default function ResearchPage() {
    return <ResearchContent />;
}
