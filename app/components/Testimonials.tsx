export default function Testimonials() {
    const testimonials = [
        {
            content: "IPSLondon transformed our legacy systems into a high-performance cloud architecture. Their expertise in London's tech landscape is unmatched.",
            author: "James Wilson",
            role: "CTO",
            company: "Thames FinTech",
            initials: "JW"
        },
        {
            content: "The attention to detail in the UI/UX design phase was incredible. They didn't just build an app; they built an experience our customers love.",
            author: "Sarah Chen",
            role: "Product Director",
            company: "LND Logistics",
            initials: "SC"
        },
        {
            content: "Scaling our e-commerce platform seemed impossible until IPSLondon stepped in. Their technical prowess saved us months of development.",
            author: "Marcus Brown",
            role: "Founder",
            company: "Soho Retail Group",
            initials: "MB"
        },
        {
            content: "Their enterprise-grade security protocols gave our stakeholders the confidence to move forward with our global digital expansion.",
            author: "Elena Rodriguez",
            role: "Head of Infrastructure",
            company: "Global Capital",
            initials: "ER"
        },
        {
            content: "A masterclass in agile development. The bi-weekly updates and transparent communication made the entire build process a breeze.",
            author: "David Knight",
            role: "Digital Transformation Lead",
            company: "Mayfair Collective",
            initials: "DK"
        },
        {
            content: "The most professional engineering team we've worked with. They truly understand the balance between speed and quality.",
            author: "Oliver Bennett",
            role: "VP Engineering",
            company: "Vanguard Tech",
            initials: "OB"
        }
    ];

    // Duplicate testimonials for perfect infinite scroll
    const scrollingTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-20 lg:py-24">
            {/* Ambient Background Glows - More subtle */}
            <div className="absolute top-1/2 left-0 -z-0 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 -z-0 h-64 w-64 rounded-full bg-indigo-600/5 blur-[100px]"></div>

            {/* Section Header - Refined */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-10 lg:mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        Success Stories
                    </div>

                    {/* Headline */}
                    <h2 className="mt-4 text-2xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
                        Trusted by London's{' '}
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Most Innovative
                        </span>
                        <br />
                        Companies
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee Container - Refined */}
            <div className="relative mt-6 flex overflow-hidden py-6">
                <div className="flex animate-marquee hover:pause whitespace-nowrap">
                    {scrollingTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="mx-3 w-[380px] flex-none rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900/50 dark:backdrop-blur-sm"
                        >
                            {/* Author Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-medium text-white shadow-sm">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>

                            {/* Quote Icon - Subtle */}
                            <svg
                                className="mb-2 h-6 w-6 text-blue-200 dark:text-blue-800"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                            </svg>

                            {/* Content */}
                            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed whitespace-normal">
                                "{testimonial.content}"
                            </p>

                            {/* Company Indicator */}
                            <div className="mt-4 flex items-center gap-2">
                                <div className="h-px w-6 bg-blue-200 dark:bg-blue-800"></div>
                                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                    {testimonial.company}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fade Edges - Refined */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80"></div>
            </div>

            {/* Optional: Static testimonial highlight */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Join 150+ satisfied clients</span>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles - Optimized */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
                `
            }} />
        </section>
    );
}