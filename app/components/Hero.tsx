import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-950 min-h-screen flex items-center">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
                <Image
                    src="https://images.unsplash.com/photo-1549421263-542f63df0264?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-indigo-950/20"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left side - Content */}
                    <div className="flex flex-col text-left max-w-xl">
                        {/* Badge / Pill - More refined */}
                        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-blue-50/90 px-3 py-1 text-[11px] font-medium text-blue-700 backdrop-blur-sm w-fit shadow-sm dark:border-blue-800/60 dark:bg-blue-900/30 dark:text-blue-300">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            London's Premier Digital Partner
                        </div>

                        {/* Main Headline - Better hierarchy */}
                        <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white leading-[1.1]">
                            Transforming{' '}
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Brands
                            </span>
                            <br />
                            Through Digital Innovation
                        </h1>

                        {/* Subheadline - More readable */}
                        <p className="mt-4 max-w-lg text-base text-gray-500 sm:text-lg dark:text-gray-400 leading-relaxed">
                            IPSLondon delivers high-performance software engineering and strategic solutions tailored for the modern enterprise.
                        </p>

                        {/* CTA Buttons - Refined */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Start Your Journey
                                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>

                            <Link
                                href="#services"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-gray-700 shadow-md transition-all hover:bg-white hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-600"
                            >
                                View Expertise
                            </Link>
                        </div>

                        {/* Trust indicators - More elegant */}
                        <div className="mt-10 flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
                                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-base font-semibold text-gray-900 dark:text-white">50+</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Projects</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20">
                                    <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-base font-semibold text-gray-900 dark:text-white">Enterprise</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Integrated Form Design */}
                    <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                                <h3 className="text-lg font-semibold text-white">Get Your Free Consultation</h3>
                                <p className="text-sm text-blue-100 mt-0.5">Fill in the form below and we'll get back to you within 24 hours</p>
                            </div>

                            {/* Form Body */}
                            <div className="p-6">
                                <form className="space-y-4">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                            Full Name <span className="text-blue-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            placeholder="John Smith"
                                            required
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                            Email Address <span className="text-blue-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>

                                    {/* Service Selection - Split Layout */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="service" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                                Service
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="service"
                                                    name="service"
                                                    className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select</option>
                                                    <option value="software-engineering">Engineering</option>
                                                    <option value="web-development">Web Dev</option>
                                                    <option value="mobile-apps">Mobile Apps</option>
                                                    <option value="cloud-solutions">Cloud</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                                Budget Range
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select</option>
                                                    <option value="10-50k">£10k-50k</option>
                                                    <option value="50-100k">£50k-100k</option>
                                                    <option value="100k+">£100k+</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={2}
                                            className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                            placeholder="Brief description of your project..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-3 px-4 rounded-lg shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        Request Free Consultation
                                    </button>

                                    {/* Privacy Note */}
                                    <p className="text-xs text-center text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5 pt-2">
                                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Your information is secure and confidential</span>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}