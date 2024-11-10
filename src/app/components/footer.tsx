import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Brand Info */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h1 className="font-extrabold text-white text-lg md:text-xl">FASHION</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Complete your style with awesome<br /> clothes from us.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-7 w-full md:w-2/4 justify-end text-center md:text-left">
          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="text-gray-400 space-y-1 mt-5 text-sm">
              <li>About</li>
              <li>Contact us</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="text-gray-400 space-y-1 mt-5 text-sm">
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="text-gray-400 space-y-1 mt-5 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;