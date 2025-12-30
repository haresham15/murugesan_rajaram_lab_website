import OpportunitiesContent from "../pages/opportunities";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Opportunities | Rajaram Lab",
    description: "Join the Rajaram Lab at OSU.",
};

export default function OpportunitiesPage() {
    return <OpportunitiesContent />;
}
