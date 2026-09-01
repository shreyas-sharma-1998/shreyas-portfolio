"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

type ModalDetails = {
    description: string;
    extras?: { label: string; value: string }[];
    links?: { label: string; url: string }[];
};

type ItemAction =
    | { type: "modal"; details: ModalDetails }
    | { type: "link"; url: string };

type TabItem = {
    title: string;
    subtitle: string;
    image: string;
    action: ItemAction;
};

type TabGroup = {
    label: string;
    items: TabItem[];
};

type Tab = {
    id: string;
    label: string;
    groups: TabGroup[];
};

// ─── Modal ────────────────────────────────────────────────────────────────────

const ItemModal = ({ item, onClose }: { item: TabItem; onClose: () => void }) => {
    if (item.action.type !== "modal") return null;
    const { details } = item.action;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="relative">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={490}
                        height={250}
                        className="w-full object-cover rounded-t-2xl"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow text-primary text-sm font-medium hover:bg-primary/5"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-secondary">{item.subtitle}</p>
                    </div>

                    <p className="text-secondary leading-relaxed">{details.description}</p>

                    {details.extras && details.extras.length > 0 && (
                        <div className="flex flex-col gap-3">
                            {details.extras.map((extra, i) => (
                                <div key={i}>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1.5">
                                        {extra.label}
                                    </p>
                                    <p className="text-sm text-primary">{extra.value}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {details.links && details.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {details.links.map((link, i) => (
                                <Button key={i} asChild variant="outline" className="h-auto py-2 px-4">
                                    <Link href={link.url} target="_blank">{link.label}</Link>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ─── Card ─────────────────────────────────────────────────────────────────────

const ItemCard = ({
    item,
    isRightCol,
    onModalOpen,
}: {
    item: TabItem;
    isRightCol: boolean;
    onModalOpen: () => void;
}) => {
    const cardClass = `group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 cursor-pointer ${isRightCol ? "md:border-l md:border-primary/10" : ""}`;

    const inner = (
        <>
            <div className="overflow-hidden h-56 flex items-center justify-center bg-primary/3">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={490}
                    height={300}
                    className="h-full w-full object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 px-2">
                <h4>{item.title}</h4>
                <p className="text-sm text-secondary">{item.subtitle}</p>
            </div>
        </>
    );

    if (item.action.type === "link") {
        return (
            <Link href={item.action.url} target="_blank" className={cardClass}>
                {inner}
            </Link>
        );
    }

    return (
        <div className={cardClass} onClick={onModalOpen}>
            {inner}
        </div>
    );
};

// ─── Sub-tab bar ──────────────────────────────────────────────────────────────

const SubTabs = ({
    groups,
    activeGroup,
    onChange,
}: {
    groups: TabGroup[];
    activeGroup: string;
    onChange: (label: string) => void;
}) => {
    if (groups.length <= 1 && groups[0]?.label === "") return null;

    return (
        <div className="flex flex-wrap gap-2 pt-4 pb-2">
            {groups.map(group => (
                <button
                    key={group.label}
                    onClick={() => onChange(group.label)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                        activeGroup === group.label
                            ? "bg-primary text-white border-primary"
                            : "bg-transparent text-secondary border-primary/20 hover:border-primary/50 hover:text-primary"
                    }`}
                >
                    {group.label}
                </button>
            ))}
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const WorkAndInterests = () => {
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTabId, setActiveTabId] = useState<string>("");
    const [activeGroups, setActiveGroups] = useState<Record<string, string>>({});
    const [selectedItem, setSelectedItem] = useState<TabItem | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/featured-work");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setTabs(data.tabs);
                if (data.tabs.length > 0) {
                    setActiveTabId(data.tabs[0].id);
                    const defaults: Record<string, string> = {};
                    data.tabs.forEach((tab: Tab) => {
                        if (tab.groups.length > 0) defaults[tab.id] = tab.groups[0].label;
                    });
                    setActiveGroups(defaults);
                }
            } catch (error) {
                console.error("Error fetching work data:", error);
            }
        };
        fetchData();
    }, []);

    const activeTab = tabs.find(t => t.id === activeTabId);
    const activeGroupLabel = activeGroups[activeTabId] ?? "";
    const activeGroup = activeTab?.groups.find(g => g.label === activeGroupLabel);

    const setActiveGroup = (label: string) => {
        setActiveGroups(prev => ({ ...prev, [activeTabId]: label }));
    };

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">

                    {/* Header */}
                    <div className="flex flex-col max-w-3xl mx-auto pt-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Work & Interests
                            </p>
                            <Button asChild variant="outline" className="h-auto">
                                <Link href="/Shreyas-Resume.pdf" target="_blank" className="py-3 px-5">View Resume</Link>
                            </Button>
                        </div>

                        {/* Top-level tabs */}
                        <div className="flex gap-1 mt-6 border-b border-primary/10">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTabId(tab.id)}
                                    className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                                        activeTabId === tab.id
                                            ? "border-primary text-primary"
                                            : "border-transparent text-secondary hover:text-primary"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Sub-tabs — always rendered to prevent layout shift */}
                        <div className="min-h-[44px]">
                            {activeTab && (
                                <SubTabs
                                    groups={activeTab.groups}
                                    activeGroup={activeGroupLabel}
                                    onChange={setActiveGroup}
                                />
                            )}
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="min-h-[400px] border-t border-primary/10">
                        {activeGroup && activeGroup.items.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {activeGroup.items.map((item, index) => (
                                    <ItemCard
                                        key={`${activeTabId}-${activeGroupLabel}-${index}`}
                                        item={item}
                                        isRightCol={index % 2 === 1}
                                        onModalOpen={() => setSelectedItem(item)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-3xl mx-auto px-4 sm:px-7 py-16">
                                <p className="text-secondary text-sm">Coming soon.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Modal */}
            {selectedItem && (
                <ItemModal
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </section>
    );
};

export default WorkAndInterests;
