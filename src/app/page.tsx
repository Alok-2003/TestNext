import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
      <Navbar/>
      <section className="flex h-screen flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-green-400">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Trade Smarter with Bit Bazaar</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Your one-stop solution for secure, fast, and reliable cryptocurrency trading.
        </p>
        <div>
          <a
            href="/home"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

    </div>
    </>
  );
}
