import { Navbar } from "@/components/navbar";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Blog
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Read our latest articles and updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}