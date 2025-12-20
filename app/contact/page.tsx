'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100">

            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">Get in Touch.</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl font-light">
                        Whether you're an enterprise looking for strategy or a creator building the next dimension, we're here to listen.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Direct Contact Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">General Inquiries</h3>
                                <p className="text-zinc-500 mb-2">For partnerships, media, and general questions.</p>
                                <a href="mailto:hello@prema.ai" className="text-zinc-900 font-medium hover:text-orange-600 transition-colors">hello@prema.ai</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-start gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Support</h3>
                                <p className="text-zinc-500 mb-2">Need help with our products?</p>
                                <a href="mailto:support@prema.ai" className="text-zinc-900 font-medium hover:text-orange-600 transition-colors">support@prema.ai</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-start gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Locations</h3>
                                <p className="text-zinc-500">
                                    <span className="block text-zinc-900 font-medium">Headquarters</span>
                                    San Francisco, CA<br />
                                    <span className="block text-zinc-900 font-medium mt-2">Engineering Hub</span>
                                    Coimbatore, IN
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Simple Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-zinc-50 p-8 rounded-3xl"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white" placeholder="jane@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white" placeholder="How can we help?" />
                            </div>
                            <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </main>
    );
}
