'use client';

import Link from "next/link";
import { useState } from "react";

const appLinks = [
  { href: "/workout-tracker", name: "Workout Tracker" },
  { href: "/test-area", name: "Test Area" },
];

const projectLinks = [
  { href: "/fulladminaccess", name: "Fulladminaccess" },
  { href: "/jovs", name: "Jovs" },
  { href: "/transvium", name: "Transvium" },
];

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="relative inline-block col-start-3 justify-self-end z-50">
      {/* Botón para abrir/cerrar menú */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowApps(false);
          setShowProjects(false);
        }}
        className="p-2 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      {/* Panel desplegable */}
      {open && (
        <div
          onMouseLeave={() => {
            setOpen(false);
            setShowApps(false);
            setShowProjects(false);
          }}
          className="absolute right-0 mt-2 bg-black border border-gray-700 text-white p-4 rounded-xl w-64 shadow-xl"
        >
          <ul className="space-y-3">
            {/* Sección My Apps */}
            <li>
              <button
                onClick={() => {
                  setShowApps(!showApps);
                  setShowProjects(false); // Opcional: colapsa el otro submenú
                }}
                className="flex justify-between w-full hover:underline"
              >
                My Apps
                <span>{showApps ? '−' : '+'}</span>
              </button>
              {showApps && (
                <ul className="ml-4 mt-2 space-y-2">
                  {appLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Sección Projects Development */}
            <li>
              <button
                onClick={() => {
                  setShowProjects(!showProjects);
                  setShowApps(false); // Opcional: colapsa el otro submenú
                }}
                className="flex justify-between w-full hover:underline"
              >
                Projects Development
                <span>{showProjects ? '−' : '+'}</span>
              </button>
              {showProjects && (
                <ul className="ml-4 mt-2 space-y-2">
                  {projectLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
