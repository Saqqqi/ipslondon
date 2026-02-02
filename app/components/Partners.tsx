import Image from "next/image";

export default function Partners() {
    const partners = [
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    ];

    return (
        <div className="bg-white py-12 dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-10">
                    Powering Global Enterprises
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 dark:invert lg:gap-x-20">
                    {partners.map((partner) => (
                        <div key={partner.name} className="h-8 w-auto relative min-w-[120px] flex justify-center items-center">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={120}
                                height={40}
                                className="object-contain max-h-8 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
