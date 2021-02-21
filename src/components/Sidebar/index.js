import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarRoute,
  SidebarBtnWrapper,
  SidebarLinks,
  SidebarLink,
  SidebarMenu,
} from "./SideBarElements";

const Sidebar = ({ togle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={togle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper onClick={togle}>
        <SidebarMenu>
          <SidebarLinks
            smooth={true}
            duration={800}
            offset={79}
            onClick={togle}
            onClick={togle}
            to="home"
          >
            Home
          </SidebarLinks>
          <SidebarLinks
            smooth={true}
            duration={800}
            offset={60}
            onClick={togle}
            to="about"
          >
            {" "}
            About
          </SidebarLinks>

          <SidebarLinks
            smooth={true}
            duration={800}
            offset={60}
            onClick={togle}
            onClick={togle}
            spy={true}
            to="mitra"
          >
            Mitra Kami
          </SidebarLinks>
          <SidebarLinks
            smooth={true}
            duration={800}
            offset={60}
            onClick={togle}
            to="product"
          >
            {" "}
            Product
          </SidebarLinks>
          <SidebarLink to="/signUp">Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute to="/signIn">Sign In</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
