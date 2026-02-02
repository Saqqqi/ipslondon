import Link from "next/link";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "1,999",
            description: "Perfect for small businesses looking to establish a digital presence.",
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
            description: "Comprehensive solutions for growing enterprises demanding more power.",
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
            description: "Bespoke engineering for large-scale global software requirements.",
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
        <section id="pricing" className="bg-white py-24 dark:bg-gray-950 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Choose the right plan for your growth
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Scale your business with transparent, value-driven pricing tailored for every stage of your journey.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-3xl p-8 shadow-xl ring-1 transition-all duration-300 hover:scale-[1.02] ${plan.highlighted
                                    ? "bg-gray-900 ring-gray-900 dark:bg-white dark:ring-white"
                                    : "bg-white ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white shadow-sm transition-transform dark:bg-blue-500">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3
                                    className={`text-lg font-semibold leading-8 ${plan.highlighted ? "text-blue-400 dark:text-blue-600" : "text-gray-900 dark:text-white"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`mt-4 text-sm leading-6 ${plan.highlighted ? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-400"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span
                                        className={`text-4xl font-bold tracking-tight ${plan.highlighted ? "text-white dark:text-gray-900" : "text-gray-900 dark:text-white"
                                            }`}
                                    >
                                        {plan.price === "Custom" ? "" : "£"}
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span
                                            className={`text-sm font-semibold leading-6 ${plan.highlighted ? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-400"
                                                }`}
                                        >
                                            /project
                                        </span>
                                    )}
                                </p>
                            </div>

                            <ul
                                role="list"
                                className={`mt-2 space-y-3 text-sm leading-6 ${plan.highlighted ? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-400"
                                    }`}
                            >
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <svg
                                            className={`h-6 w-5 flex-none ${plan.highlighted ? "text-blue-400 dark:text-blue-600" : "text-blue-600 dark:text-blue-500"
                                                }`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Link
                                    href={plan.price === "Custom" ? "/contact" : "/get-started"}
                                    className={`block rounded-xl px-3 py-4 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all active:scale-95 ${plan.highlighted
                                            ? "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
                                            : "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
