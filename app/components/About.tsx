import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 lg:py-32">
            {/* Refined background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
            <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/5 to-indigo-600/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Content Column - Premium Typography */}
                    <div className="max-w-xl">
                        {/* Badge - Premium */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            About IPSLondon
                        </div>

                        {/* Headline - Premium */}
                        <h2 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                            Driving Digital{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Excellence
                            </span>
                        </h2>

                        {/* Description - Premium */}
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            At IPSLondon, we don't just build solutions; we craft digital legacies.
                            Our mission is to empower enterprises with cutting-edge engineering and
                            strategic foresight that transcends borders.
                        </p>

                        {/* Feature Cards - Premium */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    title: "Strategic Vision",
                                    desc: "Data-driven roadmaps aligned with your core business objectives.",
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Agile Engineering",
                                    desc: "Rapid development with uncompromising security and scalability.",
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
                                    <div className="relative">
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators - Premium */}
                        <div className="mt-8 flex items-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Est. 2015</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
                                    <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ISO Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid - Perfect Images */}
                    <div className="relative">
                        {/* Main Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large Image - Office */}
                            <div className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                    alt="IPSLondon Innovation Center - Modern Office Space"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-lg font-semibold">Innovation Center</p>
                                    <p className="text-sm text-white/80">London HQ</p>
                                </div>
                            </div>

                            {/* Stats Card 1 */}
                            <div className="relative col-span-1 aspect-[2/1] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 shadow-xl flex flex-col items-center justify-center text-white">
                                <div className="text-3xl font-bold">150+</div>
                                <div className="text-xs uppercase tracking-wider opacity-80 mt-1">Projects Delivered</div>
                            </div>

                            {/* Stats Card 2 */}
                            <div className="relative col-span-1 aspect-[2/1] rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-xl flex flex-col items-center justify-center border border-gray-100 dark:border-gray-800">
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">15+</div>
                                <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Global Partners</div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}