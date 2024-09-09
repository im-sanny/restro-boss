const Footer = () => {
  return (
    <div>
      {/* Main Footer */}
      <footer className="footer flex flex-col md:flex-row justify-between bg-slate-100 text-base-content py-10 px-5 md:px-20 space-y-6 md:space-y-0">
        {/* Logo & Company Info */}
        <aside className="">
          <img
            src="/src/assets/logo.png"
            alt="Restro Boss Logo"
            className="w-16 h-16 mb-3"
          />
          <p className="">
            <span className="text-2xl font-bold">Restro Boss</span>
            <br />
            <span className="text-sm">Providing deliciousness since 2024</span>
          </p>
        </aside>

        {/* Services Section */}
        <nav className="">
          <h6 className="footer-title font-semibold text-lg mb-2">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Company Section */}
        <nav className="">
          <h6 className="footer-title font-semibold text-lg mb-2">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Legal Section */}
        <nav className="">
          <h6 className="footer-title font-semibold text-lg mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      {/* Copyright Section */}
      <footer className="footer footer-center p-4 bg-slate-200 text-base-content">
        <aside>
          <p>Copyright © 2024 - All rights reserved by Restro Boss</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
