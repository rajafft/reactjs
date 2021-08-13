import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import custom components
import Collection from "./collection"
import LogoBlock from "../common/logo-block"
import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three"
import FooterTwo from "../../common/footers/footer-two"
import ThemeSettings from "../../common/theme-settings"
import MultiSlider from "./multiple-slider";
import { _categoryList } from '../../../services/api/category';

const Sanaya = () => {
    const [categoryListData, setCategoryListData] = useState([]);

    useEffect(() => {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color15.css`);
        loadList();
    }, []);


    //    const loadList = async () => {
    //         await _categoryList({}, async (error, response) => {
    //         console.log(response, 'LLLLLLLLLLLLLLLL')
    //             if (response !== null) {
    //                 setCategoryListData(JSON.parse(JSON.stringify(response.data)))
    //                 // this.setState({
    //                 //     categoryListData: JSON.parse(JSON.stringify(response.data))
    //                 // }, () => console.log(this.state.categoryListData, 'LLLLLLLLLLLLLLLL'));
    //                 return;
    //             } else if (error !== null) {
    //                 return;
    //             }
    //         });
    //     };




    const loadList = () => {
        _categoryList({}, (error, response) => {
            if (response !== null) {
                setCategoryListData(JSON.parse(JSON.stringify(response.data)))
                return;
            } else if (error !== null) {
                return;
            }
        });
    };

    console.log(categoryListData, "categoryListData")


    const handleCategory = (id) => {
        console.log(id, "categoryList id")
    }
    return (

        <div>
            <Helmet>
                <title>Sananya</title>
            </Helmet>
            <HeaderThree logoName={'logo/pic.jpeg'} />
            <section className="p-0 small-slider">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home46">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="slider-contain">
                                            <div>
                                                <h4>SanayaApp</h4>
                                                <h1>Buy Or Sell Building
                                                    Materials <br />Dead Stock</h1>
                                                <a href="#" className="btn btn-solid">Our Products</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="home home46">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="slider-contain">
                                            <div>
                                                <h4>Any thing that pets want</h4>
                                                <h1>save 20%</h1>
                                                <a href="#" className="btn btn-solid">shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>

            {/*Logo Block section
     <LogoBlock />*/}
            {/*Logo Block section end*/}

            {/*Banner Section*/}


            {/*core feature section*/}
            <section id="core" className="main-feature section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="heading-title">
                                <h2 class="title-inner1">Categories</h2>

                                <p className="pb-3">And there is many more features.. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row key-feature">
                        {categoryListData.map((item) => (
                            <Link to={`${process.env.PUBLIC_URL}right-sidebar/collection/${item._id}`} >
                                <div className="col-xl-2 col-md-3 col-6">
                                    <div className="theme-collection">
                                        <div>
                                            <div className="image-contain">
                                                <div className="set-image">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" onClick={() => handleCategory(item._id)} />
                                                </div>
                                            </div>
                                            <h5>{item.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/*Login section*/}
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title1 title5">
                                <h4>Sanaya App</h4>
                                <h2 className="title-inner1">TOP CATEGORIES</h2>
                                <hr role="tournament6" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">

                            <div className="collection-banner p-right text-center">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} className="img-fluid" alt="" />
                                <div className="contain-banner">
                                    <div>

                                        <h2>BUILDING MATERIALS</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 right-login">
                            {/*Service One*/}
                            <div className="">
                                <section className="service border-section small-section ">
                                    <div className="row">
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                                <section className="service border-section small-section ">
                                    <div className="row">
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="login-page section-b-space">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">

                            <div className="collection-banner p-right text-center">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} className="img-fluid" alt="" />
                                <div className="contain-banner">
                                    <div>

                                        <h2>Electrical</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 right-login">
                            {/*Service One*/}
                            <div className="">
                                <section className="service border-section small-section ">
                                    <div className="row">
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                                <section className="service border-section small-section ">
                                    <div className="row">
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="login-page section-b-space">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-8 right-login">
                            {/*Service One*/}
                            <div className="">
                                <section className="service border-section small-section ">
                                    <div className="row">
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                                <section className="service border-section small-section ">
                                    <div className="row">
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 service-block">
                                            <div className="media">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/service1.jpg`} alt="" />
                                                <div className="media-body">
                                                    <h4>Building Materials</h4>
                                                    <ul className="s3">
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                        <li>Abrasives </li>
                                                    </ul>

                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="collection-banner p-right text-center">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} className="img-fluid" alt="" />
                                <div className="contain-banner">
                                    <div>

                                        <h2>Brands</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>



            <section id="core" className="main-feature section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="heading-title">
                                <h2 class="title-inner1">Most Viewed</h2>

                                <p className="pb-3">And there is many more features.. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row key-feature">
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-3 col-6">
                            <div className="theme-collection">
                                <div>
                                    <div className="image-contain">
                                        <div className="set-image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                        </div>
                                    </div>
                                    <h5>Product name</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*About Section*/}
            <section className="beauty-about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1 text-center">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/about-us.jpg`} alt="" className="img-fluid blur-up lazyload" />
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-12">
                            <div className="about-section">
                                <div>
                                    <h3>Why to Choose Sanaya to Buy or Sell Building Materials & Its Dead Stock</h3>
                                    <div className="about-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam.sit voluptatem
                                            accusantium doloremque laudantium,totam rem aperiam.</p>
                                        <a href="#" class="btn btn-solid black-btn" tabindex="0">Read More</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Section End*/}




            {/*About Section*/}
            <section className="beauty-about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12  text-center">


                            <div id="core" className="main-feature section-b-space">
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <div className="heading-title">
                                                <h2 class="title-inner1">Supplier</h2>

                                                <p className="pb-3">And there is many more features.. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row key-feature">
                                        <div className="col-xl-4 col-md-4 col-6">
                                            <div className="theme-collection">
                                                <div>
                                                    <div className="image-contain">
                                                        <div className="set-image">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                                        </div>
                                                    </div>
                                                    <h5>Supplier</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-6">
                                            <div className="theme-collection">
                                                <div>
                                                    <div className="image-contain">
                                                        <div className="set-image">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                                        </div>
                                                    </div>
                                                    <h5>Supplier</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-6">
                                            <div className="theme-collection">
                                                <div>
                                                    <div className="image-contain">
                                                        <div className="set-image">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                                        </div>
                                                    </div>
                                                    <h5>Supplier</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-4 col-6">
                                            <div className="theme-collection">
                                                <div>
                                                    <div className="image-contain">
                                                        <div className="set-image">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                                        </div>
                                                    </div>
                                                    <h5>Supplier</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-6">
                                            <div className="theme-collection">
                                                <div>
                                                    <div className="image-contain">
                                                        <div className="set-image">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                                        </div>
                                                    </div>
                                                    <h5>Supplier</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 col-6">
                                            <div className="theme-collection">
                                                <div>
                                                    <div className="image-contain">
                                                        <div className="set-image">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/landing-page/icon/3.png`} alt="fetures" />
                                                        </div>
                                                    </div>
                                                    <h5>Supplier</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <div className="heading-title">


                                                <a href="#" class="btn btn-solid black-btn text-center" tabindex="0">View More</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} alt="" className="img-fluid blur-up lazyload" />
                        </div>
                    </div>
                </div>
            </section>
            {/*About Section End*/}



            {/*Product Slider*/}
            <MultiSlider type={'kids'} />
            {/*Product Slider End*/}

            <section className="section-b-space  ratio2_3">
                {/* Blog Section Section*/}
                <div className="container section-b-space ">
                    <div className="row">
                        <div className="col">
                            <div className="title1 title5">
                                <h4>Recent Story</h4>
                                <h2 className="title-inner1">from the blog</h2>
                                <hr role="tournament6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-b-space p-t-0 ratio2_3">
                <BlogSection />
            </section>
            {/* Blog Section End*/}
            <ThemeSettings />
            <FooterTwo logoName={'logo/14.png'} />
        </div>


    );
}


export default Sanaya;