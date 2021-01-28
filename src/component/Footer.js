import {  FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"



const Footer = () => {
    return ( 
        <footer>
            <article class="Article-Footer">
      
        <div class="Foto-footer">
        <img src="./assets/img/logo.png" alt=""></img>
        <p>
            Plan and book your perfect trip with 
            expert advice, travel tips destination
            information from us 
        </p>
        <p>
           ©2020 Thousand Sunny. All rights reserved
        </p>
        </div>
        
        <div>
            <h2>Destinations</h2>
            <ul>
                <li>Africa</li>
                <li>antarctica</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>America</li>
            </ul>
        </div>
       
        <div>
            <h2>Shop</h2>
            <ul>
                <li>Destination Guides</li>
                <li>Pictorial & Gifts</li>
                <li>Special Offers</li>
                <li>Delivery Times</li>
                <li>FAQs</li>
            </ul>
        </div>

        <div>
            <h2>Interests</h2>
            <ul>
                <li>Adventure Travel</li>
                <li>Art And Culture</li>
                <li>Wildlife And Nature</li>
                <li>Family Holidays</li>
                <li>Food And Drink</li>
            </ul>
        </div>


</article>
        <div class="Social">
 
        <FaTwitter class="Icons" />
        <FaFacebookF  class="Icons"/>
        <FaInstagram   class="Icons"/>
        <FaLinkedinIn   class="Icons"/>
        <FaYoutube class="Icons"/>

       

        </div>
        </footer>
     );
}
 
export default Footer;