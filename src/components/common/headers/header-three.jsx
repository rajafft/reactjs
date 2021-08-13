import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'
import Modal from 'react-responsive-modal';

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import { changeCurrency } from '../../../actions'
import { connect } from "react-redux";
import LogoImage from "./common/logo";
import { withRouter } from 'react-router-dom';

class HeaderThree extends Component {


    constructor(props) {
        super(props);

        this.state = {
            open: false,
            isLoading: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            } else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
    }

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if (openmyslide) {
            openmyslide.classList.add('open-side')
        }
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

    load = () => {
        this.setState({ isLoading: true });
        fetch().then(() => {
            // deal with data fetched
            this.setState({ isLoading: false })
        })
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <header id="sticky" className="sticky header-2 header-6">
                    {this.state.isLoading ? <Pace color="#27ae60" /> : null}
                    <div className="mobile-fix-option"></div>
                    {/*Top Header Component*/}


                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-menu  border-top-0">
                                    <div className="brand-logo layout2-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <div>
                                        <form className="form_search" role="form">
                                            <input id="query search-autocomplete" type="search"
                                                placeholder="Enter product / service to search"
                                                className="nav-search nav-search-field" aria-expanded="true" />
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/voicesearch.png`} className="img-fluid voice" alt="" />

                                            <button type="submit" name="nav-submit-button" className="btn-camera">
                                                <i className="fa fa-camera"></i>
                                            </button>

                                        </form>
                                    </div>
                                    <div>
                                        <a href="#" class="btn btn-solid black-btn" tabindex="0">Get best Qoute</a>

                                    </div>
                                    <div> <li className="onhover-div curency  mobile-setting">
                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/1a.png`} className="img-fluid" alt="" />
                                                             UAE</div>

                                    </li>
                                    </div>
                                    <div> <li className="onhover-div curency  mobile-setting">
                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/1a.png`} className="img-fluid" alt="" />
                                                             د .إ</div>

                                    </li>
                                    </div>
                                    <div className="menu-right pull-right">
                                        <div>
                                            <div className="icon-nav">
                                                <ul>
                                                    <li className="onhover-div mobile-search class12">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.openSearch} className="img-fluid" alt="" />
                                                            <i className="fa fa-search" onClick={this.openSearch}></i></div>
                                                    </li>


                                                    <li className="onhover-div mobile-setting">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/1.png`} className="img-fluid" alt="" />
                                                            <i className="fa fa-cog"></i><br />Sell</div>

                                                    </li>
                                                    {/*Header Cart Component */}
                                                    <li className="onhover-div mobile-setting class12">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/2.png`} className="img-fluid" alt="" />
                                                            <i className="fa fa-cog"></i><br />Help</div>

                                                    </li>
                                                    {/*Header Cart Component */}

                                                    <li className="onhover-div mobile-setting class12">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/3a.png`} className="img-fluid" alt="" />
                                                            <i className="fa fa-cog"></i><br />Messages</div>

                                                    </li>
                                                    {/*Header Cart Component */}

                                                    <li className="onhover-div mobile-setting class12">
                                                        <div onClick={() => {
                                                            this.props.history.push({ pathname: '/pages/login' });
                                                        }}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/4a.png`} className="img-fluid" alt="" />
                                                            <i className="fa fa-cog"></i><br />Sign In <span class="sub-arrow"></span></div>
                                                        {/* <div className="show-div setting">
                                                            <h6>language</h6>
                                                            <ul>
                                                                <li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>
                                                                <li><a href={null} onClick={() => this.changeLanguage('fn')}>French</a> </li>
                                                            </ul>
                                                            <h6>currency</h6>
                                                            <ul className="list-inline">
                                                                <li><a href={null} onClick={() => this.props.changeCurrency('€')}>euro</a> </li>
                                                                <li><a href={null} onClick={() => this.props.changeCurrency('₹')}>rupees</a> </li>
                                                                <li><a href={null} onClick={() => this.props.changeCurrency('£')}>pound</a> </li>
                                                                <li><a href={null} onClick={() => this.props.changeCurrency('$')}>doller</a> </li>
                                                            </ul>
                                                        </div> */}
                                                    </li>
                                                    {/*Header Cart Component */}


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="main-menu">
                                        <div className="menu-left">
                                            <div className="navbar">
                                                <a href="javascript:void(0)" onClick={this.openNav}>
                                                    <div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
                                                </a>
                                                {/*SideBar Navigation Component*/}
                                                <SideBar />
                                            </div>

                                        </div>

                                        <div className="menu-right pull-right">
                                            {/*Top Navigation Bar Component*/}
                                            <NavBar />

                                            <div>
                                                <div className="icon-nav">
                                                    <ul>

                                                        <li className="onhover-div mobile-setting">
                                                            <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/5a.png`} className="img-fluid" alt="" />
                                                                <i className="fa fa-cog"></i></div>

                                                        </li>
                                                        <li className="onhover-div mobile-setting">
                                                            <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/6a.png`} className="img-fluid" alt="" />
                                                                <i className="fa fa-cog"></i></div>

                                                        </li>
                                                        {/*Header Cart Component */}

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div>

                                            <a href="javascript:void(0)" data-toggle="modal"
                                                data-target="#quick-view" onClick={this.onOpenModal} class="btn btn-solid black-btn" tabindex="0">Tell Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content quick-view-modal">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="product-right">
                                            <form>
                                                <div className="col-lg-4 rtl-text"><label>Name: </label></div>
                                                <div className="col-lg-8 rtl-text">
                                                    <input type="text" name="quantity" className="form-control input-number" placeholder="Name" />
                                                </div>
                                                <div className="col-lg-4 rtl-text"><label>Email: </label></div>
                                                <div className="col-lg-8 rtl-text">
                                                    <input type="text" name="quantity" className="form-control input-number" placeholder="Email" />
                                                </div>
                                                <div className="col-lg-4 rtl-text"><label>Phone </label></div>
                                                <div className="col-lg-8 rtl-text">
                                                    <input type="text" name="quantity" className="form-control input-number" placeholder="Phone" />
                                                </div>
                                                <div className="col-lg-4 rtl-text"><label>Address: </label></div>
                                                <div className="col-lg-8 rtl-text">
                                                    <input type="text" name="quantity" className="form-control input-number" placeholder="Address" />
                                                </div>
                                                <div className="col-lg-8">
                                                    <a href="javascript:void(0)" data-toggle="modal"
                                                        class="btn btn-solid black-btn butpop" tabindex="0">Submit</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default withRouter(connect(null,
    { changeCurrency }
)(HeaderThree));