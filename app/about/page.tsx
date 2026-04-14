'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-6 lg:px-20 border-b border-zinc-100">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-600 font-medium tracking-wide text-sm uppercase mb-4 block">Company Overview</span>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-12">
                            Intelligence with a Heartbeat.
                        </h1>
                        <p className="text-xl lg:text-2xl text-zinc-600 font-serif leading-relaxed mb-12">
                            Prema AI Labs is an elite Artificial General Intelligence (AGI) research and development company focused on building autonomous, context-driven systems designed to shatter the cognitive limitations of standard AI models.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
                            Intelligence is not just data retrieval — it is empathetic, strategic reasoning. At Prema Labs, we believe AI should not just think fast — it should understand deeply.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 px-6 lg:px-20 bg-zinc-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-6">Our Leadership</h2>
                        <p className="text-lg text-zinc-500 max-w-2xl">
                            Combining decades of research in machine learning, cognitive science, and human-centric design.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Founder 1 */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                            <div className="w-32 h-32 rounded-2xl bg-zinc-100 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                                <span className="text-4xl font-bold text-zinc-300">NM</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-1">Nandakumar Murugan</h3>
                                <p className="text-orange-600 font-medium mb-4">Founder</p>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    Leading the vision for context-aware AGI. Focused on the intersection of human empathy and deterministic machine intelligence.
                                </p>
                            </div>
                        </div>

                        {/* Founder 2 */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                            <div className="w-32 h-32 rounded-2xl bg-zinc-100 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                                <span className="text-4xl font-bold text-zinc-300">MI</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-1">Mohamed Irfan</h3>
                                <p className="text-orange-600 font-medium mb-4">Co-Founder</p>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    Engineering the Prema Architecture. Driving the frontier of private, sovereign infrastructure for the next generation of AI agents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-8">Our Philosophy</h2>
                    <div className="prose prose-zinc prose-lg text-zinc-600 font-serif leading-relaxed">
                        <p>
                            Prema Labs was founded with a builder-first mindset — deeply technical, research-driven, and impact-focused. We prioritize long-term thinking over hype, research depth over quick demos, and real-world usefulness over buzzwords.
                        </p>
                        <p>
                            <strong>Our mission is to ensure that the transition to AGI is safe, sovereign, and profoundly beneficial for humanity.</strong>
                        </p>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-zinc-100 max-w-7xl mx-auto" />

            {/* Location */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Headquarters</span>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">Coimbatore, <br />Tamil Nadu</h2>
                        <p className="text-zinc-400 text-lg max-w-md">
                            Operating at the intersection of tradition and the future, building the next frontier of intelligence from the heart of South India.
                        </p>
                    </div>
                    <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full border border-zinc-800 flex items-center justify-center flex-shrink-0">
                         <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(249,115,22,0.5)]"></div>
                    </div>
                </div>
            </section>

        </main>
    );
}
