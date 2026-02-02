export default function Features() {
    const features = [
        {
            title: "Bespoke Digital Solutions",
            description: "We don't believe in one-size-fits-all. Our engineering team crafts custom software architectures exclusively designed to match your unique business workflows and scalability requirements.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            ),
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Agile & Transparent",
            description: "Experience complete visibility into your project's lifecycle. We employ agile methodologies with bi-weekly sprints, ensuring you're always part of the loop and can pivot instantly as market needs change.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
            ),
            gradient: "from-purple-500 to-indigo-500",
        },
        {
            title: "Enterprise-Grade Security",
            description: "Security isn't an afterthought; it's our foundation. We implement rigorous security protocols, automated testing, and compliance standards (GDPR, ISO 27001) to safeguard your data and reputation.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
            ),
            gradient: "from-emerald-500 to-teal-500",
        },
    ];

    return (
        <section className="bg-gray-50 py-24 dark:bg-gray-900 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Why IPSLondon?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Built for those who demand excellence
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        We combine technical prowess with business acumen to deliver software that actually works for you.
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-20 lg:mt-24">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`flex flex-col gap-12 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Visual Side */}
                            <div className="flex-1 lg:w-1/2">
                                <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/10 lg:max-w-none">
                                    {/* Abstract Header Bar */}
                                    <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800/50">
                                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                    </div>

                                    {/* Abstract Content Representation */}
                                    <div className="p-8">
                                        <div className={`mb-6 h-32 w-full rounded-xl bg-gradient-to-br ${feature.gradient} opacity-20 dark:opacity-30`}></div>
                                        <div className="space-y-3">
                                            <div className="h-4 w-3/4 rounded bg-gray-100 dark:bg-gray-700"></div>
                                            <div className="h-4 w-1/2 rounded bg-gray-100 dark:bg-gray-700"></div>
                                            <div className="h-4 w-5/6 rounded bg-gray-100 dark:bg-gray-700"></div>
                                        </div>
                                    </div>

                                    {/* Floating Icon Badge */}
                                    <div className={`absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-gray-300/50 dark:shadow-none`}>
                                        {feature.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 lg:w-1/2">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                                    {feature.title}
                                </h3>
                                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                                <div className="mt-8">
                                    <a href="#" className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                                        Read more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
