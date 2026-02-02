import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-900 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">

                    {/* Content Column */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-300">
                            Who We Are
                        </div>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Driving Digital Excellence in the Heart of London
                        </h2>

                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            At IPSLondon, we bridge the gap between complex technology and business growth. Founded by a team of industry veterans, we specialize in transforming ambitious ideas into scalable digital realities.
                        </p>

                        <dl className="mt-8 space-y-4">
                            {[
                                {
                                    title: "Strategic Innovation",
                                    description: "We don't just build software; we engineer value. Our strategies are data-driven and future-proof."
                                },
                                {
                                    title: "Client-Centric Approach",
                                    description: "Your success is our metric. We work as an extension of your team, ensuring transparency at every step."
                                },
                                {
                                    title: "Global Standards, Local Expertise",
                                    description: "Based in London, operating successfully on a global scale with world-class engineering standards."
                                }
                            ].map((item) => (
                                <div key={item.title} className="relative pl-9">
                                    <dt className="font-semibold text-gray-900 dark:text-white">
                                        <svg className="absolute left-0 top-1 h-5 w-5 text-blue-600 dark:text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {item.title}
                                    </dt>
                                    <dd className="mt-2 text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Visual Column - Dynamic High-Quality Image */}
                    <div className="order-1 lg:order-2 lg:pl-10">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-2xl lg:aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1549421263-542f63df0264?q=80&w=2070&auto=format&fit=crop"
                                alt="London Digital Hub"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Global HQ</p>
                                <p className="text-xl font-bold">Canary Wharf, London</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
