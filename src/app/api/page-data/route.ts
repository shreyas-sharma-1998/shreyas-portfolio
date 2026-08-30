import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/microsoft-logo.png",
        role: "Software Development Engineer II — Microsoft Copilot",
        location: "Hyderabad, India",
        startYear: "Aug 2025",
        endYear: "Present",
        bulletPoints: [
            "Part of the Growth Team for Microsoft Copilot, driving user acquisition and retention for one of Microsoft's flagship AI products",
            "Built a Deferred Deeplink system using device fingerprinting to preserve campaign context across app installs, enabling personalised onboarding (e.g. pre-filling prompts) for users who install the app through marketing campaigns",
            "Led the migration of Microsoft 365 Copilot free users to the paid Copilot app, coordinating cross-functional efforts to ensure a seamless transition"
        ]
    },
    {
        icon: "/images/icon/amazon-logo.png",
        role: "Software Development Engineer II — Amazon miniTV",
        location: "Bangalore, India",
        startYear: "Aug 2021",
        endYear: "Feb 2025",
        bulletPoints: [
            "Launched static image ads on miniTV, introducing a new ad format that created a dedicated revenue stream now contributing 25–30% of total ad revenue; automated ad ingestion with dynamic slot management reduced maintenance overhead by 20%.",
            "Redesigned the ad break experience to show multiple ads within a single break instead of one — reducing total ad interruptions for viewers while boosting video completion rates from 90% to 94% and achieving a 99% completion rate on the second ad, cutting Time To First Frame by 50ms via a backend-driven architecture.",
            "Built a system that identifies products appearing in videos and surfaces relevant Amazon shopping ads in real time, so viewers can discover and buy what they see. Used AWS SageMaker and OpenSearch (KNN) to reduce product identification time from 10 minutes to 1 minute (10× faster) with 60% better accuracy across 10–12 million images.",
            "Enabled brands to deliver creatively rich video ads through server-driven templates — ranging from interactive overlays like a buy button alongside the video, to immersive animations like a product bursting out of the screen, all configurable without app updates."
        ]
    },
    {
        icon: "/images/icon/ronin-labs-logo.jpeg",
        role: "Creative Programming Developer — Ronin Labs",
        location: "Pune, India",
        startYear: "Sep 2020",
        endYear: "Dec 2020",
        bulletPoints: [
            "Contributed to building OnePlusWorld for the OnePlus 8T launch, collaborating on interactive web experiences using JavaScript, ThreeJS, and Node"
        ]
    },
]

const educationData = [
    {
        date: "2017 – 2021",
        title: "Bachelor of Technology in Computer Science",
        subtitle: "Ujjain Engineering College, Ujjain"
    },
];


const projectOverview = {
    caseStudies: [
        { name: "Deferred Deeplink System — Microsoft Copilot", url: "#" },
        { name: "Display Ads Launch — Amazon miniTV", url: "#" },
        { name: "ML Products in Video — Amazon miniTV", url: "#" },
    ],
    sideProjects: [
        { name: "Bundled Ads & IVA — Amazon miniTV", url: "#" },
        { name: "OnePlusWorld — Ronin Labs", url: "#" },
        { name: "Copilot Free-to-Paid Migration", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};