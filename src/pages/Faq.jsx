import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqs from "../data/faqs.js";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-center text-gray-600">
        Find answers to the most common questions about our services.
      </p>

      {/* FAQ List */}
      <div className="mt-10 space-y-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border shadow-sm transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-primary bg-primary/10"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-gray-800 hover:bg-gray-50 focus:outline-none transition"
              >
                <span
                  className={`text-sm md:text-base font-medium ${
                    isOpen ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {f.q}
                </span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-primary transition-transform duration-300" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
