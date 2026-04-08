import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { resolveAsset } from '../utils/resolveAsset';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Aesthetic Services', path: '/aesthetic-services' },
  { name: 'Digital Marketing', path: '/digital-marketing' },
  { name: 'My Work', path: '/my-work' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs', path: '/blogs' },
];

export default function Header({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <img
                src={resolveAsset(siteConfig.personal.image)}
                alt={siteConfig.personal.name}
                className="w-full h-full object-cover"
                style={{borderRadius:20}}
                // style={{ opacity: 0.3 }}
              />
              {/* <span className="text-white font-bold text-xl">GH</span> */}
            </div>
            <span className="text-xl font-semibold gradient-text">{siteConfig.personal.name}</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${isActive(link.path)
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'text-gray-700 hover:bg-primary-50'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${isActive(link.path)
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-700 hover:bg-primary-50'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
