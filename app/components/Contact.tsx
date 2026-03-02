export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 lg:py-20">
            {/* Background Elements - More subtle */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-500/5 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-indigo-500/5 blur-[100px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Column: Brand Statement & Contact Info - Refined */}
                    <div>
                        <div className="max-w-xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                                Get in touch
                            </div>

                            {/* Headline */}
                            <h2 className="mt-4 text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                                Let's Build Your{' '}
                                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                    Next Masterpiece
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="mt-3 text-sm text-gray-500 sm:text-base dark:text-gray-400 leading-relaxed">
                                Ready to elevate your digital presence? Reach out to our London-based team of experts.
                                We don't just build software; we engineer competitive advantages.
                            </p>

                            {/* Contact Info Cards - Refined */}
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="group rounded-xl border border-gray-100 bg-white p-5 transition-all hover:shadow-md hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:bg-gray-900">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform dark:bg-blue-900/20 dark:text-blue-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Email Us</h3>
                                    <p className="mt-1 text-xs text-blue-600 dark:text-blue-400 break-all">hello@ipslondon.co.uk</p>
                                </div>

                                <div className="group rounded-xl border border-gray-100 bg-white p-5 transition-all hover:shadow-md hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:bg-gray-900">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-4 group-hover:scale-110 transition-transform dark:bg-indigo-900/20 dark:text-indigo-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Our HQ</h3>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Canary Wharf, London</p>
                                </div>
                            </div>

                            {/* Social/Trust Indicator */}
                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 ring-2 ring-white dark:from-gray-700 dark:to-gray-600 dark:ring-gray-900"></div>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500">
                                    Join 150+ satisfied clients
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Contact Form - Refined */}
                    <div className="relative">
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 blur"></div>
                        <div className="relative rounded-2xl border border-gray-100 bg-white/90 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 shadow-xl sm:p-8">
                            <form action="#" method="POST" className="space-y-5">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder="John"
                                            required
                                            className="block w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            placeholder="Smith"
                                            className="block w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500/20"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="john@company.com"
                                        required
                                        className="block w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                        Company (optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        placeholder="Your company"
                                        className="block w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your project vision..."
                                        required
                                        className="block w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500/20 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
                                >
                                    Send Message
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>

                                <p className="text-center text-[10px] text-gray-400 dark:text-gray-500">
                                    We'll respond within 24 hours. No spam, ever.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}