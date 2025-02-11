const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-700 py-10 px-4 md:px-16">
      <div className="w-9/12 mx-auto">
        <div className="mb-8 flex justify-between">
          <img className="mb-8" src="./images/cup.png" alt="" />
          <div className="flex items-center gap-2">
            <h4>Ready to get started?</h4>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 rounded-lg text-white font-bold">
              <a href="/allArtifacts">Get Started</a>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-orange-600" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600" href="/allArtifacts">
                  All Artifacts
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600" href="/addArtifacts">
                  Add Artifacts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-orange-600" href="/">
                  Artifacts
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600" href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-orange-600" href="/">
                  about us
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a href="/">Ruls and regulation</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Subscribe to our Artifacts
            </h3>
            <div className="flex flex-col space-y-2">
              <div>
                <input
                  placeholder="Email Address"
                  type="text"
                  className="bg-transparent border-b-2 border-black w-4/6"
                />
                <i className="fa-solid fa-chevron-right w-7 h-7 bg-orange-600 inline-flex rounded-full text-white justify-center items-center"></i>
                <div className="flex justify-between w-2/5 mb-2 mt-8">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-square-instagram"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-4 mt-4">
          <p className="text-sm text-gray-600">
            © 2027 UIDesign.to - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
