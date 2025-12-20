'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Footer from '../components/Footer';

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
                            Prema Labs is an independent AI research and product laboratory focused on building emotion-aware, context-driven, and ethically aligned artificial intelligence systems.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
                            Unlike conventional AI startups that optimize purely for automation or scale, Prema Labs is built on a single belief: <br /><strong>AI should not just think fast — it should understand deeply.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 px-6 lg:px-20 bg-zinc-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-6">What Makes Prema Labs Different</h2>
                        <p className="text-lg text-zinc-500 max-w-2xl">
                            We research and develop AI systems that can interpret human intent, respond with emotional intelligence, and operate with strategic reasoning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Context-Aware Intelligence', desc: 'We design AI systems that remember who the user is, what they want, and why they asked — across time, sessions, and environments.' },
                            { title: 'Emotionally Intelligent AI', desc: 'Our models don’t just process text. They analyze emotional tone and cognitive intent to generate responses that feel natural and human-centric.' },
                            { title: 'Ethical-by-Design', desc: 'Every system is built with explainability, privacy-first design, and bias reduction strategies embedded into the architecture.' },
                            { title: 'Research → Product', desc: 'We don’t publish for vanity. Every research initiative is designed to solve a real human problem and be deployable in education or enterprises.' }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm"
                            >
                                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy & Leadership */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-8">Founder & Leadership Philosophy</h2>
                    <div className="prose prose-zinc prose-lg text-zinc-600 font-serif leading-relaxed">
                        <p>
                            Prema Labs was founded with a builder-first mindset — deeply technical, research-driven, and impact-focused. We prioritize long-term thinking over hype, research depth over quick demos, and real-world usefulness over buzzwords.
                        </p>
                        <p>
                            <strong>Our leadership believes that the future of AI belongs to those who understand humans — not just machines.</strong>
                        </p>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-zinc-100 max-w-7xl mx-auto" />

            {/* Social Impact */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Social & Educational Impact</h2>
                        <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                            We actively focus on making AI accessible to students, supporting ethical AI education, and building tools for underserved communities. We are committed to encouraging responsible AI adoption in India and globally.
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-zinc-900 rounded-3xl p-12 text-white flex flex-col justify-between min-h-[300px]">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Location</span>
                            <h3 className="text-2xl font-bold mb-2">Coimbatore, Tamil Nadu</h3>
                            <p className="text-zinc-400">Operating globally with a research-driven mindset.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
