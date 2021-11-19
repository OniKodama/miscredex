import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink , SocialMediaWrap, SocialLogo, SocialMedia, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to = "/signin">How it Works</FooterLink>
                                <FooterLink to = "/signin">Testimonials</FooterLink>
                                <FooterLink to = "/signin">Careers</FooterLink>
                                <FooterLink to = "/signin">Investors</FooterLink>
                                <FooterLink to = "/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to = "/">Contact</FooterLink>
                                <FooterLink to = "/">Support</FooterLink>
                                <FooterLink to = "/">Desitinations</FooterLink>
                                <FooterLink to = "/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to = "/">Sumbit Videos</FooterLink>
                                <FooterLink to = "/">Ambassadors</FooterLink>
                                <FooterLink to = "/">Agency</FooterLink>
                                <FooterLink to = "/">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to = "/">Instagram</FooterLink>
                                <FooterLink to = "/">Facebook</FooterLink>
                                <FooterLink to = "/">YouTube</FooterLink>
                                <FooterLink to = "/">Twitter</FooterLink>
                                <FooterLink to = "/">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = "/" onClick = {toggleHome}>miscredex</SocialLogo>
                        <WebsiteRights>Sibble Software © {new Date().getFullYear()} All Rights Reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href = "//www.facebook.com" target = "_blank" aria-label = "Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href = "//www.instagram.com" target = "_blank" aria-label = "Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href = "//www.youtube.com" target = "_blank" aria-label = "Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href = "//www.twitter.com" target = "_blank" aria-label = "Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href = "//www.linkedin.com" target = "_blank" aria-label = "Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
