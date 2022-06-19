import React, { useState } from "react";
import styled from "styled-components";

const WebMenu = ({ menuLinks, activeId, className, menuLinkChange }) => {
  return (
    <MenuWrapper className={className}>
      {menuLinks.map((link) => {
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

export default WebMenu;
