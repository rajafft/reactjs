import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './landing.scss';

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    componentDidMount() {

        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);

        let sky = document.querySelector('#img-bg'),
            elemOne = document.querySelector('#img-1'),
            elemTwo = document.querySelector('#img-2'),
            elemThree = document.querySelector('#img-3'),
            elemFour = document.querySelector('#img-4'),
            elemFive = document.querySelector('#img-5'),
            elemSix = document.querySelector('#img-6'),
            elemSeven = document.querySelector('#img-7'),
            elemEight = document.querySelector('#img-8'),
            elemNine = document.querySelector('#img-9'),
            elemTen = document.querySelector('#img-10'),
            elemEleven = document.querySelector('#img-11');


        sky.addEventListener('mousemove', function (e) {
            var pageX = e.clientX - window.innerWidth / 2,
                pageY = e.clientY - window.innerHeight / 2;
            elemOne.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemTwo.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemThree.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemFour.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemFive.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemSix.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemSeven.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemEight.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemNine.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemTen.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
            elemEleven.style.transform = 'translateX(' + (7 + pageX / 150) + '%) translateY(' + (1 + pageY / 150) + '%)';
        });
    }

    toggleMenu = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }


    
}

export default Landing;
