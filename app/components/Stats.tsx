import Image from "next/image";

export default function Stats() {
    const stats = [
        { label: "Global Clients", value: "200+", description: "Enterprises worldwide" },
        { label: "Projects Delivered", value: "500+", description: "Digital transformations" },
        { label: "Years Experience", value: "15+", description: "Industry expertise" },
        { label: "Success Rate", value: "99%", description: "Committed to excellence" },
    ];

    return (
        <section id="stats" className="relative overflow-hidden bg-white py-20 dark:bg-gray-950 sm:py-24">
            {/* Ambient background glow */}
            <div className="absolute left-1/2 top-1/2 -z-0 h-48 w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300 mb-6">
                            <span>Our Impact</span>
                        </div>
                        <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            The Numbers Behind <span className="text-blue-600 dark:text-blue-500">Our Success</span>
                        </h2>
                    </div>

                    <div className="relative rounded-[3rem] border border-gray-100 bg-white/50 p-2 backdrop-blur-2xl dark:border-white/5 dark:bg-white/5 shadow-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="group relative flex flex-col items-center justify-center rounded-[2.5rem] bg-white p-10 text-center transition-all duration-500 hover:bg-blue-50/50 dark:bg-gray-950 dark:hover:bg-blue-900/10"
                                >
                                    <dt className="order-2 mt-2">
                                        <span className="block text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                            {stat.label}
                                        </span>
                                        <span className="mt-1 block text-xs font-semibold text-gray-500 dark:text-gray-500">
                                            {stat.description}
                                        </span>
                                    </dt>
                                    <dd className="order-1 text-5xl font-black italic tracking-tighter text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
                                        {stat.value}
                                    </dd>

                                    {/* Vertical Divider for desktop */}
                                    {idx < stats.length - 1 && (
                                        <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gray-100 dark:bg-white/10 lg:block"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

