import React from 'react';
import './Socialmedial.css'
const SocialMedia = () => {
  return (
    <div>
      <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="follow-us-section-heading">Follow Us on Social Media</h1>
            </div>
            <div className="col-12">
              <div className="d-flex flex-row justify-content-center">
              <ul className="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Whatsapp</span>
        <span><i className="fab fa-whatsapp"></i></span>
    </li>
    <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <span><i className="fa-brands fa-x-twitter"></i></span>
    </li>
    <li className="icon instagram">
<a href="https://www.instagram.com/mr_yashuu__06?igsh=anhvZDN4aTFtMHk1">
        <span className="tooltip">Instagram</span>
        <span><i className="fab fa-instagram"></i></span>
        </a>
    </li>
    <li className="icon github">
        <span className="tooltip">GitHub</span>
        <span><i className="fab fa-github"></i></span>
    </li>
    <li className="icon youtube">
        <span className="tooltip">Youtube</span>
        <span><i className="fab fa-youtube"></i></span>
    </li>
</ul>

                </div>

            </div>
          </div>
        </div>
      </div>
      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="FoodifyLogo.jpg" className=" food-munch-logo mb-3"
                title="foodmunch"
                alt="Food Munch Logo"
              />
              <div>
                <a className="footer-section-mail-id" href="mailto:yashuyashvanth960@gmail.com">
                  yashuyashvanth960@gmail.com
                </a>
                <p className="footer-section-address" title="address">
                  Hitech city, Hyderabad, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
