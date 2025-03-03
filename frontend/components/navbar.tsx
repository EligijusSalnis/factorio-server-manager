// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './layout/ThemeToggle/theme-toggle';

const navItems = [
  { name: 'Create', href: '/create' },
  { name: 'Servers', href: '/servers' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = navItems.findIndex((item) => item.href === pathname);
    setActiveIndex(index >= 0 ? index : 0);
  }, [pathname]);

  return (
    <nav className="w-full shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo or Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold ">ServerHub</span>
          </div>

          {/* Navigation Links */}
          <div className="ml-10 flex items-center space-x-8 relative">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ease-in-out
                  ${
                    pathname === item.href
                      ? 'text-indigo-600'
                      : ' hover:text-indigo-500'
                  }`}
              >
                {item.name}
                {/* Underline Animation */}
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-300
                    ${pathname === item.href ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </Link>
            ))}

            {/* Moving Dot Indicator */}
            <div
              className="absolute -bottom-1 w-2 h-2 bg-indigo-600 rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: `${activeIndex * 64 + 24}px`, // Adjust based on spacing
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* Right Side (Optional) */}
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
