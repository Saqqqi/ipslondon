export default function Contact() {
    return (
        <section id="contact" className="bg-white py-24 dark:bg-gray-950 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:items-start">

                    {/* Left Column: Contact Information */}
                    <div>
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Let's Talk About Your Project
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                                Ready to elevate your digital presence? Reach out to our London-based team of experts today. Whether you have a specific requirement or just want to explore possibilities, we're here to help.
                            </p>

                            <div className="mt-10 space-y-6">
                                <div className="flex gap-x-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">Email Us</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-400 font-medium">hello@ipslondon.co.uk</p>
                                    </div>
                                </div>

                                <div className="flex gap-x-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">Our Office</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                                            Canary Wharf, London, E14 5AA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form UI */}
                    <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/10 lg:p-10">
                        <form action="#" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white text-left">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            required
                                            className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white text-left">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white text-left">
                                    Email address
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white text-left">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center items-center rounded-xl bg-blue-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
                                >
                                    Send Message
                                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
