import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://formspree.io/f/mwpqgqpr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("Thanks! We'll be in touch soon.");
        reset();
      } else {
        alert("Sorry, something went wrong. Please try again.");
      }
    } catch (e) {
      alert("Network error. Try again later.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary text-center">
        Contact Us
      </h1>
      <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
        Reach out to us for inquiries, support, or partnership opportunities.
        We typically respond within one business day.
      </p>

      {/* Main Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-md p-8 space-y-5 border border-gray-100"
        >
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Your full name"
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
            />
            {errors.name && (
              <span className="text-xs text-red-600 mt-1">Name is required</span>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /.+@.+\..+/,
              })}
              placeholder="you@example.com"
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
            />
            {errors.email && (
              <span className="text-xs text-red-600 mt-1">Valid email is required</span>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              {...register("phone")}
              placeholder="+234 812 000 0000"
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <select
              {...register("subject")}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
            >
              <option>General Inquiry</option>
              <option>Service Request</option>
              <option>Quote</option>
              <option>Partnership</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              placeholder="How can we help you?"
              rows={5}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
            />
            {errors.message && (
              <span className="text-xs text-red-600 mt-1">Message is required</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow hover:bg-primary-light transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {isSubmitSuccessful && (
            <div className="text-green-700 text-sm text-center mt-2">Your message has been sent!</div>
          )}
        </form>

        {/* Company Info */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-primary">Company Information</h3>
          <ul className="mt-5 space-y-4 text-gray-700 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              Oladimeji Street, Ibadan 200113, Oyo
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              +234 (0) 812-000-0000
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              hello@olajanglobal.com
            </li>
          </ul>

          <div className="mt-6 rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Company Location"
              className="w-full h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7263216170795!2d3.8969443!3d7.3775357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d35c4f66f6f%3A0x9d847bf9ac9e7d3e!2sOladimeji%20St%2C%20Ibadan%20200113%2C%20Oyo!5e0!3m2!1sen!2sng!4v1692459999999"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
