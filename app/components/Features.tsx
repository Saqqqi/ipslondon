import Image from "next/image";

export default function Features() {
    const features = [
        {
            title: "Bespoke Digital Solutions",
            description: "Custom software architectures exclusively designed for your unique business workflows and growth objectives.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            tag: "Custom Engineering",
            gradient: "from-blue-600 to-cyan-500",
            size: "col-span-12 lg:col-span-7",
        },
        {
            title: "Security First",
            description: "Mission-critical protocols and encryption to safeguard your reputation and user data.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
            tag: "Encrypted",
            gradient: "from-rose-500 to-orange-500",
            size: "col-span-12 lg:col-span-5",
        },
        {
            title: "Agile & Transparent",
            description: "Complete visibility with bi-weekly sprint cycles and real-time progress tracking.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            tag: "Agile Delivery",
            gradient: "from-emerald-500 to-teal-500",
            size: "col-span-12 lg:col-span-5",
        },
        {
            title: "Cloud Infrastructure",
            description: "Resilient systems designed for global scale with 99.9% uptime guarantee.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
            tag: "Global Edge",
            gradient: "from-blue-500 to-indigo-600",
            size: "col-span-12 lg:col-span-7",
        }
    ];

    return (
        <section id="features" className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 lg:py-24">
            {/* Background decor - More subtle */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10"></div>
            <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-indigo-500/5 blur-[100px] dark:bg-indigo-500/10"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Refined */}
                <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        Why IPSLondon?
                    </div>

                    {/* Headline */}
                    <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                        Built for those who{' '}
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Demand Excellence
                        </span>
                    </h2>
                </div>

                {/* Features Grid - Refined */}
                <div className="grid grid-cols-12 gap-5">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`${feature.size} group relative min-h-[380px] lg:min-h-[420px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                                />
                                {/* Gradient overlay - Refined */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 lg:p-8">
                                {/* Tag - More refined */}
                                <div className={`inline-flex w-fit rounded-lg px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md bg-gradient-to-r ${feature.gradient} mb-3 lg:mb-4`}>
                                    {feature.tag}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold tracking-tight text-white lg:text-2xl mb-2">
                                    {feature.title}
                                </h3>

                                {/* Description - Appears on hover */}
                                <p className="max-w-md text-xs text-white/80 lg:text-sm leading-relaxed opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    {feature.description}
                                </p>

                                {/* Explore link - Refined */}
                                <div className="mt-4 flex items-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <div className="h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-12"></div>
                                    <span className="text-[10px] font-medium text-white uppercase tracking-wider">
                                        Learn more
                                    </span>
                                    <svg className="h-3 w-3 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Stats or Trust Indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-gray-100 pt-8 dark:border-gray-800">
                    {[
                        { number: "99.9%", label: "Uptime" },
                        { number: "150+", label: "Projects" },
                        { number: "24/7", label: "Support" },
                        { number: "ISO", label: "Certified" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white">{stat.number}</div>
                            <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}