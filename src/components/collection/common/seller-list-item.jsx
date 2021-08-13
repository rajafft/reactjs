import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class SellerListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onClickHandle(img) {
        this.setState({ image : img} );
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.product.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }


    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
        const {open} = this.state;

            let RatingStars = []
            for(var i = 0; i < product.rating; i++) {
                RatingStars.push(<i className="fa fa-star" key={i}></i>)
            }

        return (

                    <div className="product-box">
                        <div className="img-wrapper">
                            <div className="front">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img
                                    src={product.variants?
                                        this.state.image?this.state.image:product.variants[0].images
                                        :product.pictures[0]}
                                    className="img-fluid"
                                    alt="" /></Link>
                            </div>
                            <div className="cart-info cart-wrap">
                            
                                <a href="javascript:void(0)" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:void(0)" data-toggle="modal"
                                   data-target="#quick-view"
                                   title="Quick View"
                                   onClick={this.onOpenModal}><i className="fa fa-search" aria-hidden="true"></i></a>
                               
                            </div>
                            {product.variants?
                            <ul className="product-thumb-list">
                                {product.variants.map((vari, i) =>
                                    <li className={`grid_thumb_img ${(vari.images === this.state.image)?'active':''}`} key={i}>
                                        <a href="javascript:void(0)" title="Add to Wishlist">
                                            <img src={`${vari.images}`} onClick={() => this.onClickHandle(vari.images)} />
                                        </a>
                                    </li>)
                                }
                            </ul>:''}

                        </div>
                        <div className="product-detail">
                            <div>
                                <div className="rating">
                                    {RatingStars}
                                </div>
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                                    <h6>Seller</h6>
                                </Link>
                                
                                {product.variants?
                                <ul className="color-variant">
                                    {product.variants.map((vari, i) => {
                                        return (
                                            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                    })}
                                </ul>:''}
                            </div>
                        </div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content quick-view-modal">
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6  col-xs-12">
                                                <div className="quick-view-img">
                                                    <img src={product.variants?
                                                        this.state.image?this.state.image:product.variants[0].images
                                                        :product.pictures[0]} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 rtl-text">
                                                <div className="product-right">
                                                    <h2> Seller </h2>
                                                
                                                    {product.variants?
                                                    <ul className="color-variant">
                                                        {product.variants.map((vari, i) =>
                                                            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                                        }
                                                    </ul>:''}
                                                    <div className="border-product">
                                                        <h6 className="product-title">Seller details</h6>
                                                        <p>{product.shortDetails}</p>
                                                    </div>
                                                    <div className="product-description border-product">
                                                        {product.size?
                                                        <div className="size-box">
                                                            <ul>
                                                                {product.size.map((size, i) => {
                                                                    return <li key={i}><a href="#">{size}</a></li>
                                                                })}
                                                            </ul>
                                                        </div>:''}
                                                       
                                                    </div>
                                                    <div className="product-buttons">
                                                        <button  className="btn btn-solid" onClick={() => onAddToCartClicked(product, this.state.quantity)} >CONTACT SELLER</button>
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} className="btn btn-solid">GET BEST PRICE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Modal>
                </div>
        )
    }
}

export default SellerListItem;