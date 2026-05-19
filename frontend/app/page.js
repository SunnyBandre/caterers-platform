import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
          Welcome to Caterers Near Me
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Find The Perfect Caterer For Your Special Event
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          Explore top-rated caterers, compare prices, discover cuisines, and
          book unforgettable dining experiences for weddings, birthdays,
          corporate events, and more.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/caterers"
            className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-gray-200"
          >
            Explore Caterers
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="mt-2 text-gray-200">Trusted Caterers</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="mt-2 text-gray-200">Happy Customers</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="mt-2 text-gray-200">Cuisine Options</p>
          </div>
        </div>
      </div>
    </main>
  );
}
