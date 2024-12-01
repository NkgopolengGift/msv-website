import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-r from-green-500 to-green-800 text-background">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between text-xl font-general">
        <p className="mb-4 lg:mb-0">Developed & maintained by NkgopolengGift</p>
        <p className="mb-4 lg:mb-0 text-center lg:flex-1 lg:order-2">
          &copy; 2024 MediLink SA. All rights reserved.
        </p>
        <a
          href="https://www.facebook.com/YourFacebookPage"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 lg:mb-0 lg:order-3"
        >
          <Facebook className="h-6 w-6 text-background hover:text-primary transition duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
