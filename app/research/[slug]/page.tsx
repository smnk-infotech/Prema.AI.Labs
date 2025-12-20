'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Dummy content map (in a real app, this would be fetched)
const ARTICLES: Record<string, { title: string; date: string; content: string }> = {
    'architecture-of-avea': {
        title: 'The Architecture of A.V.E.A',
        date: 'October 2025',
        content: `
      <h3>Abstract</h3>
      <p>Autonomous Video Engagement Agents (A.V.E.A) represent a paradigm shift in generative media to optimize for viewer retention.</p>
      
      <h3>Introduction</h3>
      <p>The core challenge in automated video generation isn't pixel fidelity—it's semantic coherence. Traditional models generate frame-by-frame, often losing the narrative thread. A.V.E.A introduces a "Strategy Layer" that precedes generation.</p>
      
      <h3>The Strategy Layer</h3>
      <p>Before a single pixel is rendered, the agent analyzes millions of viral vectors to construct a retention graph. This graph dictates the pacing, cut frequency, and auditory spikes.</p>
      
      <h3>Conclusion</h3>
      <p>By decoupling strategy from generation, we achieve a 400% increase in average watch time compared to standard generative outputs.</p>
    `
    },
    'sovereign-ai-framework': {
        title: 'Sovereign AI Framework',
        date: 'September 2025',
        content: `
      <h3>Abstract</h3>
      <p>A manifesto for local-first intelligence.</p>
      <h3>The Problem</h3>
      <p>Centralized AI creates a single point of failure and privacy erosion.</p>
      <h3>Our Solution</h3>
      <p>We propose a decentralized node structure where inference happens at the edge.</p>
    `
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params; // Await params in Next.js 15
    const article = ARTICLES[slug] || {
        title: 'Article Not Found',
        date: '',
        content: '<p>The requested research paper could not be found.</p>'
    };

    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">
            <div className="max-w-3xl mx-auto px-6 py-24">

                <Link href="/research" className="inline-flex items-center text-zinc-400 hover:text-orange-600 transition-colors mb-12 group text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Research
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                >
                    <span className="block text-zinc-400 font-medium mb-4">{article.date}</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 leading-tight">
                        {article.title}
                    </h1>

                    <div
                        className="prose prose-zinc prose-lg max-w-none font-serif text-zinc-700 leading-loose"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </motion.div>
            </div>
        </main>
    );
}
