import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        solutions: [
            { name: "Web Development", href: "/services" },
            { name: "Mobile Apps", href: "/services" },
            { name: "Cloud Solutions", href: "/services" },
            { name: "UI/UX Design", href: "/services" },
        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Process", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Careers", href: "/careers" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
        ],
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
        },
        {
            name: "GitHub",
            href: "#",
            icon: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-white pt-24 dark:bg-gray-950 sm:pt-32" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            {/* Design Elements */}
            <div className="absolute top-0 left-1/2 -z-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-white/10"></div>
            <div className="absolute -top-24 left-1/2 -z-0 h-48 w-[800px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[100px]"></div>

            <div className="container relative z-10 mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 pb-20 lg:grid-cols-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter text-gray-900 dark:text-white mb-8">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <span className="uppercase italic tracking-widest">IPSLondon</span>
                        </Link>
                        <p className="max-w-sm text-lg leading-relaxed text-gray-600 dark:text-gray-400 font-medium italic">
                            "Engineering the future of London's digital landscape with precision, innovation, and strategic excellence."
                        </p>

                        <div className="mt-10 flex space-x-4">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-all hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-gray-500"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8">Solutions</h3>
                            <ul role="list" className="space-y-4">
                                {footerLinks.solutions.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm font-bold text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 uppercase tracking-widest">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8">Company</h3>
                            <ul role="list" className="space-y-4">
                                {footerLinks.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm font-bold text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 uppercase tracking-widest">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8">Legal</h3>
                            <ul role="list" className="space-y-4">
                                {footerLinks.legal.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm font-bold text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 uppercase tracking-widest">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative border-t border-gray-100 py-12 dark:border-white/5">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <p className="text-xs font-black tracking-widest text-gray-400 uppercase">
                            &copy; {currentYear} IPSLondon Limited.
                            <span className="hidden sm:inline mx-2">•</span>
                            London, United Kingdom
                        </p>

                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600/70">Systems Operational</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Corner Glow */}
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-blue-600/5 blur-3xl pointer-events-none"></div>
                </div>
            </div>
        </footer>
    );
}
