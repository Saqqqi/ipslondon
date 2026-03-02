export default function Services() {
    const services = [
        {
            title: "Web Development",
            description: "High-performance, scalable web ecosystems built with cutting-edge frameworks for modern enterprises.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            ),
            color: "blue",
            lightBg: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400"
        },
        {
            title: "Mobile App Development",
            description: "Immersive mobile experiences that leverage native capabilities to engage users across all platforms.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            ),
            color: "indigo",
            lightBg: "bg-indigo-50 dark:bg-indigo-900/20",
            iconColor: "text-indigo-600 dark:text-indigo-400"
        },
        {
            title: "IT Support",
            description: "Dedicated technical support resolving issues quickly to ensure continuous operational excellence for your team.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-4.5 3.75L12 16.5m-1.5-1.5l1.5-1.5m-.17-1.42L3 3A2.652 2.652 0 006.75 6.75l5.83 5.83m3.75 4.5L16.5 12" />
                </svg>
            ),
            color: "purple",
            lightBg: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400"
        },
        {
            title: "Web Hosting",
            description: "Resilient, secure, and lightning-fast hosting infrastructure designed for maximum reliability and zero-downtime.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
            ),
            color: "cyan",
            lightBg: "bg-cyan-50 dark:bg-cyan-900/20",
            iconColor: "text-cyan-600 dark:text-cyan-400"
        },
        {
            title: "Website Updates & Bug Fixes",
            description: "Rapid deployment of features, deep bug squashing, and regular maintenance for your existing systems.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            ),
            color: "emerald",
            lightBg: "bg-emerald-50 dark:bg-emerald-900/20",
            iconColor: "text-emerald-600 dark:text-emerald-400"
        },
        {
            title: "Custom Software Solutions",
            description: "Bespoke internal tools and software specifically tailored to optimize your daily operational workflows.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
            ),
            color: "rose",
            lightBg: "bg-rose-50 dark:bg-rose-900/20",
            iconColor: "text-rose-600 dark:text-rose-400"
        },
    ];

    return (
        <section id="services" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 lg:py-32">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-900/20"></div>

            {/* Soft Gradient Orbs */}
            <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/5 to-indigo-600/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Clean */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Our Expertise
                    </div>

                    <h2 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                        Powering the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Next Generation
                        </span>
                        <br />
                        of Digital Innovation
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We don't just provide services; we build competitive advantages.
                        Our end-to-end solutions are engineered for safety, speed, and infinite scale.
                    </p>
                </div>

                {/* Services Grid - Clean Cards with Colored Icons */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
                        >
                            {/* Icon Container - Clean colored background */}
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.lightBg} group-hover:scale-110 transition-transform duration-300`}>
                                <div className={service.iconColor}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                {service.title}
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Simple Feature List */}
                            <ul className="mt-6 space-y-2">
                                <li className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <svg className={`h-4 w-4 ${service.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span>Enterprise-grade solutions</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <svg className={`h-4 w-4 ${service.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span>Scalable architecture</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <svg className={`h-4 w-4 ${service.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span>24/7 expert support</span>
                                </li>
                            </ul>

                            {/* Subtle Link */}
                            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <button className={`inline-flex items-center text-sm font-medium ${service.iconColor} hover:opacity-80 transition-all`}>
                                    Learn more
                                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}