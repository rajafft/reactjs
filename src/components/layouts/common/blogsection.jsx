import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import {Slider3} from "../../../services/script"

class BlogSection extends Component {
    render (){

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...Slider3} className="slide-3 no-arrow ">
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                           
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1" />
                                                
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                          
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1"/>
                                                
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1"/>
                                               
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                    <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                        <div className="classic-effect">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`} className="img-fluid" alt="" />
                                                <span></span>
                                        </div>
                                    </Link>
                                    <div className="blog-details">
                                        
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                        <hr className="style1"/>
                                            
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr className="style1" />
                                               
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BlogSection;