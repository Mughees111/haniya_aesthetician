import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-semibold gradient-text">{siteConfig.personal.name}</span>
            </div>
            <p className="text-gray-600 mb-4">{siteConfig.personal.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About Me</a></li>
              <li><a href="/aesthetic-services" className="text-gray-600 hover:text-primary-600 transition-colors">Services</a></li>
              <li><a href="/my-work" className="text-gray-600 hover:text-primary-600 transition-colors">My Work</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/botox" className="text-gray-600 hover:text-primary-600 transition-colors">Botox</a></li>
              <li><a href="/services/dermal-fillers" className="text-gray-600 hover:text-primary-600 transition-colors">Dermal Fillers</a></li>
              <li><a href="/services/prp-therapy" className="text-gray-600 hover:text-primary-600 transition-colors">PRP Therapy</a></li>
              <li><a href="/services/laser-treatments" className="text-gray-600 hover:text-primary-600 transition-colors">Laser Treatments</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <div className="space-y-3 mb-4">
              <a href={`tel:${siteConfig.personal.phone}`} className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.personal.phone}
              </a>
              <a href={`mailto:${siteConfig.personal.email}`} className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                {siteConfig.personal.email}
              </a>
            </div>
            <div className="flex space-x-3">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Instagram className="w-5 h-5 text-primary-600" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Facebook className="w-5 h-5 text-primary-600" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Linkedin className="w-5 h-5 text-primary-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-200 pt-8 text-center">
          <p className="text-gray-600">
            © {currentYear} {siteConfig.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
