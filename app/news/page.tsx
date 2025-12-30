import BlogContent from "../pages/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News | Rajaram Lab",
    description: "Latest news and updates from the Rajaram Lab.",
};

export default function NewsPage() {
    return <BlogContent />;
}
