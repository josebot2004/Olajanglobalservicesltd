import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="container mx-auto my-20 px-4">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary to-primary-light text-white p-10 md:p-16 text-center shadow-2xl">
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-secondary.tint/20 opacity-30"></div>

        {/* Heading */}
        <h3 className="relative text-3xl md:text-5xl font-extrabold leading-snug drop-shadow-md">
          Ready to Upgrade Your{" "}
          <span className="text-secondary">Power</span> &amp;{" "}
          <span className="text-secondary">Productivity?</span>
        </h3>

        {/* Subtitle */}
        <p className="relative mt-5 text-neutral.lighter max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Get a <span className="font-semibold text-white">free consultation</span> and a
          tailored quote from our experts today. Take the next step toward{" "}
          <span className="underline decoration-secondary">
            smarter energy solutions
          </span>
          .
        </p>

        {/* Button */}
        <Link
          to="/contact"
          className="relative inline-block mt-10 bg-secondary text-neutral.DEFAULT font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-secondary.light hover:text-neutral.surface transition-all duration-300 ease-out"
        >
           Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
