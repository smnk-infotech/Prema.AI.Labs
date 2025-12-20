'use client';

import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">
            <div className="max-w-2xl mx-auto px-6 py-24">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl font-bold tracking-tight mb-12">Terms of Service</h1>

                    <div className="prose prose-zinc prose-sm text-zinc-500">
                        <p className="lead text-lg text-zinc-800 font-medium mb-8">
                            By accessing Prema Labs, you agree to these terms. We build powerful tools, and we expect them to be used responsibly.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">1. License to Use</h3>
                        <p className="mb-4">
                            We grant you a limited, non-exclusive license to access our platform for personal or internal business use. You may not reverse engineer our model weights or infrastructure.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">2. Acceptable Use</h3>
                        <p className="mb-4">
                            You agree not to use our services to generate harmful, misleading, or illegal content. We reserve the right to terminate access for violations of this policy.
                        </p>

                        <h3 className="text-zinc-900 font-semibold mb-2 mt-8">3. Liability</h3>
                        <p className="mb-4">
                            Prema Labs is provided "as is." We are not liable for any damages arising from the use of our experimental AI technologies.
                        </p>

                        <p className="text-xs text-zinc-400 mt-12 border-t border-zinc-100 pt-8">
                            Last Updated: December 20, 2025
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
