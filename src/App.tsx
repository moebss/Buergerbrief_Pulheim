/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Form from "./components/Form";
import LegalModals from "./components/LegalModals";

export default function App() {
  const [activeModal, setActiveModal] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rek-gelb selection:text-gray-900">
      <Hero />
      <Form />
      <Contact />

      {/* Footer */}
      <footer className="footer-premium relative overflow-hidden">
        {/* Gradient accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-rek-magenta via-[#ff6eb4] to-rek-gelb" />

        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-rek-magenta/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
          {/* Main footer content */}
          <div className="flex flex-col items-center space-y-8">
            {/* Logo / Title */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Bürgerbrief <span className="text-rek-gelb">Pulheim</span>
              </h3>
              <p className="text-sm text-gray-500 max-w-md">
                Ein Projekt für mehr Bürgerbeteiligung und direkten Dialog
                zwischen Bürgern und Kommunalpolitik.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setActiveModal("impressum")}
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Impressum
              </button>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <button
                onClick={() => setActiveModal("datenschutz")}
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Datenschutz
              </button>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Bürgerbrief Pulheim. Alle Rechte vorbehalten.
            </p>

            {/* Badge */}
            <div className="pt-4">
              <a href="https://rheindorf.digital" target="_blank" rel="noopener noreferrer" className="badge-rheindorf">
                <span className="badge-rheindorf__inner">
                  <span className="badge-rheindorf__text">
                    <span className="badge-rheindorf__eyebrow">Made by</span>
                    <span className="badge-rheindorf__name">rheindorf<span>.digital</span></span>
                  </span>
                </span>
                <span className="badge-rheindorf__tip" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </main>
  );
}
