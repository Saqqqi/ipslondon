export default function Testimonials() {
    const testimonials = [
        {
            content: "IPSLondon transformed our legacy systems into a high-performance cloud architecture. Their expertise in London's tech landscape is unmatched.",
            author: "James Wilson",
            role: "CTO",
            company: "Thames FinTech",
            initials: "JW",
            color: "bg-blue-600",
        },
        {
            content: "The attention to detail in the UI/UX design phase was incredible. They didn't just build an app; they built an experience our customers love.",
            author: "Sarah Chen",
            role: "Product Director",
            company: "LND Logistics",
            initials: "SC",
            color: "bg-indigo-600",
        },
        {
            content: "Scaling our e-commerce platform seemed impossible until IPSLondon stepped in. Their technical prowess and agile approach saved us months.",
            author: "Marcus Brown",
            role: "Founder",
            company: "Soho Retail Group",
            initials: "MB",
            color: "bg-emerald-600",
        },
    ];

    return (
        <section id="testimonials" className="bg-gray-50 py-24 dark:bg-gray-900 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Success Stories</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Trusted by London's most innovative companies
                    </p>
                </div>

                {/* CSS-Only Slider/Scroll Container */}
                <div className="mt-16 relative">
                    <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.author}
                                className="min-w-[85vw] snap-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-700 sm:min-w-[400px] lg:min-w-0"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonial.color} text-sm font-semibold text-white`}>
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            {testimonial.role} @ {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-6">
                                    <svg
                                        className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-4 text-gray-100 dark:text-gray-700"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="relative text-lg italic leading-8 text-gray-600 dark:text-gray-300">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hint for mobile scrolling */}
                    <div className="mt-6 flex justify-center gap-2 lg:hidden">
                        <div className="h-1.5 w-6 rounded-full bg-blue-600"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                </div>

                {/* CSS to hide scrollbar while keeping functionality */}
                <style dangerouslySetInnerHTML={{
                    __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
            </div>
        </section>
    );
}
