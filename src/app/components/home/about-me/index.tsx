import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const skillCategories = [
        {
            label: "Programming Languages",
            skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "Objective C"]
        },
        {
            label: "Frameworks",
            skills: ["React", "Node.js", "Spring Boot", "Dagger", "AWS CDK"]
        },
        {
            label: "Web Technologies",
            skills: ["React", "HTML", "CSS", "JSON", "jQuery", "AJAX", "Android Development"]
        },
        {
            label: "Tools",
            skills: ["AWS S3", "Lambda", "EC2", "CloudWatch", "SageMaker", "DynamoDB", "Glue", "Git", "MySQL", "MongoDB", "Tomcat"]
        },
        {
            label: "Specializations",
            skills: ["Backend Development", "Frontend Development", "System Design", "Data Structures", "Competitive Coding", "Problem Solving", "HLD", "LLD", "Operational Excellence"]
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-5">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold leading-snug">I'm a software engineer with 5 years of experience building <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">scalable products</span> and user-focused systems.</p>
                            <p className="text-secondary leading-relaxed">I spent over 4 years at Amazon working on the MiniTV ads platform, where I contributed to expanding revenue through new ad formats and monetization strategies.</p>
                            <p className="text-secondary leading-relaxed">Currently, I'm part of the <span className="text-primary font-medium border-b-2">Microsoft Copilot Growth team</span>, focused on driving adoption and improving user engagement for AI-powered experiences.</p>
                            <p className="text-secondary leading-relaxed">I enjoy solving real-world problems through clean and efficient design, and I'm always looking to learn and grow — whether it's exploring new technologies or improving my system design skills.</p>
                            <p className="text-secondary leading-relaxed">Outside of work, I'm passionate about cricket and badminton, recently picked up photography, and spend a lot of time with my dog Gabbar who, despite the name, is all about play and zero terror.</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-sm text-primary uppercase font-medium">Skills</p>
                            <div className="flex flex-col gap-5">
                                {skillCategories.map((category, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <p className="text-xs font-semibold text-secondary uppercase tracking-widest">{category.label}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, j) => (
                                                <Badge variant={"outline"} key={j} className="py-1.5 px-3 rounded-lg">
                                                    <p className="text-xs sm:text-sm font-medium text-primary">{skill}</p>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe