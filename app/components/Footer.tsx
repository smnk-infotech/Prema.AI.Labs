'use client';

export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-medium">
                <p>© 2026 Prema Labs Inc.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Coimbatore</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 self-center"></span>
                    <span>San Francisco</span>
                </div>
            </div>
        </footer>
    );
}
