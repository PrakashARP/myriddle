import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './image/LogoWhite.png'


function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  function NavLink({ href, children }) {
    return (

      <Link href={href} className="text-black-300 hover:bg-green-50 hover:text-black px-3 py-3  rounded-md text-sm font-medium">
          {children}
      </Link>

    );
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-semibold text-xl ml-1">
              <Image
                src={Logo}
                width={180}
                height={150}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
              </Link>
              <div className="relative">
                <button
                  onClick={handleServicesDropdownToggle}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Riddles 
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute z-10 mt-3 w-screen sm:px-0 lg:-ml-10 lgg:-translate-x-1/2">
                    <div className=" shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative bg-white px-5 py-6 ">
                        <NavLink href="/services/service1">
                        New Riddles
                        </NavLink>
                        <NavLink href="/services/service2">
                        Best Riddles
                        </NavLink>
                        <NavLink href="/services/service3">
                        Brain Teasers
                        </NavLink>
                        <NavLink href="/services/service1">
                        Classic Riddles
                        </NavLink>
                        <NavLink href="/services/service2">
                        Difficult Riddles
                        </NavLink>
                        <NavLink href="/services/service3">
                        Easy Riddles    
                        </NavLink>
                        <NavLink href="/services/service1">
                        Funny Riddles
                        </NavLink>
                        <NavLink href="/services/service2">
                        Good Riddles
                        </NavLink>
                        <NavLink href="/services/service3">
                        Jokes and Riddles
                        </NavLink>
                        <NavLink href="/services/service1">
                        Logic Puzzles 
                        </NavLink>
                        <NavLink href="/services/service2">
                        Math Riddles
                        </NavLink>
                        <NavLink href="/services/service3">
                        Medium Riddles
                        </NavLink>

                        <NavLink href="/services/service1">
                        Riddles for Adults
                        </NavLink>
                        <NavLink href="/services/service2">
                        Riddles For Kids
                        </NavLink>
                        <NavLink href="/services/service3">
                        Short Riddles
                        </NavLink>
                        <NavLink href="/services/service1">
                        Video Riddles
                        </NavLink>
                        <NavLink href="/services/service2">
                        What Am I Riddles
                        </NavLink>
                        <NavLink href="/services/service3">
                        What is it Riddles
                        </NavLink>
                        <NavLink href="/services/service1">
                        Who Am I Riddles
                        </NavLink>
                        <NavLink href="/services/service2">
                        Who is it Riddles
                        </NavLink>
                        <NavLink href="/services/service3">
                        Riddle Categories
                        </NavLink>
                        <NavLink href="/services/service1">
                        Riddle Books
                        </NavLink>
                       
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
              </Link>

              <Link href="/sinup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sing In
            </Link>
            
            <Link href="/singin" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sing Up
            </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           
           <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
            </Link>
            
            <div className="relative">
              <button
                onClick={handleServicesDropdownToggle}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <NavLink href="/services/service1">
                        Service 1
                      </NavLink>
                      <NavLink href="/services/service2">
                        Service 2
                      </NavLink>
                      <NavLink href="/services/service3">
                        Service 3
                      </NavLink>
                      {/* Add more services as needed */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
            </Link>

            <Link href="/sinup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sing In
            </Link>
            <Link href="/singin" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sing Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
