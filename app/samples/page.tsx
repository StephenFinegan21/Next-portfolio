import Link from "next/link";

export default function SamplesPage() {
  const samples = [
    {
      name: "Sauna",
      slug: "sauna",
      description: "A modern wellness experience showcasing steam rooms, infrared saunas, and cold plunge facilities",
      href: "/samples/sauna",
    },
    {
      name: "Nexus",
      slug: "nexus",
      description: "A collaborative platform designed to transform how teams work together and adapt to the future of work",
      href: "/samples/nexus",
    },
    // Add more samples here as you create them
  ];

  return (
    <div className="min-h-screen bg-zinc-200/20 dark:bg-zinc-900 p-8 sm:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
          Samples
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg">
          A collection of sample projects and experiments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((sample) => (
            <Link
              key={sample.slug}
              href={sample.href}
              className="group block p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-700"
            >
              <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {sample.name}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {sample.description}
              </p>
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-400 font-medium">
                View project →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
