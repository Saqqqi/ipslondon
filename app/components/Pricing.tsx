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
        <section id="pricing" className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-20 lg:py-24">
            {/* Ambient Background Elements - More subtle */}
            <div className="absolute top-0 left-1/2 -z-0 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-[100px]"></div>
            <div className="absolute bottom-0 left-1/2 -z-0 h-96 w-full max-w-4xl -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 blur-[100px]"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Refined */}
                <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        Pricing
                    </div>

                    {/* Headline */}
                    <h2 className="mt-4 text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Choose the Right{' '}
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Growth Engine
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-sm text-gray-500 sm:text-base dark:text-gray-400">
                        Transparent, value-driven pricing tailored for every stage of your digital journey.
                    </p>
                </div>

                {/* Pricing Grid - Refined */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${plan.highlighted
                                ? "bg-gray-900 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20 dark:bg-gray-900"
                                : "bg-white border border-gray-100 shadow-md hover:shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
                                }`}
                        >
                            {/* Popular Badge - More refined */}
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-6">
                                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-[10px] font-medium text-white shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-6">
                                <h3 className={`text-lg font-semibold ${plan.highlighted ? "text-blue-400" : "text-gray-900 dark:text-white"}`}>
                                    {plan.name}
                                </h3>

                                <div className="mt-3 flex items-baseline gap-1">
                                    {plan.price !== "Custom" && (
                                        <span className={`text-2xl font-medium ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                            £
                                        </span>
                                    )}
                                    <span className={`text-3xl font-semibold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className={`text-xs ${plan.highlighted ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
                                            /project
                                        </span>
                                    )}
                                </div>

                                <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <ul role="list" className="flex-grow space-y-3 mb-6">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <div className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full ${plan.highlighted ? "bg-blue-500/20" : "bg-blue-50 dark:bg-blue-900/20"}`}>
                                            <svg className={`h-2.5 w-2.5 ${plan.highlighted ? "text-blue-400" : "text-blue-600 dark:text-blue-400"}`} fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className={`text-xs ${plan.highlighted ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href={plan.price === "Custom" ? "/contact" : "/get-started"}
                                className={`block w-full rounded-lg py-3 text-center text-xs font-medium transition-all duration-300 active:scale-95 ${plan.highlighted
                                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
                                    : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Optional: Enterprise note */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                        Need a custom solution?{' '}
                        <Link href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                            Contact our team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}