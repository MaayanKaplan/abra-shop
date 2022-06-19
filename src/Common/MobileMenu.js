import styled from "styled-components";

import LogoImage from "../Images/logo-black.png";
import closeIcon from "../Images/x-icon.png";

const MobileMenu = ({ menuItems, onClose }) => {
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
    </>
  );
};

const DrawerMenuWrapper = styled.div`
  padding-left: 18px;
  padding-top: 20px;
  display: flex;
`;

const StyledCloseButton = styled.img`
  margin-left: auto;
  padding-right: 16px;
  cursor: pointer;
`;

export default MobileMenu;
