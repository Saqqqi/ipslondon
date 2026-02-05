export default function Services() {
    const services = [
        {
            title: "Custom Web Engineering",
            description: "High-performance, scalable web ecosystems built with cutting-edge frameworks for modern enterprises.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            ),
            color: "blue"
        },
        {
            title: "Next-Gen Mobile Apps",
            description: "Immersive mobile experiences that leverage native capabilities to engage users across all platforms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            ),
            color: "indigo"
        },
        {
            title: "Premium UI/UX Design",
            description: "Psychology-driven design systems that prioritize user intuition while maintaining brand elegance.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
            ),
            color: "purple"
        },
        {
            title: "Cloud Architecture",
            description: "Resilient cloud infrastructure designed for zero-downtime and global scale scalability.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
            ),
            color: "cyan"
        },
        {
            title: "Data-Driven Strategy",
            description: "Actionable strategic roadmaps derived from deep market analytics and industry foresight.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
            ),
            color: "emerald"
        },
        {
            title: "Strategic Growth",
            description: "Omni-channel growth services designed to capture and retain premium market share.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
            ),
            color: "rose"
        },
    ];

    return (
        <section id="services" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 sm:py-32 lg:py-48">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-10">
                <div className="aspect-square w-[600px] rounded-full bg-gradient-to-l from-blue-600 to-transparent"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-sm font-semibold text-blue-800 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Powering the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Next Generation</span> of Digital
                    </h2>
                    <p className="mt-8 text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We don't just provide services; we build competitive advantages. Our end-to-end solutions are engineered for safety, speed, and infinite scale.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="group relative flex flex-col rounded-[2.5rem] border border-gray-100 bg-white p-10 transition-all duration-500 hover:z-20 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-500/50"
                        >
                            {/* Card Hover Effect */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-900/5"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-500/20 dark:bg-gray-900 dark:text-gray-400`}>
                                    {service.icon}
                                </div>

                                <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-60 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    Explore Innovation
                                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Overlay */}
                <div className="mt-20 flex justify-center">
                    <div className="inline-flex items-center space-x-8 rounded-3xl border border-gray-100 bg-white/50 p-4 pl-8 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/50">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Ready to build something extraordinary?</span>
                        <a href="#contact" className="rounded-2xl bg-gray-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-black hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

