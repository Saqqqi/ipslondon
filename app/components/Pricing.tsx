import Link from "next/link";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "1,999",
            description: "Perfect for establishing a high-end digital presence.",
            features: [
                "Custom UI Design",
                "Responsive Development",
                "Basic SEO Setup",
                "3 Months Support",
                "Standard Analytics",
            ],
            cta: "Start Small",
            highlighted: false,
        },
        {
            name: "Professional",
            price: "4,999",
            description: "Advanced solutions for ambitious growing enterprises.",
            features: [
                "Advanced UI/UX Design",
                "E-commerce Integration",
                "Full SEO Strategy",
                "12 Months Support",
                "Advanced Analytics",
                "Priority Performance Ops",
            ],
            cta: "Go Pro",
            highlighted: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Bespoke engineering for global software requirements.",
            features: [
                "Dedicated Team Account",
                "Microservices Architecture",
                "24/7 Premium Support",
                "Custom API Development",
                "Security & Compliance Audit",
                "Unlimited Revisions",
            ],
            cta: "Contact Us",
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="relative overflow-hidden bg-white py-24 dark:bg-gray-950 sm:py-32 lg:py-48">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/2 -z-0 h-96 w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px]"></div>
            <div className="absolute bottom-0 left-1/2 -z-0 h-96 w-full -translate-x-1/2 translate-y-1/2 bg-indigo-500/10 blur-[120px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-24">
                    <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 backdrop-blur-sm dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>Tiered Pricing</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Choose the Right <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Growth Engine</span>
                    </h2>
                    <p className="mt-8 text-xl text-gray-600 dark:text-gray-400">
                        Transparent, value-driven pricing tailored for every stage of your digital journey.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`group relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-4 ${plan.highlighted
                                ? "bg-gray-900 shadow-2xl shadow-blue-500/20 dark:bg-gray-900 dark:ring-1 dark:ring-blue-500/50"
                                : "bg-white border border-gray-100 shadow-xl dark:bg-gray-900/50 dark:border-white/5"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 right-10 -translate-y-1/2">
                                    <span className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className={`text-2xl font-black uppercase tracking-widest ${plan.highlighted ? "text-blue-400" : "text-gray-900 dark:text-white"}`}>
                                    {plan.name}
                                </h3>
                                <div className="mt-6 flex items-baseline gap-x-2">
                                    <span className={`text-6xl font-black tracking-tighter ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                        {plan.price === "Custom" ? "" : "£"}{plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className={`text-sm font-bold uppercase tracking-widest ${plan.highlighted ? "text-white/50" : "text-gray-500 dark:text-gray-400"}`}>
                                            /project
                                        </span>
                                    )}
                                </div>
                                <p className={`mt-6 text-lg font-medium leading-relaxed ${plan.highlighted ? "text-gray-400" : "text-gray-600 dark:text-gray-400"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <ul role="list" className="flex-grow space-y-4 mb-10">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-x-4">
                                        <div className={`mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full ${plan.highlighted ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"}`}>
                                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className={`text-base font-medium ${plan.highlighted ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.price === "Custom" ? "/contact" : "/get-started"}
                                className={`block w-full rounded-2xl py-5 text-center text-sm font-black uppercase tracking-widest shadow-xl transition-all duration-300 active:scale-95 ${plan.highlighted
                                    ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/25"
                                    : "bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                                    }`}
                            >
                                {plan.cta}
                            </Link>

                            {/* Decorative Corner Glow */}
                            {plan.highlighted && (
                                <div className="absolute -bottom-px -right-px h-24 w-24 bg-gradient-to-br from-transparent to-blue-500/20 blur-2xl pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

