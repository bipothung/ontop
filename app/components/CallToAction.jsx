// components/CallToAction.jsx
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="w-full bg-black py-28 flex items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Let&apos;s create something remarkable together
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
          Ready to transform your vision into reality? We&apos;re here to collaborate on your next architectural project.
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Get in touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
