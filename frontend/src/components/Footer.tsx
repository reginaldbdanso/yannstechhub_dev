import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black pt-[10px] w-full">
      <div className="py-[73px] px-[70px] flex justify-center">
        <div className="flex flex-row w-[655px] max-w-full gap-5 justify-between">
          <div className="flex flex-col">
            <img src="/src/assets/Logo (1).png" alt="YannsTechHub Footer Logo" className="w-[132px] aspect-[4.13] object-contain" />
            <div className="flex mt-[19px] gap-[33px]">
              <Link to="#" aria-label="Facebook" className="text-white hover:text-blue-400">
                <Facebook className="w-[18px] h-[18px]" />
              </Link>
              <Link to="#" aria-label="Twitter" className="text-white hover:text-blue-400">
                <Twitter className="w-[18px] h-[18px]" />
              </Link>
              <Link to="#" aria-label="Instagram" className="text-white hover:text-blue-400">
                <Instagram className="w-[18px] h-[18px]" />
              </Link>
              <Link to="#" aria-label="LinkedIn" className="text-white hover:text-blue-400">
                <Linkedin className="w-[18px] h-[18px]" />
              </Link>
              <Link to="#" aria-label="YouTube" className="text-white hover:text-blue-400">
                <Youtube className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <h3 className="text-[#dedede] text-[17px] font-bold font-inter">Company</h3>
            <Link to="/about" className="text-white text-xs font-light hover:underline">About Us</Link>
            <Link to="/careers" className="text-white text-xs font-light hover:underline">Careers</Link>
          </div>
          
          <div className="flex flex-col gap-8">
            <h3 className="text-[#dedede] text-[17px] font-bold font-inter">Help</h3>
            <Link to="/legal" className="text-white text-xs font-light hover:underline">Legal</Link>
            <Link to="/faqs" className="text-white text-xs font-light hover:underline">FAQs</Link>
            <Link to="/contact" className="text-white text-xs font-light hover:underline">Contact</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#191919] text-white text-center py-[7px] px-[70px] text-[10px] font-normal">
        @yannstechhub2025
      </div>
    </footer>
  );
};