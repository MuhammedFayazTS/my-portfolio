import { quickSocials } from "@/content/data";

export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Muhammed Fayaz T S",
        url: "https://www.muhammedfayazts.in",
        jobTitle: "Software Engineer",

        address: {
            "@type": "PostalAddress",
            addressLocality: "Kerala",
            addressCountry: "India",
        },

        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "IGNOU",
        },

        sameAs: quickSocials.map(s => s.url),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}