const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} thewealthmanager.in. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/in/chinmayck"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/chinmayck20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="mailto:chinmayckclg@gmail.com"
              className="hover:text-indigo-500 transition"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
