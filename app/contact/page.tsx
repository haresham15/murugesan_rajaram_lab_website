import ContactContent from "../pages/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Rajaram Lab",
    description: "Contact information for the Rajaram Lab at OSU.",
};

export default function ContactPage() {
    return <ContactContent />;
}
