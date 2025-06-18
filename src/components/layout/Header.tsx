import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Example logo icon

const Header: React.FC = () => {
  console.log('Header component loaded');

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ShieldCheck className="h-8 w-8 text-green-400" />
              <span className="font-semibold text-xl tracking-tight">AuthApp</span>
            </Link>
          </div>
          {/* Navigation items can be added here if needed in the future */}
          {/* For a login page, usually minimal navigation is best */}
          {/* Example:
          <nav className="space-x-4">
            <Link to="/features" className="text-gray-300 hover:text-white">Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          </nav>
          */}
        </div>
      </div>
    </header>
  );
};

export default Header;