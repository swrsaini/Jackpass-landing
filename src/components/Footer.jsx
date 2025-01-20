import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react"
export function Footer(){
    return (
        <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-3 md:grid-cols-6  gap-8 mb-8 md:mb-12">
            <div className="col-span-3">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jackpass</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                Join our community platform and connect with people who share your interests. Discover events, join groups, and make new friends.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Communities</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Events</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile App</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Safety Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Community Guidelines</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm text-center sm:text-left">
                © 2025 Jackpass. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}