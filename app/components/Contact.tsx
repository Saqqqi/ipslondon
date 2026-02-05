export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 lg:py-48">
            {/* High-End Background Elements */}
            <div className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 h-[800px] w-[800px] translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Brand Statement & Contact Info */}
                    <div>
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-800 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300 mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                                <span>Get in touch</span>
                            </div>
                            <h2 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                                Let's Build Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Next Masterpiece.</span>
                            </h2>
                            <p className="mt-8 text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
                                Ready to elevate your digital presence? Reach out to our London-based team of experts today. We don't just build software; we engineer competitive advantages.
                            </p>

                            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <div className="group rounded-[2rem] border border-gray-100 bg-white p-8 transition-all hover:border-blue-500/30 hover:shadow-2xl dark:border-white/5 dark:bg-gray-900 shadow-xl">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-black tracking-tight text-gray-900 dark:text-white uppercase">Email Us</h3>
                                    <p className="mt-2 text-blue-600 dark:text-blue-400 font-bold">hello@ipslondon.co.uk</p>
                                </div>

                                <div className="group rounded-[2rem] border border-gray-100 bg-white p-8 transition-all hover:border-blue-500/30 hover:shadow-2xl dark:border-white/5 dark:bg-gray-900 shadow-xl">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-black tracking-tight text-gray-900 dark:text-white uppercase">Our HQ</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                        Canary Wharf, London
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Contact Form */}
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-2xl transition-all group-hover:opacity-40"></div>
                        <div className="relative rounded-[3rem] border border-gray-100 bg-white/70 p-10 backdrop-blur-3xl dark:border-white/5 dark:bg-gray-900/70 lg:p-14 shadow-2xl">
                            <form action="#" method="POST" className="space-y-8">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder="John"
                                            required
                                            className="block w-full rounded-2xl border-0 bg-white/50 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800/50 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            placeholder="Smith"
                                            className="block w-full rounded-2xl border-0 bg-white/50 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800/50 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        required
                                        className="block w-full rounded-2xl border-0 bg-white/50 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800/50 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your vision..."
                                        required
                                        className="block w-full rounded-2xl border-0 bg-white/50 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800/50 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center items-center rounded-2xl bg-blue-600 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl hover:bg-blue-500 hover:shadow-blue-500/25 transition-all duration-300 active:scale-95 dark:bg-blue-500"
                                    >
                                        Send Message
                                        <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
