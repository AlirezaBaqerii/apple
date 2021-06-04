import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../data/navbarData';
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiFillApple,
} from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const [littleNav, setLittleNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  //context values
  const {
    setFilterKey,
    toggleBag,
    closeBag,
    getBagLocation,
    showSearchForm,
    setShowSearchForm,
  } = useGlobalContext();

  const bagLogo = React.useRef(null);

  const handleCloseBag = (e) => {
    if (!e.target.classList.contains('shop')) {
      closeBag();
    }
  };
  //res shop bag
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    const tempLoc = bagLogo.current.getBoundingClientRect();
    const center = (tempLoc.left + tempLoc.right) / 2;
    getBagLocation(center);
  }, [width]);

  //res nav
  const responsiveNav = () => {
    if (window.innerWidth <= 760) {
      setLittleNav(true);
    } else {
      setLittleNav(false);
      setShowNavMenu(false);
    }
  };

  useEffect(() => {
    responsiveNav();
    window.addEventListener('resize', responsiveNav);
  }, []);

  //search form

  //return of little nav

  const [showNavMenu, setShowNavMenu] = useState(false);

  if (littleNav) {
    return (
      <nav className='nav' onClick={(e) => handleCloseBag(e)}>
        <ul className='nav-links'>
          <li className='toggle' onClick={() => setShowNavMenu(!showNavMenu)}>
            {showNavMenu ? <FaTimes /> : <FaBars />}
          </li>
          <li
            className='apple-logo'
            onClick={() => setFilterKey('')}
            onClick={() => setShowNavMenu(false)}
          >
            <Link to='/'>
              <AiFillApple />
            </Link>
          </li>
          <li className='shop'>
            <button className='shop' ref={bagLogo} onClick={() => toggleBag()}>
              <AiOutlineShopping className='shop' />
            </button>
          </li>
        </ul>
        <div
          className={`${
            showNavMenu
              ? 'little-nav-menu little-nav-menu-active'
              : 'little-nav-menu'
          }`}
        >
          <div className='little-nav-menu-container'>
            <li onClick={() => setShowNavMenu(false)}>
              <button
                className='little-nav-search-btn'
                onClick={() => setShowSearchForm(!showSearchForm)}
              >
                <AiOutlineSearch />
              </button>
            </li>
            <ul>
              {navbarLinks.map((navbarLink) => {
                const { name, id } = navbarLink;
                return (
                  <li key={id} onClick={() => setShowNavMenu(false)}>
                    <Link to={`/${name}`}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className='nav' onClick={(e) => handleCloseBag(e)}>
      <ul className='nav-links'>
        <li
          className='apple-logo'
          onClick={() => {
            setFilterKey('');
          }}
        >
          <Link to='/'>
            <AiFillApple />
          </Link>
        </li>
        {navbarLinks.map((navbarLink) => {
          const { name, id } = navbarLink;
          return (
            <Link to={`/${name}`} key={id}>
              <li>{name}</li>
            </Link>
          );
        })}
        <li>
          <button onClick={() => setShowSearchForm(!showSearchForm)}>
            <AiOutlineSearch />
          </button>
        </li>
        <li className='shop' ref={bagLogo} onClick={(e) => toggleBag(e)}>
          <button className='shop'>
            <AiOutlineShopping className='shop' />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
