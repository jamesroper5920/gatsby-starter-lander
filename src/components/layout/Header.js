import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../images/fileologo.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <a href="https://fileo.co.uk" className="flex items-center">
          <div className="w-12 mr-3">
            <img src={logo} alt="Fileo Logo" className="w-full" />
          </div>
          Fileo
        </a>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm" href="https://app.fileo.co.uk">Log In</Button>
      </div>
    </div>
  </header>
);

export default Header;
