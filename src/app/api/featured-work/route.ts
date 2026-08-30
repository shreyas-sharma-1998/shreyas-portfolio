import { NextResponse } from "next/server";

const tabs = [
    {
        id: "projects",
        label: "Projects",
        items: [
            {
                title: "Deferred Deeplink System",
                subtitle: "Microsoft Copilot · Growth Engineering",
                image: "/images/feature-work/feature-img-1.png",
                action: {
                    type: "modal",
                    details: {
                        description: "Built a device-fingerprint-based deferred deeplink system for Microsoft Copilot's Growth Team. When a user installs the app through a marketing campaign, their context (e.g. a pre-filled prompt) is stored against a device fingerprint and retrieved on first open — enabling personalised onboarding at scale.",
                        extras: [
                            { label: "Role", value: "Backend Engineer · Growth Engineering" },
                            { label: "Tech Stack", value: "Device Fingerprinting, Android, iOS, Campaign Attribution" },
                            { label: "Impact", value: "Enables context-aware onboarding for users acquired through campaigns" }
                        ],
                        links: []
                    }
                }
            },
            {
                title: "ML-Powered Products in Video",
                subtitle: "Amazon miniTV · Backend & ML",
                image: "/images/feature-work/feature-img-2.png",
                action: {
                    type: "modal",
                    details: {
                        description: "Built a system that identifies products appearing in videos and surfaces relevant Amazon shopping ads in real time. Integrated AWS SageMaker and OpenSearch (KNN) into three production pipelines — Training, Pre-processing, and Inference.",
                        extras: [
                            { label: "Role", value: "Backend Engineer · ML Integration" },
                            { label: "Tech Stack", value: "AWS SageMaker, OpenSearch, KNN, Lambda, Glue, Step Functions, Python" },
                            { label: "Impact", value: "10× faster identification (10 min → 1 min) · 60% better accuracy · 10–12M images" }
                        ],
                        links: []
                    }
                }
            }
        ]
    },
    {
        id: "books",
        label: "Books",
        items: [
            {
                title: "The Pragmatic Programmer",
                subtitle: "David Thomas & Andrew Hunt",
                image: "/images/feature-work/feature-img-1.png",
                action: {
                    type: "modal",
                    details: {
                        description: "A timeless guide on software craftsmanship — covering pragmatic thinking, avoiding technical debt, and writing adaptable, maintainable code.",
                        extras: [
                            { label: "Genre", value: "Software Engineering" },
                            { label: "My Take", value: "Placeholder — add your thoughts here." }
                        ],
                        links: []
                    }
                }
            },
            {
                title: "Designing Data-Intensive Applications",
                subtitle: "Martin Kleppmann",
                image: "/images/feature-work/feature-img-2.png",
                action: {
                    type: "modal",
                    details: {
                        description: "Deep dive into the principles behind reliable, scalable, and maintainable data systems — covering databases, distributed systems, and stream processing.",
                        extras: [
                            { label: "Genre", value: "System Design · Distributed Systems" },
                            { label: "My Take", value: "Placeholder — add your thoughts here." }
                        ],
                        links: []
                    }
                }
            }
        ]
    },
    {
        id: "blogs",
        label: "Blogs",
        items: [
            {
                title: "Coming Soon",
                subtitle: "Writing in progress...",
                image: "/images/feature-work/feature-img-1.png",
                action: {
                    type: "modal",
                    details: {
                        description: "Blog posts are on the way. Topics will include system design, growth engineering, and lessons from building products at scale.",
                        extras: [],
                        links: []
                    }
                }
            }
        ]
    }
];

export const GET = async () => {
    return NextResponse.json({ tabs });
};
