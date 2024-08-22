import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Company Address */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Company Name</h4>
            <p className="text-gray-400">
              1234 Street Name, <br />
              City, State, 12345
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;