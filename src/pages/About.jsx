import team from '../data/team.js'
import Testimonials from '../components/Testimonials.jsx'
import PartnersCarousel from '../components/PartnersCarousel.jsx'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Intro */}
      <h1 className="text-3xl md:text-5xl font-bold text-primary text-center">
        About Olajan Global Services
      </h1>
      <p className="mt-6 text-lg text-neutral text-center max-w-3xl mx-auto leading-relaxed">
        For over a decade, <span className="font-semibold text-primary">Olajan Global Services LTD</span> 
        has delivered dependable technology solutions across Solar, Office Equipment, and IT.
        <br />
        Our values—<span className="text-secondary font-medium">Integrity</span>,{" "}
        <span className="text-secondary font-medium">Safety</span>, and{" "}
        <span className="text-secondary font-medium">Customer Success</span>—guide every project from design to support.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mt-14">
        <div className="rounded-2xl bg-white shadow-md p-8 border-t-4 border-primary hover:shadow-xl transition">
          <h3 className="font-bold text-xl text-primary">Our Mission</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            To empower homes and businesses with reliable power and productivity 
            solutions, delivered by a customer-obsessed team.
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow-md p-8 border-t-4 border-secondary hover:shadow-xl transition">
          <h3 className="font-bold text-xl text-secondary">Our Vision</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            A sustainable Africa where energy and technology drive inclusive growth 
            and operational excellence.
          </p>
        </div>
      </div>

      {/* Leadership Team */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold text-center text-primary mb-10">
          Leadership Team
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl bg-white shadow-md hover:shadow-lg transition p-6 text-center border border-gray-100"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/30"
              />
              <div className="mt-4 font-semibold text-lg text-neutral">{m.name}</div>
              <div className="text-sm text-gray-500">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold text-center text-primary mb-8">
          Trusted Partners
        </h3>
        <PartnersCarousel />
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold text-center text-primary mb-8">
          What Our Clients Say
        </h3>
        <Testimonials />
      </section>
    </div>
  )
}
