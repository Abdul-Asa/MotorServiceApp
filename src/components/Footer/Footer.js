import React from "react";
import { FooterLink } from "./styling";
import './css/footer.css'

const Footer = () => {
return (
    <footer className="footer">
        <div className="box">
        {/* <h1 style={{ color: "green",
                    textAlign: "center",
                    marginTop: "-50px" }}>
            GeeksforGeeks: A Computer Science Portal for Geeks
        </h1> */}
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="footer-heading">About </div>
                        <FooterLink href="#">About Us</FooterLink>
                        <FooterLink href="#">Our Team</FooterLink>
                        <FooterLink href="#">Pricing</FooterLink>
                    </div>
                    <div className="column">
                        <div className="footer-heading">Services</div>
                        <FooterLink href="#">Anti Lock Brake Service</FooterLink>
                        <FooterLink href="#">Perfomance Upgrades</FooterLink>
                        <FooterLink href="#">Engine Diagnostics</FooterLink>
                        <FooterLink href="#"></FooterLink>
                    </div>
                    <div className="column">
                        <div className="footer-heading">Service Hours</div>
                        <FooterLink href="#">Monday - Friday</FooterLink>
                        <FooterLink href="#">Saturday - Sunday</FooterLink>
                        
                    </div>
                    <div className="column">
                        <div className="footer-heading">Contact us</div>
                        <FooterLink href="#">
                        <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>
                            Facebook
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-instagram">
                            <span style={{ marginLeft: "10px" }}>
                            Instagram
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-twitter">
                            <span style={{ marginLeft: "10px" }}>
                            Twitter
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-youtube">
                            <span style={{ marginLeft: "10px" }}>
                            Youtube
                            </span>
                        </i>
                        </FooterLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
};
export default Footer;
