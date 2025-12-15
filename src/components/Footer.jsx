const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 mt-10 py-5 text-sm text-gray-500 text-center">
      <p>© {new Date().getFullYear()} Akku. All rights reserved.</p>
      <p>Made with ❤️ using React & Tailwind</p>
    </footer>
  );
};

export default Footer;
