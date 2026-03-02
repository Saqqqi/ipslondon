import Image from "next/image";

export default function Stats() {
    const stats = [
        { label: "Global Clients", value: "200+", description: "Enterprises worldwide" },
        { label: "Projects Delivered", value: "500+", description: "Digital transformations" },
        { label: "Years Experience", value: "15+", description: "Industry expertise" },
        { label: "Success Rate", value: "99%", description: "Committed to excellence" },
    ];

    return (
        <section id="stats" className="relative overflow-hidden bg-white py-12 dark:bg-gray-950 sm:py-16 lg:py-20">
            {/* Ambient background glow - More subtle */}
            <div className="absolute left-1/2 top-1/2 -z-0 h-64 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-[100px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    {/* Section Header - Refined */}
                    <div className="text-center mb-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                            Our Impact
                        </div>

                        {/* Headline */}
                        <h2 className="mt-4 text-2xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
                            The Numbers Behind{' '}
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Our Success
                            </span>
                        </h2>
                    </div>

                    {/* Stats Grid - Cleaner design */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="group relative flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:shadow-md hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:bg-gray-900 dark:hover:border-gray-700"
                            >
                                {/* Value - More refined */}
                                <dd className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    {stat.value}
                                </dd>

                                {/* Label */}
                                <dt className="mt-2">
                                    <span className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                                        {stat.label}
                                    </span>
                                    <span className="mt-0.5 block text-[10px] text-gray-400 dark:text-gray-500">
                                        {stat.description}
                                    </span>
                                </dt>

                                {/* Optional: Subtle gradient bar on hover */}
                                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-12"></div>
                            </div>
                        ))}
                    </div>

                    {/* Optional: Trust badge */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Trusted by industry leaders worldwide</span>
                    </div>
                </div>
            </div>
        </section>
    );
}