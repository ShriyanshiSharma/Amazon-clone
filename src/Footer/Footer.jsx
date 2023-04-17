import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer__0'>
        <div className="foot__1">
            <ul>
                <li className='footer__head'>Get to Know Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
            </ul>
        </div>
        <div className="foot__1">
            <ul>
                <li className='footer__head'>Make Money with Us</li>
                <li>Sell products on Amazon</li>
                <li>Sell on Amazon Business</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>See More Make Money with Us</li>
            </ul>
        </div>
        <div className="foot__1">
            <ul>
                <li className='footer__head'>Amazon Payment</li>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
            </ul>
        </div>
        <div className="foot__1">
            <ul>
                <li className='footer__head'>Let Us Help You</li>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
            </ul>
        </div>
        </div> 
        <hr/>
        <div className="footer__base">
            <div className="base__1">
            <p>Conditions of Use</p>
            <p>Privacy Notice</p>
            <p>Your Ads Privacy Choices</p>
            </div>
            <h5>© 1996-2023, Amazon.com, Inc. or its affiliates</h5>

        </div>     
    </div>
  )
}

export default Footer