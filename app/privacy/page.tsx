'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">
            <div className="max-w-2xl mx-auto px-6 py-24">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                >
                    <h1 className="text-3xl font-bold tracking-tight mb-12">Privacy Policy</h1>

                    <div className="prose prose-zinc prose-sm text-zinc-500">
                        <p className="lead text-lg text-zinc-800 font-medium mb-8">
                            At Prema Labs, we believe that intelligence should be sovereign. Your data belongs to you, and our architecture is designed to enforce this mathematically.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">1. Data Sovereignty</h3>
                        <p className="mb-4">
                            Our models are designed to run local-first. When you use Prema App Builder or Prema.ai, inference occurs primarily on your device or within your private cloud instance. We do not train our foundational models on user data without explicit, opt-in consent.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">2. Information Collection</h3>
                        <p className="mb-4">
                            We collect minimal telemetry data (error rates, performance metrics) to improve system stability. This data is anonymized and stripped of any personally identifiable information (PII) or content identifiers.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">3. Zero-Retention Inference</h3>
                        <p className="mb-4">
                            For cloud-based inference services, our systems operate on a "Zero-Retention" policy. Inputs are processed in volatile memory and immediately discarded after output generation. No logs of input prompts are stored.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">4. Contact</h3>
                        <p className="mb-4">
                            For legal inquiries or data requests, please contact:<br />
                            <span className="text-zinc-900">legal@prema.ai</span>
                        </p>

                        <p className="text-xs text-zinc-400 mt-12 border-t border-zinc-100 pt-8">
                            Last Updated: December 20, 2025
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
