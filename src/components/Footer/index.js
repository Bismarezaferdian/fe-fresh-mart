import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrap,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebRights,
  SocialIcons,
  SocialIconLinks,
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrap>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/home">How It Works</FooterLink>
              <FooterLink to="/home">Testimonial</FooterLink>
              <FooterLink to="/home">Careers</FooterLink>
              <FooterLink to="/home">Investor</FooterLink>
              <FooterLink to="/home">Term of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/home">Submit Video</FooterLink>
              <FooterLink to="/home">Ambassadors</FooterLink>
              <FooterLink to="/home">Agency</FooterLink>
              <FooterLink to="/home">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrap>
          <FooterLinkWrap>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/home">Contact</FooterLink>
              <FooterLink to="/home">Support</FooterLink>
              <FooterLink to="/home">Destinations</FooterLink>
              <FooterLink to="/home">Sponsoships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/home">Instagram </FooterLink>
              <FooterLink to="/home">Facebook</FooterLink>
              <FooterLink to="/home">Youtube</FooterLink>
              <FooterLink to="/home">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrap>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="home"
              smooth={true}
              duration={800}
              offset={60}
              spy={true}
            >
              Fresh Market
            </SocialLogo>
            <WebRights>Fresh Mart © 2021 all rights reserved</WebRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" arial-label="Instagram">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Facebook">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
