import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png"; // ✅ import your logo

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ===== LOGO ===== */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Jijoh Tours & Tourism Home"
        >
          <img
            src={logo}
            alt="Jijoh Tours & Tourism Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="font-heading text-lg font-bold text-neutral-800 tracking-tight">
            Jijoh <span className="text-brand-500">Connect</span>
          </span>
          
        </NavLink>

        {/* ===== DESKTOP MENU ===== */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-brand-600 font-semibold"
                    : "text-neutral-600 hover:text-brand-500"
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* ===== APPLY NOW BUTTON ===== */}
          <NavLink
            to="/apply"
            className="ml-4 px-5 py-2.5 rounded-full bg-brand-gradient text-white text-sm font-semibold shadow-brand hover:shadow-glow transition-all duration-300 hover:scale-[1.03] focus:ring-2 focus:ring-brand-400"
          >
            Apply Now
          </NavLink>
        </nav>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-700 hover:text-brand-500 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-sm animate-fadeIn">
          <nav className="flex flex-col py-4 px-6 space-y-3 text-sm font-medium">
            {navItems.map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-brand-600 font-semibold"
                      : "text-neutral-600 hover:text-brand-500"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            {/* ===== MOBILE APPLY BUTTON ===== */}
            <NavLink
              to="/apply"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block text-center px-5 py-2.5 rounded-full bg-brand-gradient text-white font-semibold shadow-brand hover:shadow-glow transition-all duration-300"
            >
              Apply Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
