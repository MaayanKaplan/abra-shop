import React, { useState } from "react";
import styled from "styled-components";
import { useMedia } from "../Hooks/useMedia";
import MobileMenu from "../Common/MobileMenu";
import Drawer from "../Common/Drawer";
import menuImg from "../Images/menu.png";
import { DefaultMenuConfig } from "../Utils/DefaultMenuConfig";
import { NavLink } from "react-router-dom";

const menuLinks = DefaultMenuConfig;

const Menu = ({
  activeId,
  className,
  menuLinkChange,
  humburgerResolution = 880,
}) => {
  const breakPoints = [
    { min: 0, max: humburgerResolution, name: "mobile" },
    { min: humburgerResolution + 1, max: 10000, name: "desktop" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const breakPoint = useMedia(breakPoints);

  return (
    <>
      <MenuWrapper className={className}>
        {breakPoint?.name === "mobile" && (
          <>
            <Hamburger
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              src={menuImg}
              alt="Burger menu"
            ></Hamburger>
            {isDrawerOpen && (
              <Drawer>
                <MobileMenu
                  onClose={() => setIsDrawerOpen(false)}
                  activeId={activeId}
                  menuLinkChange={menuLinkChange}
                />
              </Drawer>
            )}
          </>
        )}
        {breakPoint?.name === "desktop" &&
          menuLinks.map((link) => {
            return (
              <MenuLink
                to={link.path}
                key={link.id}
                onClick={() => menuLinkChange(link)}
                active={activeId === link.id}
                href="#"
              >
                {link.name}
              </MenuLink>
            );
          })}
      </MenuWrapper>
    </>
  );
};

const MenuLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: #fff;

  &.active {
    border-bottom: 2px solid #fff;
    font-weight: 600;
  }
`;
const MenuWrapper = styled.nav`
  font-family: Assistant;
  display: flex;
  align-items: center;
  gap: 26px;
  position: sticky;
  top: 0;
`;

const Hamburger = styled.img`
  cursor: pointer;
`;

export default Menu;
