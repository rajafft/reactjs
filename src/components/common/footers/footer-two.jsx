import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script"
import LogoImage from "../headers/common/logo"

class FooterOne extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render () {

        return (
            <footer className="footer-light">
                <div className="light-layout">
                    <div className="container">
                        <section className="small-section border-section border-top-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subscribe">
                                        <div>
                                            <h4>We're Always Here To Help</h4>
                                            <p>Reach out to us through any of these support channels </p>
											<div id="newicon">
										<img src={`${process.env.PUBLIC_URL}/assets/images/icon/googleplay.png`} className="img-fluid googleplay" alt="" />   
                                                </div>    
                                        </div>
                                    </div>
                                </div>
								
								
                                <div className="col-lg-6">
                                    <form className="form-inline subscribe-form">
                                        <div className="form-group mx-sm-3">
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="Enter your email"/>
                                        </div>
                                        <button type="submit" className="btn btn-solid">subscribe</button>
                                    </form>
									   
                                               
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
				
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row footer-theme partition-f">
                            
                            <div className="col ">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
<div className="col ">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Product</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                            <li>Product</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <div className="sub-footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="footer-end">
                                    <p><i className="fa fa-copyright" aria-hidden="true"></i> 2021 SanayaApp</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="payment-card-bottom">
                                    <ul>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterOne;