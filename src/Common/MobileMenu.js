import { useState } from "react";
import styled from "styled-components";
import LogoImage from "../Images/logo-black.png";
import closeIcon from "../Images/x-icon.png";
import logoutImage from "../Images/logout.png";
import { Link } from "react-router-dom";

import { DefaultMenuConfig } from "../Utils/DefaultMenuConfig";

const menuLinks = DefaultMenuConfig;

const DEFAULT_MENU_LINK = 1;

const MobileMenu = ({ onClose }) => {
  const [activeMenuLink, setActiveMenuLink] = useState(DEFAULT_MENU_LINK);

  const menuLinkChange = (link) => {
    setActiveMenuLink(link.id);
    onClose();
  };

  return (
    <>
      <DrawerMenuWrapper>
        <img src={LogoImage} alt="Logo"></img>
        <StyledCloseButton
          onClick={onClose}
          src={closeIcon}
          alt="Close button"
        ></StyledCloseButton>
      </DrawerMenuWrapper>
      <LinksContainer>
        {menuLinks.map((link) => {
          return (
            <LinkWrapper>
              <Rectangle active={activeMenuLink === link.id}></Rectangle>
              <MenuLink
                to={link.path}
                key={link.id}
                onClick={() => menuLinkChange(link)}
                active={activeMenuLink === link.id}
              >
                {link.name}
              </MenuLink>
            </LinkWrapper>
          );
        })}
      </LinksContainer>
      <LogoutWrapper>
        <StyledLogoutButton src={logoutImage}></StyledLogoutButton>
        <p>Log out</p>
      </LogoutWrapper>
    </>
  );
};

const DrawerMenuWrapper = styled.div`
  padding-left: 18px;
  padding-top: 20px;
  display: flex;
  margin-bottom: 51px;
`;

const StyledCloseButton = styled.img`
  margin-left: auto;
  padding-right: 16px;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 18px;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const MenuLink = styled(Link)`
  font-family: Assistant;
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  color: #1a223e;
  margin-bottom: 26px;
  cursor: pointer;
  text-decoration: none;
`;

const Rectangle = styled.span`
  width: 2px;
  height: 24px;
  flex-grow: 0;
  transform: rotate(180deg);
  border-radius: 20px;
  background-color: #1a223e;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const LogoutWrapper = styled.div`
  position: absolute;
  bottom: 41.5px;
  padding-left: 21.6px;
  display: flex;
  cursor: pointer;

  p {
    color: #808285;
  }
`;

const StyledLogoutButton = styled.img`
  padding-right: 4px;
`;

export default MobileMenu;
