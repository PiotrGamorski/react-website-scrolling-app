import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  SidebarBtnWrap,
} from "../Sidebar/SidebarElements";

const Sidebar = (props) => {
  const { isOpen, toggle } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={() => toggle()}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={() => toggle()}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={() => toggle()}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={() => toggle()}>
            Services
          </SidebarLink>
          <SidebarLink to="singup" onClick={() => toggle()}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
