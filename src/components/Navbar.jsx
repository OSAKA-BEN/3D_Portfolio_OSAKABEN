import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logoosakabenwhite, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX}${isScrolled ? 'bg-white dark:bg-[#000]' : 'bg-transparent'} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => setActive("")}>
          <img src={logoosakabenwhite} alt="logo" className="w-12 h-12 object-contain mx-4" />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            <span className='sm:block hidden'>| OSAKA-BEN</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`nav-item ${active === link.title ? "text-white" : "text-secondary"} text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center mx-4'>
          <img src={menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-full bg-black transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end p-4'>
          <img src={close} alt="close" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setMenuOpen(false)} />
        </div>
        <ul className='list-none flex flex-col justify-center items-center h-full'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[32px] text-center border-b-2 w-full py-6`} onClick={() => setMenuOpen(false)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
