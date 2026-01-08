"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative" style={{ backgroundColor: "#fdf6e3" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
         

          {/* Contact Section */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold mb-6 text-amber-950"
            >
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-amber-900/70">
              <p>
                <span className="font-medium text-amber-950">Phone:</span>{" "}
                <a href="tel:+35319128276" className="hover:text-amber-700 transition-colors">
                  +353 1 912 8276
                </a>
              </p>
              <div>
                <p className="font-medium text-amber-950 mb-1">Support:</p>
                <a
                  href="mailto:support@thehotboxsauna.ie"
                  className="hover:text-amber-700 transition-colors"
                >
                  support@thehotboxsauna.ie
                </a>
              </div>
              <div>
                <p className="font-medium text-amber-950 mb-1">Hours:</p>
                <p className="text-amber-800/60 text-xs leading-relaxed">
                  Weekdays: 9am - 7pm
                  <br />
                  Weekends: 10am - 6pm
                </p>
              </div>
              <div>
                <p className="font-medium text-amber-950 mb-1">Business:</p>
                <a
                  href="mailto:info@thehotboxsauna.ie"
                  className="hover:text-amber-700 transition-colors"
                >
                  info@thehotboxsauna.ie
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="hover:text-amber-700 transition-colors underline text-amber-900/80"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-amber-700 transition-colors underline text-amber-900/80"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold mb-6 text-amber-950"
            >
              Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-amber-900/70 hover:text-amber-700 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-900/70 hover:text-amber-700 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-900/70 hover:text-amber-700 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-900/70 hover:text-amber-700 transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold mb-6 text-amber-950"
            >
              Stay Updated
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-lg px-4 py-3 text-amber-950 placeholder-amber-600/50 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-amber-800/60">
                Get wellness tips and special offers delivered to your inbox.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-200/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-amber-900/60">
          <div>
            <p className="text-xs">
              © {new Date().getFullYear()} The Hot Box Sauna. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">Country/region</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

