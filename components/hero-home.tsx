"use client";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importing React Icons

export default function HeroHome() {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Simulate form submission logic
    setShowNotification(true);
    setEmail('');
  };

  // Close notification
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  // Share message
  const message = "Excited to join the waitlist for Hyperflux! 🚀";
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=hyper-flux.vercel.app&title=${encodeURIComponent(message)}`;

  return (
    <section className="relative bg-gray-900 text-gray-200">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        {/* Hero content */}
        <div className="relative pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="mb-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-300 md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              AI Search Engine <br className="hidden lg:block" />
              That Transforms the Web
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-400"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Experience Hyperflux—an advanced AI-powered search platform designed to deliver real-time, media-rich results and smart follow-up questions to enhance your search experience.
              </p>
              {/* Join Waitlist Section */}
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <form onSubmit={handleSubmit} className="mx-auto max-w-md sm:flex sm:max-w-none sm:justify-center" data-aos="zoom-y-out" data-aos-delay={450}>
                  <input
                    type="email"
                    className="w-full mb-4 p-3 border border-gray-600 rounded-md text-gray-800 placeholder-gray-500 bg-gray-100 sm:mb-0 sm:w-auto sm:flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="btn w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg rounded-md sm:w-auto hover:scale-105 transition-transform"
                    type="submit"
                  >
                    Join Waitlist
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                  Be the first to try Hyperflux and unlock the future of search.
                </p>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-4xl mt-12"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)]">
                <span className="text-[13px] font-medium text-teal-400">
                  hyperflux.ai
                </span>
              </div>
              <div className="font-mono text-gray-500">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  HyperFlux.ai
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  "Search Anything…"
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  "AI-driven insights just for you!"
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  "Optimized for modern web users"
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  AI-powered search delivered instantly.
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Stay tuned for the next-gen search revolution.
                </span>
                <br />
                <span className="animate-[code-7_10s_infinite]">
                  Currently under development...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Box */}
      {showNotification && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <div className="relative bg-green-500 text-white p-6 rounded-lg shadow-lg transform transition-transform scale-105 opacity-90">
            <button
              onClick={handleCloseNotification}
              className="absolute top-2 right-2 text-white"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold">
              🎉 Thank you for joining the waitlist!
            </h3>
            <p className="mt-2">
              We'll keep you updated with the latest news.
            </p>
            <div className="mt-4 flex gap-4 items-center">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin className="h-6 w-6 mr-2" />
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
