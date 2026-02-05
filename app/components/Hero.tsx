import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-950 min-h-[90vh] flex items-center">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
                <Image
                    src="https://images.unsplash.com/photo-1549421263-542f63df0264?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-32 lg:pb-28">
                <div className="flex flex-col items-center text-center">
                    {/* Badge / Pill */}
                    <div className="mb-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-semibold text-blue-800 backdrop-blur-sm dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-300">
                        <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                        <span>London's Premier Digital Partner</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl md:text-8xl dark:text-white leading-[1.1]">
                        Transforming Brands <br />
                        Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Digital Innovation</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-8 max-w-2xl text-lg text-gray-600 sm:text-2xl dark:text-gray-300">
                        IPSLondon delivers high-performance software engineering and strategic
                        solutions tailored for the modern enterprise.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:justify-center w-full sm:w-auto">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/40 transition-all hover:bg-blue-700 hover:-translate-y-1 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
                        >
                            Start Your Journey
                            <svg className="ml-2 -mr-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>

                        <Link
                            href="#services"
                            className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white/50 backdrop-blur-md px-10 py-5 text-lg font-bold text-gray-900 shadow-xl transition-all hover:bg-white hover:-translate-y-1 active:scale-95 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:hover:bg-gray-800"
                        >
                            Our Expertise
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    );
}
