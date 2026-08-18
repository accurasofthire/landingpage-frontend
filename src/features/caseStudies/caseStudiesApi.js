const mockCaseStudies = [
    {
        id: "cs-1",
        title: "AI-Powered Customer Support Bot",
        category: "AI",
        summary: "Built an automated conversational agent reducing ticket volumes by 40% using LLMs.",
        year: 2025
    },
    {
        id: "cs-2",
        title: "Next-Gen Fintech Mobile App",
        category: "Mobile",
        summary: "Designed a cross-platform mobile wallet with biometric security and instant peer-to-peer transfers.",
        year: 2024
    },
    {
        id: "cs-3",
        title: "Decentralized Supply Chain Registry",
        category: "Blockchain",
        summary: "Implemented a blockchain-based product tracking system securing authentication for luxury goods.",
        year: 2024
    },
    {
        id: "cs-4",
        title: "E-Commerce Microservices Platform",
        category: "Web",
        summary: "Architected a highly scalable multi-vendor marketplace backend supporting 10k+ concurrent requests.",
        year: 2025
    },
    {
        id: "cs-5",
        title: "Predictive Analytics Dashboard",
        category: "AI",
        summary: "Developed a real-time forecasting engine for SaaS metrics, improving retention forecasting accuracy.",
        year: 2024
    },
    {
        id: "cs-6",
        title: "Cross-Border Remittance App",
        category: "Mobile",
        summary: "Launched an iOS & Android app supporting instant multi-currency exchanges and low-cost transfers.",
        year: 2023
    },
    {
        id: "cs-7",
        title: "DeFi Yield Aggregator Protocol",
        category: "Blockchain",
        summary: "Deployed smart contracts optimizing yield farming strategies across multiple liquidity pools.",
        year: 2025
    },
    {
        id: "cs-8",
        title: "SaaS Enterprise Collaboration Hub",
        category: "Web",
        summary: "Created a real-time document editing and project management workspace for remote teams.",
        year: 2024
    }
];

export const fetchCaseStudies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 15% chance of failing
            const shouldFail = Math.random() < 0.15;
            if (shouldFail) {
                reject(new Error("Network failed"));
            } else {
                resolve(mockCaseStudies);
            }
        }, 800);
    });
};
