'use client';

import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const JOBS = [
    { title: 'Founding AI Engineer', location: 'San Francisco', type: 'Full-time' },
    { title: 'Senior WebGL Artist', location: 'Remote / London', type: 'Contract' },
    { title: 'Product Designer (Systems)', location: 'New York', type: 'Full-time' },
    { title: 'Education Outreach Lead', location: 'Coimbatore', type: 'Full-time' }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">
            <div className="max-w-4xl mx-auto px-6 lg:px-20 py-32">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h1 className="text-6xl font-bold tracking-tight mb-8">Join the Lab.</h1>
                    <p className="text-xl text-zinc-500 max-w-xl font-light font-serif">
                        We are building a research-first, curiosity-driven culture. We look for people who think deeply, question assumptions, and care about the ethics of what they build.
                    </p>
                </motion.div>

                <div className="mb-24 p-8 bg-zinc-50 rounded-3xl">
                    <h3 className="text-lg font-bold mb-4">Who We Look For</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Think deeply', 'Question assumptions', 'Care about ethics', 'Want to build AI that matters'].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                <span className="text-zinc-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
                    {JOBS.map((job, i) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                                <p className="text-zinc-400 text-sm">{job.location} • {job.type}</p>
                            </div>

                            <button className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-900 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all shadow-sm">
                                Apply Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-24 p-8 border border-dashed border-zinc-200 rounded-3xl text-center"
                >
                    <p className="text-zinc-500 mb-4">Don't see your role? We're always looking for exceptional researchers.</p>
                    <a href="mailto:careers@prema.ai" className="text-zinc-900 font-semibold border-b border-zinc-300 hover:border-orange-500 hover:text-orange-600 transition-colors pb-0.5">
                        Email us your portfolio
                    </a>
                </motion.div>

            </div>
            <Footer />
        </main>
    );
}
