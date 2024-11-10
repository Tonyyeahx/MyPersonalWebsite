import React from 'react';
import { Menu, X, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Zihao</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hello, I'm Zihao
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Backend Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Tonyyeahx" className="text-gray-600 hover:text-gray-900">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tonyyeahx/" className="text-gray-600 hover:text-gray-900">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:zihaoyedev@email.com" className="text-gray-600 hover:text-gray-900">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;