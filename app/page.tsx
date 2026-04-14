'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Zap, Layers, Box } from 'lucide-react';
import Link from 'next/link';

{/* FOOTER removed (global) */ }
const HeroScene = dynamic(() => import('./components/HeroScene'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-50/20 animate-pulse rounded-full blur-3xl opacity-50" />
});

const ProductScene = dynamic(() => import('./components/ProductScene'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-100 animate-pulse" />
});

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <main className="min-h-screen bg-white selection:bg-orange-100">

            {/* SECTION 1: HERO */}
            <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 pt-20 lg:pt-0 z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-xl"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-orange-500/50"></span>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">Prema Labs</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                            Intelligence <br />
                            <span className="text-slate-900">with a</span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                                Heartbeat.
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-md">
                            Pioneering the dawn of Artificial General Intelligence. Driven by empathy. Engineered to outperform the industry scale.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex gap-4">
                            <Link href="/research" className="group px-8 py-4 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200/50 flex items-center gap-2">
                                Read Research
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="/about" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium transition-all hover:bg-slate-50 flex items-center gap-2">
                                Our Mission
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right: 3D Scene */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto absolute lg:relative top-0 right-0 opacity-50 lg:opacity-100 pointer-events-none lg:pointer-events-auto mix-blend-multiply lg:mix-blend-normal">
                    <Suspense fallback={null}>
                        <HeroScene />
                    </Suspense>
                </div>
            </section>

            {/* SECTION 2: PRODUCT SHOWCASE */}
            <section className="py-24 px-6 lg:px-20 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 flex justify-between items-end"
                    >
                        <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Our Platforms</h2>
                        <Link href="/products" className="text-orange-600 font-medium hover:text-orange-700 flex items-center gap-2">
                            View All Products <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1: Prema.ai */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 group"
                        >
                            <div className="mb-8">
                                <ProductScene type="video" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Layers className="w-5 h-5" /></div>
                                    <h3 className="text-2xl font-bold text-slate-900">Prema.ai</h3>
                                </div>
                                <p className="text-slate-500 leading-relaxed">
                                    A context-aware AI agent platform designed for deep conversations and long-term user understanding.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-2">
                                    {['Context Memory', 'Emotional Intel', 'Strategic Reasoning'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href="/products" className="text-sm font-semibold text-slate-900 flex items-center gap-2 pt-4 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Card 2: App Builder */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 group"
                        >
                            <div className="mb-8">
                                <ProductScene type="builder" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Box className="w-5 h-5" /></div>
                                    <h3 className="text-2xl font-bold text-slate-900">App Builder</h3>
                                </div>
                                <p className="text-slate-500 leading-relaxed">
                                    Build Anything. Just by Talking. Democratizing the creation of 3D, intelligent software.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-2">
                                    {['Zero-Code 3D', 'Android Export', 'Voice-to-Build'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href="/products" className="text-sm font-semibold text-slate-900 flex items-center gap-2 pt-4 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FEATURES GRID */}
            <section className="py-24 px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain className="w-6 h-6" />,
                                title: "Context Awareness",
                                desc: "AI that understands the 'Why', not just the 'What'."
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Deterministic Output",
                                desc: "Precision engineering for reliable, enterprise-grade results."
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Sovereign Privacy",
                                desc: "Your data stays yours. Built on secure, private infrastructure."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-6 border border-slate-100">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
