import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 lg:py-40">
            {/* Background decorative elements */}
            <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 blur-3xl opacity-20 dark:opacity-10">
                <div className="aspect-square w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Content Column */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-sm font-semibold text-blue-800 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            <span>Who We Are</span>
                        </div>

                        <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                            Driving Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Excellence</span> in London
                        </h2>

                        <p className="mt-8 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                            At IPSLondon, we don't just build solutions; we craft digital legacies. Our mission is to empower enterprises with cutting-edge engineering and strategic foresight that transcends borders.
                        </p>

                        <div className="mt-12 grid gap-8 sm:grid-cols-2">
                            {[
                                {
                                    title: "Strategic Vision",
                                    desc: "Data-driven roadmaps that align technology with your core business objectives.",
                                    icon: (
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Agile Engineering",
                                    desc: "Rapid development cycles without compromising on security or scalability.",
                                    icon: (
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group rounded-3xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:bg-gray-900">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-800">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Bento Grid */}
                    <div className="relative lg:h-[600px]">
                        <div className="grid h-full grid-cols-6 grid-rows-6 gap-4">
                            {/* Main large image - The Innovation Center */}
                            <div className="relative col-span-4 row-span-4 overflow-hidden rounded-[2rem] shadow-2xl group">
                                <Image
                                    src="/london_office_collaboration.png"
                                    alt="IPSLondon Team Innovation Center"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-2xl font-black italic tracking-tight">Innovation Center</p>
                                    <p className="text-xs text-white/70 font-bold uppercase tracking-widest">Where the future is forged</p>
                                </div>
                            </div>

                            {/* Secondary image 1 - London Vibes */}
                            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-[2rem] shadow-xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                    alt="London Architecture"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Secondary image 2 - Strategy */}
                            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-[2rem] shadow-xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                                    alt="Collaboration"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Stats Card (Glassmorphism) */}
                            <div className="relative col-span-4 row-span-2 flex items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-blue-600 p-8 text-white shadow-2xl dark:bg-blue-500">
                                <div className="grid grid-cols-2 gap-8 text-center">
                                    <div>
                                        <div className="text-4xl font-black italic">150+</div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-80">Projects Delivered</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black italic">15+</div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-80">Global Partners</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative floating element */}
                        <div className="absolute -bottom-6 -right-6 h-32 w-32 animate-bounce rounded-full border-8 border-white bg-blue-600 shadow-2xl dark:border-gray-900">
                            <div className="flex h-full w-full items-center justify-center text-white">
                                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

