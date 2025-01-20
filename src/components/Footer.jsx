import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-3 md:grid-cols-6  gap-8 mb-8 md:mb-12">
          <div className="col-span-3">
            <div className="flex h-8 mb-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKgSURBVHgB7ZlRchJBEIb/HlIpfRLfrNJQ64OKPpEbhBMIJxBPYDyB8QTqCSQ3wBNIThB8I/rAVhKrfHPVKqWsSNsNLAWbpWCyUyNWzfcy7LA7+9Pb0930EoSoytGFDCiIrBF/6VOcnb99j2tUQhkFSdenSpVfyPEB3HFw2qeX6cFOld8S0IILGMmI0KTKQ/4qB4WtMM/3IW4mMSV3qrxngPdwCeOdcS1YKV9zv2YKEW4Y/IcE0b4Ion0RRPsiiPZFEO2LINoXQbQvgmhfBNG+CKJ9EUSnJEMkOvKfyega96IZb7RRox8/f6KeHPfgmC2QWGPdho20pZjwfPnXiM9PqDs/d3pCuzv3uSHmyb0H6b0Jr2DBlgqRce2O0Fmf2rDk7CN1ln2nzclSCWvDjG+GbR4foawdVjjEkGW3ltAz0hv7YHPNyFUHNMWgYXM6GxwbEdG1uUjc6dktR9aWNnBL2sBPbK758RNH5rwvG4csQpO4yLa0b4sK1zYwWW5A+YFdjUyTkCdhCnZEInygDXlb8Xq+WLg97ltbtpklOrV1pLGCiMuj6xhctVctm7kjVuv8Bo7yXl/o5pUO/mM5ryE33MPViOUNw92ZaKXygPdt4+WqxdWq25M3AREKwiM009A5y4iSBF6z7abMJ0rD4tZEbISiiPvOx/qFNC4x/qkMMTYJySNi0P35qQXRsfijTNSxOcJjST7N7OSlgmlThKurmiF245yNnVvlzQk/xL9AfbhP9XhaLWZZWpqqcIkCLfbo52pdydD1rA9nWVlPa1WnIUzFO4oul0jFqnXHGXoFBEsWEgWhlpeQ0je207LzOOeuiabksd/+wuEyN3AmOkv0iGsXI5RloYgmMXkgT2a2F6ZFUaR/EKRETEoGvbzNZcNffJz+/JNmtw4AAAAASUVORK5CYII="
                alt=""
              />
              <img
                className="h-8"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              Join our community platform and connect with people who share your
              interests. Discover events, join groups, and make new friends.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="text-sm space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Communities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="text-sm  space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="text-sm space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              © 2025 Jackpass. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
