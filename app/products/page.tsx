'use client';

import { motion } from 'framer-motion';
import { Layers, Box, Cpu, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">

            {/* Hero */}
            <section className="pt-32 pb-24 px-6 lg:px-20 border-b border-zinc-100">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">Platforms & Products</h1>
                        <p className="text-xl text-zinc-500 font-serif leading-relaxed max-w-2xl">
                            We translate our research into tools that expand human agency. Our platforms are designed for depth, context, and long-term utility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Prema.ai Section */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                            <Layers size={32} />
                        </div>
                        <h2 className="text-4xl font-bold">Prema.ai</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                                A context-aware AI agent platform designed for deep conversations and long-term user understanding. Unlike standard chat interfaces, Prema.ai remembers your history, understands your emotional state, and strategies to help you achieve complex goals.
                            </p>

                            <h3 className="text-xl font-bold mb-4">Core Capabilities</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Deep Context Memory', desc: 'Retains information across months of interaction, not just the active window.' },
                                    { title: 'Emotionally Aligned', desc: 'Detects frustration, curiosity, or joy and adapts tone accordingly.' },
                                    { title: 'Strategic Reasoning', desc: 'Breaks down high-level goals into actionable steps and tracks progress.' }
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                        <div>
                                            <strong className="block text-zinc-900">{item.title}</strong>
                                            <span className="text-zinc-500 text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-6">Use Cases</h3>
                            <div className="space-y-6">
                                <div className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2 text-zinc-900 font-bold">
                                        <GraduationCap size={20} /> Education
                                    </div>
                                    <p className="text-sm text-zinc-500">Personalized tutors that adapt to learning speeds and frustration levels.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2 text-zinc-900 font-bold">
                                        <Briefcase size={20} /> Research
                                    </div>
                                    <p className="text-sm text-zinc-500">Literature review assistants that find connections across vast datasets.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2 text-zinc-900 font-bold">
                                        <Sparkles size={20} /> Productivity
                                    </div>
                                    <p className="text-sm text-zinc-500">Executive assistants that understand project context and team dynamics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-zinc-100 max-w-7xl mx-auto" />

            {/* AI App Builder Section */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                            <Box size={32} />
                        </div>
                        <h2 className="text-4xl font-bold">AI App Builder</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:grid-flow-row-dense">
                        <div className="lg:col-start-2">
                            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                                A no-code / low-code system for rapidly building AI-powered apps and agentic workflows. We are democratizing the creation of 3D, intelligent software by allowing users to build simply by talking.
                            </p>

                            <h3 className="text-xl font-bold mb-4">Designed For</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {['Students', 'Researchers', 'Startups', 'Non-profits'].map((item) => (
                                    <li key={item} className="p-3 bg-zinc-50 rounded-lg text-zinc-700 font-medium text-center border border-zinc-100">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100 flex items-center justify-center lg:col-start-1">
                            <div className="text-center">
                                <Cpu size={64} className="mx-auto text-blue-400 mb-6" />
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Build via Chat</h3>
                                <p className="text-blue-700/80">
                                    "Make me a 3D solar system simulator where the planets have emotions."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
