import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Rocket } from "lucide-react";
import contactUsHeroImg from "../assests/contact_us_hero.png";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-white" />,
    text: "support@skilltrix.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-white" />,
    text: "+91 XXXXX XXXX",
  },
  {
    icon: <MapPin className="h-5 w-5 text-white" />,
    text: "Bhubaneswar, Odisha",
  },
];

const InputField = ({ label, type = "text", placeholder, className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 ${className}`}
    />
  );
};

const CardTitle = ({ icon, title }) => {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
    </div>
  );
};

export default function ContactUsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // form submit logic here
  };

  return (
    <div className="min-h-screen bg-[#faf9ff] text-slate-800">
      {/* Main wrapper */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="relative overflow-hidden rounded-[2rem] bg-white/70 px-6 py-14 shadow-[0_10px_40px_rgba(124,58,237,0.08)] backdrop-blur-sm sm:px-10 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left text */}
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Get in touch with us for any queries or support.
              </p>
              <br />
              <br />
              <p className="max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl">
                If you have any questions regarding our programs, feel free to
                reach out to us.
                <br />
                We are here to help you.
              </p>
            </div>

            {/* Right illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[350px] w-full max-w-[520px]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-violet-100 via-purple-50 to-indigo-100 opacity-90" />
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(196,181,253,0.35),transparent_35%)]" />

                <img
                  src={contactUsHeroImg}
                  alt="Contact illustration"
                  className="relative z-10 h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Fallback simple illustration block if image is missing */}
                <div className="absolute inset-0 z-0 flex items-center justify-center p-6 text-center text-violet-600">
                  <div className="rounded-3xl border border-violet-200 bg-white/70 px-6 py-5 shadow-sm">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                      <Rocket className="h-8 w-8 text-violet-600" />
                    </div>
                    <p className="text-sm font-medium">
                      Add your illustration at
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {contactUsHeroImg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative waves */}
          <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(139,92,246,0.08))]" />
        </section>

        <section className="px-1 py-10"></section>

        {/* Cards area */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_35px_rgba(124,58,237,0.08)] ring-1 ring-violet-100">
            <CardTitle
              icon={<Rocket className="h-5 w-5" />}
              title="Contact Information"
            />

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#faf9ff] px-4 py-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-base font-medium text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_35px_rgba(124,58,237,0.08)] ring-1 ring-violet-100">
            <CardTitle
              icon={<MessageCircle className="h-5 w-5" />}
              title="Contact Form"
            />

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField placeholder="Full Name" />
              <InputField type="email" placeholder="Email Address" />

              <div className="grid grid-cols-[96px_1fr] gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center gap-1 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-slate-700"
                >
                  +91 <span className="text-xs">▼</span>
                </button>
                <InputField placeholder="Message" />
              </div>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-1 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-4 text-lg font-semibold text-white shadow-md transition hover:opacity-95"
              >
                Send Message <Send className="h-5 w-5" />
              </button>

              <p className="pt-1 text-sm text-slate-500">
                Our team will get back to you as soon as possible.
              </p>
            </form>
          </div>

          {/* Bottom left CTA */}

          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_35px_rgba(124,58,237,0.08)] ring-1 ring-violet-100 lg:col-span-1">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(167,139,250,0.10),rgba(139,92,246,0.18))] p-7">
              <h3 className="text-3xl font-extrabold leading-tight text-slate-800">
                Have questions?
                <br />
                We’re here to help you.
              </h3>

              <button
                type="button"
                className="mt-7 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-95"
              >
                Contact Now
              </button>
            </div>
          </div>

          {/* Empty space to match screenshot layout */}
          <div className="lg:col-span-2" />
        </section>
      </div>
    </div>
  );
}
