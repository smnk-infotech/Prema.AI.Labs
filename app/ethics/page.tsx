'use client';

import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function EthicsPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">

            <section className="pt-32 pb-24 px-6 lg:px-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">Responsible & Ethical AI</h1>
                        <p className="text-xl text-zinc-500 font-serif leading-relaxed mb-12">
                            Ethics is not a policy document—it is embedded into our system architecture. We build trust through transparency, not obscurity.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Explainable Outputs</h2>
                            <p className="text-zinc-700 leading-loose">
                                We believe that users have the right to understand why an AI model reached a specific conclusion. Our models are trained to provide step-by-step reasoning traces for complex queries, allowing users to audit the logic path rather than blindly accepting a "black box" answer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Privacy-Preserving Inference</h2>
                            <p className="text-zinc-700 leading-loose">
                                Data sovereignty is non-negotiable. Our architecture prioritizes local-first inference where possible. When cloud processing is required, we utilize ephemeral runtime environments that cryptographically guarantee zero-retention of input data after the session ends.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Bias Reduction & Fairness</h2>
                            <p className="text-zinc-700 leading-loose">
                                We actively curate our training datasets to reduce historical biases. Furthermore, our post-training reinforcement learning (RLHF) specifically penalizes stereotypical or harmful generalizations. We publish annual transparency reports on our model safety benchmarks.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Transparency Frameworks</h2>
                            <p className="text-zinc-700 leading-loose">
                                We clearly disclose when a user is interacting with an AI. We do not anthropomorphize our models to deceive users into thinking they are human. Our systems are tools for thought, not replacements for human agency.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
