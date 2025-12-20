'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PAPERS = [
    {
        title: 'The Architecture of A.V.E.A',
        description: 'Deconstructing the first autonomously viral agent. A technical deep dive into viral scoring algorithms.',
        date: 'Oct 2025',
        slug: 'architecture-of-avea',
        category: 'Architecture'
    },
    {
        title: 'Sovereign AI Framework',
        description: 'Why local-first inference is the only path to true data privacy in enterprise environments.',
        date: 'Sep 2025',
        slug: 'sovereign-ai-framework',
        category: 'Privacy'
    },
    {
        title: 'Context-Aware Neural Nets',
        description: 'Moving beyond tokens: How simple memory layers can approximate human-like intent understanding.',
        date: 'Aug 2025',
        slug: 'context-aware-nets',
        category: 'ML Research'
    },
    {
        title: 'Deterministic Creativity',
        description: 'Balancing temperature and seed control to achieve reliable creative outputs for brand consistency.',
        date: 'Jul 2025',
        slug: 'deterministic-creativity',
        category: 'Generative AI'
    }
];

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-32">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-8">Research at Prema.</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl font-light font-serif">
                        Advancing the science of Context-Aware Intelligence. We publish our findings to push the industry towards sovereign, transparent AI.
                    </p>
                </motion.div>

                {/* Core Areas */}
                <div className="mb-32">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12 border-b border-zinc-100 pb-4">Core Research Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {[
                            { title: 'Cognitive & Emotional AI', items: ['Emotion detection and reasoning', 'Human intent modeling', 'Personality-adaptive responses'] },
                            { title: 'Contextual Memory Systems', items: ['Long-term AI memory', 'Multi-session personalization', 'User identity-aware reasoning'] },
                            { title: 'Agentic Systems', items: ['Autonomous AI agents', 'Task-oriented collaboration', 'Strategic decision-making engines'] },
                            { title: 'AI for Education', items: ['AI study companions', 'Focus control systems', 'Personalized learning intelligence'] }
                        ].map((area) => (
                            <div key={area.title}>
                                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                                <ul className="space-y-2">
                                    {area.items.map((item) => (
                                        <li key={item} className="text-zinc-500 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Papers Grid */}
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12 border-b border-zinc-100 pb-4">Latest Publications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PAPERS.map((paper, i) => (
                            <Link href={`/research/${paper.slug}`} key={paper.slug}>
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="h-full p-8 border border-zinc-100 rounded-2xl transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-50/50 group cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 border border-zinc-200 px-2 py-1 rounded-full">
                                            {paper.category}
                                        </span>
                                        <span className="text-sm text-zinc-400 font-medium group-hover:text-orange-600 transition-colors">
                                            {paper.date}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                                        {paper.title}
                                    </h2>
                                    <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
                                        {paper.description}
                                    </p>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
