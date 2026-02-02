import Image from "next/image";

export default function Stats() {
    const stats = [
        { label: "Global Clients", value: "200+", description: "Trusted by enterprises worldwide." },
        { label: "Projects Delivered", value: "500+", description: "Successful digital transformations." },
        { label: "Years Experience", value: "15+", description: "Deep industry expertise." },
        { label: "Success Rate", value: "99%", description: "Commitment to excellence." },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 sm:py-32">
            {/* Background Decorative Image */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Global Network"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Our Impact in Numbers
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                            Transforming businesses through precision engineering and strategic vision.
                        </p>
                    </div>

                    <dl className="mt-16 grid grid-cols-1 gap-px bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col bg-white p-10 transition-all hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900 sm:grid sm:grid-cols-1"
                            >
                                <dt className="order-2 mt-4">
                                    <span className="block text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                        {stat.label}
                                    </span>
                                    <span className="mt-2 block text-base text-gray-500 dark:text-gray-400">
                                        {stat.description}
                                    </span>
                                </dt>
                                <dd className="order-1 text-7xl font-black tracking-tighter text-blue-600 dark:text-blue-500">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
