"use client";
import { useState } from 'react';
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing React Icons

export default function Cta() {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Simulate form submission logic
    // In a real application, you would send the email to a server here

    // Show notification
    setShowNotification(true);

    // Clear the email input field
    setEmail('');
  };

  // Close notification
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  // Share message
  const message = "Excited to join the waitlist for Hyperflux! 🚀";
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=hyper-flux.vercel.app&title=${encodeURIComponent(message)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Join our Waitlist for Hyperflux
            </h2>
            <form className="mx-auto max-w-xs sm:max-w-none sm:justify-center" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4"
                />
                <button
                  type="submit"
                  className="btn group w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow hover:bg-blue-700 sm:w-auto"
                >
                  <span className="relative inline-flex items-center">
                    Join Waitlist{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </form>
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
                      className="flex items-center text-black hover:text-gray-700 transition-colors"
                    >
                      <FaLinkedin className="h-6 w-6 mr-2" />
                      Share on LinkedIn
                    </a>
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-black hover:text-gray-700 transition-colors"
                    >
                      <FaTwitter className="h-6 w-6 mr-2" />
                      Share on Twitter
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
