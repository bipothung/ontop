// app/contact/page.jsx  (Next.js App Router)
// or pages/contact.jsx (Pages Router)

"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "971543367001"; // without +
    const text = `
*New Contact Form Submission* 📨

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "N/A"}
🏗️ Project Type: ${formData.projectType}
📝 Subject: ${formData.subject}
💬 Message: ${formData.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main className="w-full bg-[#f6efed] text-gray-800 pt-20 mt-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-700 max-w-2xl">
          We’d love to hear about your project. Reach out to discuss how we can
          help bring your architectural vision to life, or visit our studio to
          see our work in person.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left - Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1" />
            <div>
              <p className="font-medium">Visit Us</p>
              <p className="text-sm text-gray-600">
                United Arab Emirates
                <br /> Dubai
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 mt-1" />
            <div>
              <p className="font-medium">Call Us</p>
              <p className="text-sm text-gray-600">+97 1526346002</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1" />
            <div>
              <p className="font-medium">Email Us</p>
              <p className="text-sm text-gray-600">info@ontopproperties.ae</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-1" />
            <div>
              <p className="font-medium">Office Hours</p>
              <p className="text-sm text-gray-600">
                Monday – Friday: 9am – 6pm <br />
                Saturday: By appointment <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone (optional)
              </label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Project Type
              </label>
              <select
                name="projectType"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select a project type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Interior Design</option>
                <option>Landscape</option>
                <option>Renovation</option>
                <option>Hospitality</option>
                <option>Office Spaces</option>
                <option>Retail</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              name="message"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">Find Us</h2>
        <div className="w-full h-72 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115898.06542397426!2d55.20050925321318!3d25.2769870903265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4346e43b81cf%3A0x9dcf9c9c99f0b!2sDubai!5e0!3m2!1sen!2sae!4v1692783664785!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
