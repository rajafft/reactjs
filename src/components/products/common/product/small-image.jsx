
import React, { Component } from 'react';
import Slider from 'react-slick';
import imgt from '../../../../assets/23.png'
import imgt1 from '../../../../assets/23.png'
class SmallImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav2: null
        }
    }
    componentDidMount() {
        this.setState({
            nav2: this.slider2
        });
    }

    render() {
        const { item, settings } = this.props;

        var productsnav = settings;

        return (
            <div className="row">
                <div className="col-12 p-0">
                    <Slider {...productsnav} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} className="slider-nav">
                        {item &&
                            item.images && item.images.length > 0 &&
                            item.images.map((vari, index) => (<div key={index}>
                                <img src={index % 2 ? imgt : imgt1} key={index} alt="" className="img-fluid" />
                            </div>
                            ))}
                    </Slider>
                </div>
                <div className="col-12 p-0">
                    <div class="theme-collection center"><div class="image-contain"><div class="set-image">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logos/17.png`} alt="" id="verified" className="img-fluid" />
                        <img src={`${process.env.PUBLIC_URL}/assets/images/verified.png`} alt="" id="verified" className="img-fluid" /></div></div><h5>Company Name</h5></div>


                </div>
            </div>
        );
    }
}

export default SmallImages;