import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../Common/Menu";
import LogoImg from "../Images/logo.svg";
import AccountImg from "../Images/account-circle.svg";
import { deviceSize } from "../Utils/constants";

const DEFAULT_MENU_LINK = 1;

const Header = () => {
  const [activeMenuLink, setActiveMenuLink] = useState(DEFAULT_MENU_LINK);

  const menuLinkChange = (link) => {
    setActiveMenuLink(link.id);
  };

  return (
    <HeaderWrapper>
      <StyledLogo src={LogoImg} alt="Abra's logo"></StyledLogo>
      <StyledMenu
        activeId={activeMenuLink}
        menuLinkChange={menuLinkChange}
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

  @media (max-width: ${deviceSize.mobile}) {
    justify-content: space-between;
    padding-left: 18px;
    height: 64px;
    width: 100vw;
    align-items: center;
  }
`;

const StyledMenu = styled(Menu)`
  @media (max-width: ${deviceSize.mobile}) {
    order: -1;
  }
`;

const StyledLogo = styled.img`
  align-self: center;
  padding-right: 98px;

  @media (max-width: ${deviceSize.mobile}) {
    height: 24px;
    padding-right: 0;
  }
`;

const StyledAccountIcon = styled.img`
  align-self: center;
  margin-left: auto;
  padding-right: 24px;

  @media (max-width: ${deviceSize.mobile}) {
    margin-left: 0;
  }
`;

export default Header;
