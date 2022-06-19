import React, { useState } from "react";
import styled from "styled-components";
import WebMenu from "../Common/WebMenu";
import LogoImg from "../Images/logo.png";
import AccountImg from "../Images/account_circle.png";

import useMedia from "../Hooks/useMedia";

const defaultMenuConfig = [
  { id: 1, name: "BestSellers" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home" },
  { id: 4, name: "Office" },
  { id: 5, name: "Sports" },
];

const DEFAULT_MENU_LINK = 1;

const Header = () => {
  const [activeMenuLink, setActiveMenuLink] = useState(DEFAULT_MENU_LINK);
  const menuLinkChange = (link) => {
    setActiveMenuLink(link.id);
  };

  ////////////////////////////////////////////////////////////////
  // CHANGES
  // //////////////////////////////////////////////////////////////////

  return (
    <HeaderWrapper>
      <StyledLogo src={LogoImg} alt="abra's logo"></StyledLogo>
      <StyledMenu
        activeId={activeMenuLink}
        menuLinkChange={menuLinkChange}
        menuLinks={defaultMenuConfig}
      ></StyledMenu>
      <StyledAccountIcon src={AccountImg}></StyledAccountIcon>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #1a223e;
  display: flex;
  padding: 21px 0px;
  padding-left: 64px;

  align-items: flex-end;
  @media (max-width: 880px) {
    padding-left: 18px;
  }
`;

const StyledMenu = styled(WebMenu)`
  @media (max-width: 880px) {
    padding-right: 66px;
    order: -1;
  }
`;

const StyledLogo = styled.img`
  padding-right: 98px;
  align-self: center;
`;

const StyledAccountIcon = styled.img`
  align-self: center;
  margin-left: auto;
  padding-right: 24px;
`;

export default Header;
