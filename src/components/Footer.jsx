export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Jijoh <span className="text-red-600">Connect</span>
          </h2>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Bridging Kenya and Dubai through jobs, tours, and financial opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-gray-600">
            Kenya: <span className="font-medium text-gray-800">+254 757 425239</span>
            <br />
            UAE: <span className="font-medium text-gray-800">+971 581084957</span>
          </p>
          <p className="mt-2 text-gray-600">Email: jijohtours@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Jijoh Connect — All Rights Reserved
      </div>
    </footer>
  );
}
