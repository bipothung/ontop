import Image from "next/image";

export default function About() {
  return (
    <main className="w-full  text-gray-800 pt-20 mt-20 md:mt-0">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              About OnTop Properties
            </h1>
            <p className="mb-4 leading-relaxed">
              At OnTop Properties, we believe real estate is more than transactions—
              it’s about shaping lifestyles, building legacies, and creating lasting value.
              With over 25 years of experience, we have guided clients across the UAE
              and beyond in finding, investing, and growing with confidence.
            </p>
            <p className="mb-4 leading-relaxed">
              Our agency specializes in luxury living solutions, offering everything
              from property consultancy and investment guidance to digital marketing
              strategies tailored for the modern real estate landscape.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full relative rounded-lg overflow-hidden shadow-lg aspect-square sm:aspect-[4/3]">
            <Image
              src="/image.png"
              alt="About OnTop Properties"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Approach */}
      <section className="min-h-screen bg-[#f6efed] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="leading-relaxed">
              To redefine luxury real estate by creating experiences that go beyond
              ownership—where every property inspires, every investment delivers
              lasting value, and every client relationship is built on trust and excellence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="leading-relaxed">
              At OnTop Properties, we combine 25+ years of expertise with modern
              digital solutions to deliver real estate experiences that go beyond
              transactions. Our approach begins with understanding each client’s
              needs and transforms them into tailored strategies that maximize
              visibility, create value, and inspire trust.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {["/a4.png", "/a5.png", "/a3.png"].map((src, i) => (
            <div key={i} className="w-full relative rounded-lg overflow-hidden aspect-[4/5] shadow">
              <Image src={src} alt="Gallery Image" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen bg-[#f6efed] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-center text-2xl font-semibold mb-12">Our Team</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 shadow rounded-lg">
              <div className="w-full relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/t1.png"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-sm text-gray-500 pb-3">Principal Architect</p>
              <p className="text-sm leading-6 text-gray-500">
                With over 15 years of experience, Sarah is renowned for her innovative
                designs and has won multiple international awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-4xl font-semibold mb-6">Our Values</h2>
          <p className="max-w-3xl mx-auto leading-relaxed">
            At OnTop Properties, our values guide every decision and every relationship we build.
            We believe in trust, ensuring complete transparency and integrity in every transaction.
            We embrace innovation, using modern strategies to stay ahead. And above all, we are
            committed to creating experiences that inspire, investments that endure, and
            relationships that last.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="h-[50vh] bg-black text-white flex items-center justify-center text-center">
        <div className="px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Interested in working with us?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto leading-relaxed">
            We’re always looking for exciting new projects and collaborations. Get in touch to
            discuss how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Contact us →
          </a>
        </div>
      </section>
    </main>
  );
}
