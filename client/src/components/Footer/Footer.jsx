import React from "react";
import{ FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">At Mojri, we cherish Marwadi Juti's artistry and heritage.
                 Our mission: support artisans, celebrate tradition, and 
                 share Rajasthan's vibrant culture.
                  Explore our collection and take a step with us into history.
                  </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Jodhpur,Rajasthan,India
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 9460992250
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: pankajjeengar2005@gmail.com</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Gents</span>
                <span className="text">Ladies</span>
                <span className="text">Kids</span>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                   MOJRI 2023 CREATED BY PANKAJ JEENGAR. PREMIUM CULTURAL 
                   JUTIS.
                </div>
                <img src= {Payment} />
            </div>
        </div>
    </footer>;
};

export default Footer;
