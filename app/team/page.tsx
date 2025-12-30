import TeamContent from "../pages/team";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team | Rajaram Lab",
    description: "Meet Dr. Murugesan Rajaram and the research team.",
};

export default function TeamPage() {
    return <TeamContent />;
}
