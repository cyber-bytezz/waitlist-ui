"use client"; // This directive makes this a Client Component

import { useState } from 'react';

export default function SignUp() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowPopup(true);
    // You can also add code to send form data to your server here
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder="Corey Barker"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="corybarker@email.com"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              className="form-input w-full py-2"
              type="text"
              placeholder="(+750) 932-8907"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button type="submit" className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Register
          </button>
          
        </div>
      </form>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By signing up, you agree to the{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#0">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#0">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-900/10 max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-50 rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-800 relative z-10">
              🎉 Welcome to the Hyperflux Waitlist!
            </h3>
            <p className="mt-2 text-gray-600 relative z-10">
              Thank you for registering. Spread the word and let others know you're in the loop!
            </p>
            <div className="mt-4 flex justify-center space-x-4 relative z-10">
              <a
                href={`https://twitter.com/intent/tweet?text=I%27m%20excited%20to%20join%20the%20Hyperflux%20waitlist!%20Check%20it%20out%20here:%20${encodeURIComponent('https://yourwebsite.com')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-blue-500 text-white shadow hover:bg-blue-700"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://yourwebsite.com')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-blue-600 text-white shadow hover:bg-blue-800"
              >
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
