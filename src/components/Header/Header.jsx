"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../components/ui/resizable-navbar";

import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Logo } from "../../components/index";

const Header = () => {
  const user = useSelector((state) => state.authSlice);
  const isClient = user?.role === "client";
  const isProvider = user?.role === "provider";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/", show: true },
    { name: "Service", link: "/service", show: true },
    { name: "About", link: "/about", show: true },
    { name: "Login", link: "/auth", show: !user },
    { name: "Sign Up", link: "/auth", show: !user },
    { name: "Client", link: "/client", show: isClient },
    { name: "Provider", link: "/provider", show: isProvider },
  ];

  const mainNavItems = navItems
    .filter((item) =>
      item.show &&
      ["Home", "Service", "About", "Client", "Provider"].includes(item.name)
    )
    .map((item) => ({ name: item.name, link: item.link }));

  const authNavItems = navItems.filter(
    (item) => item.show && ["Login", "Sign Up"].includes(item.name)
  );

  return (
    <Container>
      <div className="relative w-full p-13">
        <Navbar>
          <NavBody>
           
            <div className="flex items-center gap-2">
              <NavbarLogo>
                <Logo />
              </NavbarLogo>
            </div>

          
            <NavItems items={mainNavItems} />

    
            <div className="flex items-center gap-4">
              {authNavItems.map((item, i) => (
                <NavbarButton
                  key={i}
                  as={Link}
                  to={item.link}
                  variant={item.name === "Sign Up" ? "primary" : "secondary"}
                >
                  {item.name}
                </NavbarButton>
              ))}
            </div>
          </NavBody>

        
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo>
                <Logo />
              </NavbarLogo>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
         
              {navItems
                .filter((item) => item.show)
                .map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                ))}

              
              <div className="flex w-full flex-col gap-4 mt-4">
                {authNavItems.map((item, idx) => (
                  <NavbarButton
                    key={idx}
                    as={Link}
                    to={item.link}
                    variant="primary"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavbarButton>
                ))}
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
