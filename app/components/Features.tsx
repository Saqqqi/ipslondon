import Image from "next/image";

export default function Features() {
    const features = [
        {
            title: "Bespoke Digital Solutions",
            description: "Custom software architectures exclusively designed for your unique business workflows.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            tag: "Custom Engineering",
            gradient: "from-blue-600 to-cyan-500",
            size: "col-span-12 lg:col-span-7",
        },
        {
            title: "Security First",
            description: "Mission-critical protocols to safeguard your reputation.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
            tag: "Encrypted",
            gradient: "from-rose-500 to-orange-500",
            size: "col-span-12 lg:col-span-5",
        },
        {
            title: "Agile & Transparent",
            description: "Complete visibility with bi-weekly sprint cycles.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            tag: "Agile Delivery",
            gradient: "from-emerald-500 to-teal-500",
            size: "col-span-12 lg:col-span-5",
        },
        {
            title: "Cloud Infrastructure",
            description: "Resilient systems designed for global scale.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
            tag: "Global Edge",
            gradient: "from-blue-500 to-indigo-600",
            size: "col-span-12 lg:col-span-7",
        }
    ];

    return (
        <section id="features" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 lg:py-48">
            <div className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-sm font-semibold text-blue-800 backdrop-blur-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>Why IPSLondon?</span>
                    </div>
                    <h2 className="max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                        Built for those who <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Demand Excellence</span>
                    </h2>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`${feature.size} group relative min-h-[450px] overflow-hidden rounded-[3rem] border border-gray-100 bg-white shadow-2xl transition-all duration-700 hover:-translate-y-2 dark:border-gray-800 dark:bg-gray-900`}
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-12">
                                <div className={`inline-flex w-fit rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl backdrop-blur-md bg-gradient-to-r ${feature.gradient} ring-1 ring-white/10 mb-6`}>
                                    {feature.tag}
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="max-w-md text-lg text-white/70 font-medium leading-relaxed opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                    {feature.description}
                                </p>

                                <div className="mt-8 flex items-center space-x-4">
                                    <div className="h-1 w-0 bg-blue-500 transition-all duration-700 group-hover:w-16"></div>
                                    <span className="text-sm font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">Explore Solution</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
