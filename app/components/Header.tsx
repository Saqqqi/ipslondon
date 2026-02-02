import Link from "next/link";
import { cookies } from "next/headers";
import { toggleThemeAction } from "../actions/theme";

export default async function Header() {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value || "light";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[60] py-4 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex h-16 items-center justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/70 px-6 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-gray-950/70 shadow-2xl shadow-gray-200/50 dark:shadow-none">

                        {/* Logo Section */}
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className="group flex items-center gap-3">
                                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-gray-900">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                        >
                                            <path
                                                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 22V12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 12L22 7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2 7L12 12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
                                        IPS<span className="text-blue-600 dark:text-blue-400">London</span>
                                    </span>
                                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                                        Digital Excellence
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center space-x-1 lg:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            {/* Theme Toggle (Server Actions) */}
                            <form action={toggleThemeAction}>
                                <button
                                    type="submit"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100/50 text-gray-500 transition-all hover:bg-gray-100 hover:text-blue-600 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === "light" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.967-8.967h-2.25M4.5 12H2.25m15.334-6.334l-1.59 1.59m-9.496 9.496l-1.59 1.59m12.728 0l-1.59-1.59m-9.496-9.496l-1.59-1.59M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                                        </svg>
                                    )}
                                </button>
                            </form>

                            {/* Get Started CTA */}
                            <Link
                                href="#contact"
                                className="hidden rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95 sm:block dark:bg-blue-500 dark:hover:bg-blue-400"
                            >
                                Get Started
                            </Link>

                            {/* Mobile Menu Toggle (Checkbox Hack) */}
                            <label
                                htmlFor="mobile-menu-checkbox"
                                className="group flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl bg-gray-100/50 lg:hidden dark:bg-gray-800/50"
                            >
                                <div className="h-0.5 w-5 bg-gray-600 transition-all group-hover:bg-blue-600 dark:bg-gray-400 dark:group-hover:bg-blue-400"></div>
                                <div className="h-0.5 w-5 bg-gray-600 transition-all group-hover:bg-blue-600 dark:bg-gray-400 dark:group-hover:bg-blue-400"></div>
                                <div className="h-0.5 w-5 bg-gray-600 transition-all group-hover:bg-blue-600 dark:bg-gray-400 dark:group-hover:bg-blue-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Logic */}
            <input type="checkbox" id="mobile-menu-checkbox" className="peer hidden" />

            {/* Mobile Backdrop */}
            <label
                htmlFor="mobile-menu-checkbox"
                className="fixed inset-0 -z-10 hidden h-screen w-screen bg-black/20 backdrop-blur-sm transition-all peer-checked:block lg:hidden dark:bg-black/50"
            ></label>

            {/* Mobile Sidebar */}
            <div className="fixed right-0 top-0 -z-10 h-screen w-full max-w-xs translate-x-full bg-white/90 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 peer-checked:translate-x-0 lg:hidden dark:bg-gray-900/90">
                <div className="mt-20 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                        >
                            {link.name}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 opacity-50">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    ))}
                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <Link
                            href="#contact"
                            className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 text-center font-bold text-white shadow-xl shadow-blue-500/20 dark:bg-blue-500"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
