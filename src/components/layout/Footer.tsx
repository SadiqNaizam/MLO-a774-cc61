import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer component loaded');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          &copy; {currentYear} Your Application Name. All rights reserved.
        </p>
        <nav className="flex justify-center space-x-4">
          <Link to="/terms" className="hover:text-gray-900 dark:hover:text-gray-200 hover:underline">
            Terms of Service
          </Link>
          <span className="select-none">|</span>
          <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-gray-200 hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;