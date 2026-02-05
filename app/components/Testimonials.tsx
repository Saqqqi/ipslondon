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
        <section id="testimonials" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 sm:py-32 lg:py-48">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]"></div>
            <div className="absolute bottom-0 right-0 -z-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-[130px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-24">
                    <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>Success Stories</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Trusted by London's <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Most Innovative</span> Companies
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative mt-8 flex overflow-hidden py-10">
                <div className="flex animate-marquee hover:pause whitespace-nowrap">
                    {scrollingTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="mx-4 w-[450px] flex-none rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/10 dark:border-white/5 dark:bg-gray-900/50 dark:backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-x-5 mb-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-black text-white shadow-lg">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-blue-600/70 dark:text-blue-400/70">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <svg
                                    className="absolute -left-2 -top-4 h-10 w-10 text-blue-500/10 dark:text-blue-500/20"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative text-lg font-medium leading-relaxed italic text-gray-600 dark:text-gray-300 whitespace-normal">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-2">
                                <div className="h-0.5 w-8 bg-blue-600/30 dark:bg-blue-400/30"></div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">{testimonial.company}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fade Edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-950"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-950"></div>
            </div>

            {/* Custom Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .pause:hover {
                    animation-play-state: paused;
                }
                `
            }} />
        </section>
    );
}

