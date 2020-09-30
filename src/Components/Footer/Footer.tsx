import React from 'react';
import './Footer.scss';

const Footer = (props: any): JSX.Element => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-element">
          <img
            src={require('../../Images/b4g_final-01.png')}
            alt="logo"
            width="300"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="footer-element">
          <h2>U.S. Office</h2>
          <p>4224 Walkers Ridge Way</p>
          <p>Hickory Hills, IL 60457</p>
          <p>Phone: 630-270-4706</p>
          <p>Mobile: 331-472-7584</p>
          <p>Email: x2s3q6exbok@temporary-mail.net</p>
        </div>
        <div className="footer-element">
          <h2>International Office</h2>
          <p>69 Southern Way</p>
          <p>NORTH DALTON YO25 4HE</p>
          <p>Phone: 077 7214 4599</p>
          <p>Email: 59mbsany6e@temporary-mail.net</p>
        </div>
      </div>
      <div className="social-media-links-cont"></div>
      <p className="copyright">© 2020 Bloqs4Good. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
