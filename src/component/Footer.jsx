
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Swiggy</h2>
          <p className="text-gray-400">Order food and much more online.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Team
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Help & Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Partner with us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Ride with us
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Legal</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Refund & Cancellation
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
