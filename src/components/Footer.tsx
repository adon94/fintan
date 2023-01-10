function Footer() {
  return (
    <footer className="p-4 shadow flex items-center justify-center md:p-6 bg-gray-800">
      <span className="text-sm sm:text-center text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Fintan.io
        </a>
      </span>
      {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.termsfeed.com/live/4875ffe6-29e8-49c3-be04-d3ac0d3a65e3"
            target="_blank"
            rel="noopener"
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </li>
      </ul> */}
    </footer>
  );
}

export default Footer;
