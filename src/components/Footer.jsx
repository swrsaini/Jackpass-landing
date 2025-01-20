import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
import jackpassIcon from "/images/jackpassIcon.png";
import jackpassText from "/images/jackpassText.png";
export function Footer() {
  const social = [Instagram, Twitter, Facebook, Linkedin, Youtube];
  const product = [
    "Features",
    "Communities",
    "Events",
    "Mobile App",
    "Pricing",
  ];
  const company = ["About Us", "Careers", "Press", "Blog", "Contact"];
  const support = [
    "Help Center",
    "Safety Center",
    "Community Guidelines",
    "Terms of Service",
    "Privacy Policy",
  ];
  const footerItem = [
    { name: "Product", items: product },
    { name: "Company", items: company },
    { name: "Support", items: support }
  ];
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-3 md:grid-cols-6  gap-8 mb-8 md:mb-12">
          <div className="col-span-3">
            <div className="flex h-8 mb-2">
              <img src={jackpassIcon} alt="icon" />
              <img className="h-8" src={jackpassText} alt="" />
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              Join our community platform and connect with people who share your
              interests. Discover events, join groups, and make new friends.
            </p>
            <div className="flex gap-4">
              {social.map((Icon, index) => {
                return (
                  <div key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          {footerItem.map((e, index) => {
                return <div key={index}> 
                <h4 className="font-semibold text-gray-900 mb-4">{e.name}</h4>
                <ul className="text-sm space-y-3">
                
                  {
                   e.items.map((el,index) => {
                    return <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {el}
                    </a>
                  </li>
                  })}
                </ul>
              </div>
              })}
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
