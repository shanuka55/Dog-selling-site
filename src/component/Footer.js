import React from 'react'
import '../component/Footer.css';

import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
       <div className='footer' id='footer'>
        <div className='container'>
            <div className="newsletter">
                <h2>Contact Us</h2>
                <span className='line'></span>
                <div className="form">
                    <input className="input-from" placeholder="Email here"/>
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
        </div> 
        <div className='footer-deatails'>
            <div class="footer-about">
                <h3>About Us</h3>
                <p>
                Founded by Shanuka with a deep love for dogs,Dogs store was born out of a desire to make the process of finding and bringing home a new furry friend as joyful and rewarding as possible.
                </p>
            </div>
            <div class="footer-link">
              <h3>Service Area</h3>
              <a href="#">City 1</a>
              <a href="#">City 2</a>
              <a href="#">City 3</a>
              <a href="#">City 4</a>
              <a href="#">City 5</a>
            </div>
            <div class="footer-link">
              <h3>Useful Link</h3>
              <a href="#">FAQs</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              
            </div>
            <div class="footer-contact">
              <h3>Get In Touch</h3>
              <p><i class="fa fa-map-marker-alt"></i>123 Street, Colombo, Sri Lanka</p>
              <p><i class="fa fa-phone-alt"></i>+94 78 5 554456</p>
              <p><i class="fa fa-envelope"></i>dogs@example.com</p>
              <div class="footer-social">
                <a href="#"><i class="fab fa-twitter"><FaTwitter /></i></a>
                <a href="#"><i class="fab fa-facebook-f"><ImFacebook2 /></i></a>
                <a href="#"><i class="fab fa-youtube"><BsYoutube /></i></a>
                <a href="#"><i class="fab fa-instagram"><RiInstagramFill /></i></a>
                <a href="#"><i class="fab fa-linkedin-in"><BsLinkedin />
</i></a>
              </div>
            </div>
        </div>
        <div class="container footer-menu">
            <div class="f-menu">
            <a href="#">Terms of use</a>
            <a href="#">Privacy policy</a>
            <a href="#">Cookies</a>
            <a href="#">Help</a>
            <a href="#">FQAs</a>
            </div>
        </div>
        <div class="container copyright">
            <div class="row">
            <div class="col-md-6">
                <p>&copy; <a href="#">Dogs Shop</a>, All Right Reserved.</p>
            </div>
            <div class="col-md-6">
                <p>Designed By <a href="https://htmlcodex.com">Shanuka lakshan</a></p>
            </div>
            </div>
        </div>
       </div>
      );
    }
    
    export default Footer;