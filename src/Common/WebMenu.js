import React, { useState } from "react";
import styled from "styled-components";
import { useMedia } from "../Hooks/useMedia";
import MobileMenu from "../Common/MobileMenu";
import Drawer from "../Common/Drawer";
import menuImg from "../Images/menu.png";

const WebMenu = ({
  menuLinks,
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
                <MobileMenu onClose={() => setIsDrawerOpen(false)} />
              </Drawer>
            )}
          </>
        )}
        {breakPoint?.name === "desktop" &&
          menuLinks.map((link) => {
            return (
              <MenuLink
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

const MenuLink = styled.a`
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  text-decoration: none;
  ${(props) =>
    props.active &&
    `
    border-bottom: 2px solid #fff;
    `}
  color: #fff;
`;
const MenuWrapper = styled.nav`
  font-family: Assistant;
  display: flex;
  gap: 26px;
`;

const Hamburger = styled.img`
  cursor: pointer;
`;

export default WebMenu;
