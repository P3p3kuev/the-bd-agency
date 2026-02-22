export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold text-white mb-4">BD</div>
            <p className="text-sm leading-relaxed">
              Enterprise Revenue Architecture for B2B organizations seeking forecast
              integrity and executive revenue control.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#assessment" className="hover:text-white transition">
                  Executive Assessment
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition">
                  EVA Implementation
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition">
                  Revenue Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-500">About</li>
              <li className="text-gray-500">Case Studies</li>
              <li className="text-gray-500">Insights</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="mailto:hello@bdagency.com"
                  className="hover:text-white transition"
                >
                  hello@bdagency.com
                </a>
              </p>
              <p>
                <a href="tel:+14155552671" className="hover:text-white transition">
                  +1 (415) 555-2671
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} BD Agency. All rights reserved. Enterprise Revenue
            Architecture™ and EVA™ are trademarks of BD Agency.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500">Privacy Policy</span>
            <span className="text-gray-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
