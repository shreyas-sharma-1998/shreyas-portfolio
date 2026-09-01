import { NextResponse } from "next/server";

const tabs = [
    {
        id: "projects",
        label: "Projects",
        groups: [
            {
                label: "Microsoft",
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
                    }
                ]
            },
            {
                label: "Amazon",
                items: [
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
                label: "Personal",
                items: []
            }
        ]
    },
    {
        id: "books",
        label: "Books",
        groups: [
            {
                label: "2025",
                items: [
                    {
                        title: "The Secret",
                        subtitle: "Rhonda Byrne",
                        image: "/images/books/the-secret.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A global phenomenon exploring the law of attraction — the idea that positive thoughts and intention bring positive experiences into your life. Drawing on interviews with scientists, philosophers, and visionaries, it presents a framework for achieving health, wealth, and happiness.",
                                extras: [
                                    { label: "Genre", value: "Self-Help · Personal Development" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Born a Crime",
                        subtitle: "Trevor Noah",
                        image: "/images/books/born-a-crime.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "Trevor Noah's memoir about growing up as a mixed-race child in apartheid South Africa, where his very existence was illegal. A moving, funny, and deeply human account of navigating race, identity, and a complicated yet remarkable relationship with his mother.",
                                extras: [
                                    { label: "Genre", value: "Memoir · Autobiography" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "System Design Interview – An Insider's Guide",
                        subtitle: "Alex Xu",
                        image: "/images/books/system-design.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A practical guide to cracking system design interviews, covering distributed systems, scalability, and real-world architecture decisions behind products like URL shorteners, rate limiters, chat systems, and notification services.",
                                extras: [
                                    { label: "Genre", value: "Software Engineering · System Design" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "A Thousand Splendid Suns",
                        subtitle: "Khaled Hosseini",
                        image: "/images/books/thousand-splendid-suns.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A devastating and beautiful story of two Afghan women bound together by fate and hardship across three decades of war. A testament to the resilience of women and the unbreakable bonds forged in suffering.",
                                extras: [
                                    { label: "Genre", value: "Fiction · Historical" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Philosopher's Stone",
                        subtitle: "J.K. Rowling · Book 1",
                        image: "/images/books/hp1.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "The book that started it all. Eleven-year-old Harry Potter discovers he's a wizard and enters Hogwarts School of Witchcraft and Wizardry, where he makes lifelong friends, uncovers the mystery of his past, and faces Lord Voldemort for the first time.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Chamber of Secrets",
                        subtitle: "J.K. Rowling · Book 2",
                        image: "/images/books/hp2.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "Harry returns to Hogwarts for his second year to find the school under threat from a mysterious force petrifying students. A darker, more unsettling mystery that deepens the lore of the wizarding world.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Prisoner of Azkaban",
                        subtitle: "J.K. Rowling · Book 3",
                        image: "/images/books/hp3.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A dangerous prisoner has escaped from Azkaban, and Hogwarts feels the threat. Widely regarded as the point where the series grows up — richer characters, time travel, and the first real exploration of Harry's parents' past.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Goblet of Fire",
                        subtitle: "J.K. Rowling · Book 4",
                        image: "/images/books/hp4.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "Harry is unexpectedly entered into the dangerous Triwizard Tournament. A turning point in the series — the tone shifts permanently as Voldemort returns and the stakes become life and death.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Order of the Phoenix",
                        subtitle: "J.K. Rowling · Book 5",
                        image: "/images/books/hp5.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "The longest and most intense book in the series. Harry battles disbelief, institutional corruption at Hogwarts, and the growing shadow of Voldemort — while a secret resistance forms to fight back.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Half-Blood Prince",
                        subtitle: "J.K. Rowling · Book 6",
                        image: "/images/books/hp6.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "Dumbledore takes Harry on private lessons to uncover Voldemort's past and the secret to his immortality. A deeply emotional chapter that sets up the final confrontation and ends with a shattering loss.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Harry Potter and the Deathly Hallows",
                        subtitle: "J.K. Rowling · Book 7",
                        image: "/images/books/hp7.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "The epic conclusion. Harry, Ron, and Hermione abandon Hogwarts to hunt down Voldemort's Horcruxes. A story about sacrifice, the power of love, and what it truly means to face death — with one of the most satisfying endings in modern fiction.",
                                extras: [
                                    { label: "Genre", value: "Fantasy · Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    }
                ]
            },
            {
                label: "2026",
                items: [
                    {
                        title: "The Pragmatic Programmer",
                        subtitle: "David Thomas & Andrew Hunt",
                        image: "/images/books/pragmatic-programmer.jpg",
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
                        image: "/images/books/ddia.jpg",
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
                    },
                    {
                        title: "Sapiens: A Brief History of Humankind",
                        subtitle: "Yuval Noah Harari",
                        image: "/images/books/sapiens.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A sweeping history of the human species — from the cognitive revolution 70,000 years ago to the political and technological revolutions of today. Harari challenges everything we think we know about being human.",
                                extras: [
                                    { label: "Genre", value: "History · Non-Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Parallel Lives",
                        subtitle: "Plutarch",
                        image: "/images/books/parallel-lives.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A series of biographies of famous Greeks and Romans, arranged in pairs to draw moral comparisons. One of the most influential works of antiquity and a cornerstone of Western biography and history.",
                                extras: [
                                    { label: "Genre", value: "Biography · History · Classics" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Gujarat Files: Anatomy of a Cover Up",
                        subtitle: "Rana Ayyub",
                        image: "/images/books/gujarat-files.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "An undercover investigation by journalist Rana Ayyub into the 2002 Gujarat riots. Through months of covert interviews with police officials and politicians, she exposes alleged state complicity in the violence.",
                                extras: [
                                    { label: "Genre", value: "Investigative Journalism · Non-Fiction" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Careless People",
                        subtitle: "Sarah Wynn-Williams",
                        image: "/images/feature-work/feature-img-1.png",
                        action: {
                            type: "modal",
                            details: {
                                description: "A former Facebook executive's insider account of life at Meta — the internal politics, moral compromises, and the human cost behind the decisions that shaped one of the world's most powerful companies.",
                                extras: [
                                    { label: "Genre", value: "Memoir · Technology" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "The Kite Runner",
                        subtitle: "Khaled Hosseini",
                        image: "/images/books/kite-runner.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A powerful story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's turbulent history. Amir's journey to right a past wrong is one of the most emotionally resonant stories in modern fiction.",
                                extras: [
                                    { label: "Genre", value: "Fiction · Historical" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Animal Farm",
                        subtitle: "George Orwell",
                        image: "/images/books/animal-farm.jpg",
                        action: {
                            type: "modal",
                            details: {
                                description: "A razor-sharp political allegory in which farm animals overthrow their human farmer — only to find themselves under a new tyranny of their own making. Orwell's fable on power, corruption, and propaganda is as relevant today as ever.",
                                extras: [
                                    { label: "Genre", value: "Fiction · Political Satire" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    },
                    {
                        title: "Jail Diary of Bhagat Singh",
                        subtitle: "Bhagat Singh",
                        image: "/images/feature-work/feature-img-2.png",
                        action: {
                            type: "modal",
                            details: {
                                description: "Notes and writings compiled by Bhagat Singh during his imprisonment before his execution in 1931. A rare and intimate window into the mind of one of India's most celebrated revolutionaries — his political philosophy, reading list, and reflections on freedom.",
                                extras: [
                                    { label: "Genre", value: "History · Biography · Indian Independence" },
                                    { label: "My Take", value: "Placeholder — add your thoughts here." }
                                ],
                                links: []
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "blogs",
        label: "Blogs",
        groups: [
            {
                label: "",
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
        ]
    }
];

export const GET = async () => {
    return NextResponse.json({ tabs });
};
