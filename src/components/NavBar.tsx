// NavBar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/images/logo.png";
import { ThemeToggleButton } from "@/components/MyComponents/ThemeToggleButton";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Who we are", href: "#about-us" },
  { label: "What we do", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Community", href: "#community-engagement" },
  { label: "Contact Us", href: "#contact-us" },
];

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-sm border-b border-border shadow-green-700 transition-colors duration-300 bg-background text-foreground">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="MSV Logo" />
            <span className="text-2xl tracking-tight  text-black font-robert-regular font-bold transition duration-300 ">
              M<span className="text-primary">S</span>V
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-foreground font-robert-medium font-semibold transition hover:text-primary hover:bg-secondary hover:underline hover:scale-105"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <ThemeToggleButton />
          </div>
          <div className="lg:hidden sm:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-background w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="text-lg text-foreground hover:underline hover:bg-secondary hover:scale-105"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <ThemeToggleButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
