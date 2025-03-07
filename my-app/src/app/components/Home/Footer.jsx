import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gra500">
      {/* Top section: Social networks */}
      <div className="border-b border-gray-200 py-4 flex justify-between items-center lg:px-16">
  <div>Get connected with us on social networks:</div>
  <div className="flex space-x-4">
    <Link href="#" aria-label="Facebook">
      <FaFacebookF className="text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="#" aria-label="Twitter">
      <FaTwitter className="text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="#" aria-label="Google">
      <FaGoogle className="text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="#" aria-label="Instagram">
      <FaInstagram className="text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="#" aria-label="LinkedIn">
      <FaLinkedinIn className="text-xl hover:text-gray-800 transition-colors" />
    </Link>
    
  </div>
</div>


      {/* Main footer section */}
      <div className="mx-auto py-10 px-6 md:px-12 lg:px-16 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Company Name */}
          <div>
           <img src="/ActiveSine-logo.png" alt="logo" className="w-48 bg-white" />
            <p className="text-sm mt-12">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet   Lorem ipsum dolor sit amet
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                MDBootstrap
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                MDWordPress
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                BrandFlow
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Bootstrap Angular
              </Link>
            </p>
          </div>

          {/* Useful links */}
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Useful Links
            </h6>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Your Account
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Become an Affiliate
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Shipping Rates
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-50 hover:text-gray-800 transition-colors">
                Help
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              New York, NY 10012, US
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              info@example.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              + 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 text-center py-4 ">
        © 2025 Copyright:
        <Link href="https://mdbootstrap.com/" className="text-gray-600 font-semibold ml-1">
         medicare
        </Link>
      </div>
    </footer>
  );
}