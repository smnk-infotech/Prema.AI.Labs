'use client';

import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
    const footerSections = [
        {
            title: 'Why Prema',
            links: [
                { label: 'Our Philosophy', href: '/about' },
                { label: 'Sovereign AI', href: '/about#different' },
                { label: 'Research-First', href: '/research' },
                { label: 'Trust & Safety', href: '/ethics' },
                { label: 'Global Impact', href: '/about#impact' },
            ],
        },
        {
            title: 'Products',
            links: [
                { label: 'Prema.ai', href: '/products#prema-ai' },
                { label: 'App Builder', href: '/products#app-builder' },
                { label: 'Pricing', href: '/products' },
                { label: 'Enterprise', href: '/contact' },
                { label: 'See all products', href: '/products' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#' },
                { label: 'Research Papers', href: '/research' },
                { label: 'API Reference', href: '#' },
                { label: 'System Status', href: '#' },
                { label: 'Transparency Reports', href: '/ethics' },
            ],
        },
        {
            title: 'Engage',
            links: [
                { label: 'Contact Sales', href: '/contact' },
                { label: 'Careers', href: '/careers' },
                { label: 'Media Inquiries', href: '/contact' },
                { label: 'Partner with Us', href: '/contact' },
                { label: 'Join User Research', href: '#' },
            ],
        },
    ];

    return (
        <footer className="bg-white border-t border-zinc-200 text-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">

                {/* Top Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-zinc-900 mb-6">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-500 hover:text-zinc-900 transition-colors block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Utility Bar */}
                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left: Brand & Legal */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-orange-500 flex-shrink-0"></span>
                            <span className="font-bold text-zinc-900 tracking-tight">Prema Labs</span>
                        </div>
                        <nav className="flex items-center gap-6 text-zinc-500">
                            <Link href="/about" className="hover:text-zinc-900">About</Link>
                            <Link href="/privacy" className="hover:text-zinc-900">Privacy</Link>
                            <Link href="/terms" className="hover:text-zinc-900">Terms</Link>
                            <Link href="/ethics" className="hover:text-zinc-900">Ethics</Link>
                        </nav>
                    </div>

                    {/* Right: Language & Newsletter */}
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto justify-end">
                        <div className="flex items-center gap-2 text-zinc-600">
                            <Globe size={16} />
                            <span>English</span>
                        </div>

                        <div className="hidden md:flex items-center gap-4 pl-6 border-l border-zinc-200">
                            <span className="text-zinc-500">Sign up for our newsletter</span>
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
