import React from "react";
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-evenly text-white bg-[--primary-black] p-10 '>
      <div className="flex flex-col gap-5">
        <div className='text-2xl'>
          <h6>MUSICOLOGY</h6>
        </div>
        <div className='max-w-xs'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nostrum, asperiores officia eligendi iste eveniet blanditiis.
            Provident, assumenda. Natus placeat veniam vero explicabo pariatur
            odit.
          </p>
        </div>
        <div className="flex justify-normal gap-6 text-4xl">
          <FaFacebook />
          <FaTwitter />
          <FaTelegram />
          <FaWhatsapp />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className='text-2xl'>
          <h6>ABOUT</h6>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>History</li>
            <li>Our Team</li>
            <li>Brand Guidelines</li>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className='text-2xl'>
          <h6>SERVICES</h6>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>How to Order</li>
            <li>Our Product</li>
            <li>Our Status</li>
            <li>Promo</li>
            <li>Payment Method</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className='text-2xl'>
          <h6>OTHER</h6>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>Contct Us</li>
            <li>Help</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
