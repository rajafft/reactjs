import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';

const DetailsWithPrice = (props) => {
  const {
    symbol,
    item,
    addToCartClicked,
    BuynowClicked,
    addToWishlistClicked,
  } = props;
  var colorsnav = {
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };
  var slider1 = null;
  const [open, setopen] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [nav3, setnav3] = useState(null);
  const [stock, setstock] = useState('InStock');
  const onOpenModal = () => {
    setopen(true);
  };

  const onCloseModal = () => {
    setopen(false);
  };

  const minusQty = () => {
    if (quantity > 1) {
      setstock('InStock');
      setquantity((prevState) => {
        return prevState - 1;
      });
    }
  };
  const getPrice = () => {
    var numVal1 = Number(item.price);
    var numVal2 = Number(item.offer_price) / 100;
    var totalValue = numVal1 * ((100 - numVal2) / 100);
    return totalValue.toFixed(2);
  };
  const plusQty = () => {
    if (item.quantity > quantity) {
      setquantity((prevState) => {
        return prevState + 1;
      });
    } else {
      setstock('Out of Stock !');
    }
  };
  const changeQty = (e) => {
    setquantity(parseInt(e.target.value));
  };
  const variants = [
    {
      "color": "gray",
      "images": "/assets/images/fashion/product/15.jpg"
    },
    {
      "color": "orange",
      "images": "/assets/images/fashion/product/7.jpg"
    }]
  console.log(item, 'item');
  return (
    <div className='col-lg-6 rtl-text'>
      <div className='product-right'>
        <h2> {item.name_english ? item.name_english : ''}</h2>
        <h4>
          <del>
            {symbol} {item.price ? item.price : 0}
          </del>
          <span>{item.offer_price ? item.offer_price / 100 : 0}% off</span>
        </h4>
        <h3>
          {symbol}
          {item.price ? getPrice() : 0}{' '}
          <span className='kk1'>Get latest Price</span>
        </h3>
        <p>{item.delivery_option ? item.delivery_option : ''}</p>
        <p>{item.productCode ? item.productCode : ''}</p>

        <p>
          Minimum order...
          {item.minimum_order ? item.minimum_order : item.minimum_order}
        </p>
        {item.variants ? (
          <ul>
            <Slider
              {...colorsnav}
              asNavFor={props.navOne}
              ref={(slider) => (slider1 = slider)}
              className='color-variant'>
              {variants.map((vari, i) => {
                return <li className={vari.color} key={i} title={vari.color} />;
              })}
            </Slider>
          </ul>
        ) : (
          ''
        )}
        <div className='product-description border-product'>
          <div className=''>
            <h6 className='product-title'>Product Description</h6>
            <p>{item.shortDetails}</p>
            <div
              class='tab-pane fade mt-4 show active react-tabs__tab-panel--selected'
              role='tabpanel'
              id='react-tabs-1'
              aria-labelledby='react-tabs-0'>
              <table class='table table-striped mb-0'>
                <tbody>
                  <tr>
                    <th>Brand :</th>
                    <td>{item.brand_id && item.brand_id.englishBrands ? item.brand_id.englishBrands : ''}</td>
                  </tr>
                  <tr>
                    <th>Model No :</th>
                    <td>{item.model_no ? item.model_no : ''}</td>
                  </tr>
                  <tr>
                    <th>material </th>
                    <td>{item.size_des ? item.size_des : ''}</td>
                  </tr>
                  <tr>
                    <th>Size :</th>
                    <td>{item.size ? item.size : 0}</td>
                  </tr>
                </tbody>
              </table>
              <a
                href='#'
                className='btn btn-solid'
                onClick={() => addToCartClicked(item, quantity)}>
                Send a Enquiry
              </a>
            </div>
            <br />
          </div>
          <span className='instock-cls'>{stock}</span>
          <h6 className='product-title'>quantity</h6>
          <div className='qty-box'>
            <div className='input-group'>
              <span className='input-group-prepend'>
                <button
                  type='button'
                  className='btn quantity-left-minus'
                  onClick={() => minusQty()}
                  data-type='minus'
                  data-field=''>
                  <i className='fa fa-angle-left' />
                </button>
              </span>
              <input
                type='text'
                name='quantity'
                value={quantity}
                onChange={(e) => changeQty(e)}
                className='form-control input-number'
              />
              <span className='input-group-prepend'>
                <button
                  type='button'
                  className='btn quantity-right-plus'
                  onClick={() => plusQty()}
                  data-type='plus'
                  data-field=''>
                  <i className='fa fa-angle-right' />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className='product-buttons'>
          <a href='https://www.google.com' target='_blank'>
            <i className='fa fa-file-pdf-o fa-2x' /> Product Catelog
          </a>
          <p />
          <a
            className='btn btn-solid'
            onClick={() => addToCartClicked(item, quantity)}>
            CONTACT SELLER
          </a>
          <Link
            to={`${process.env.PUBLIC_URL}/checkout`}
            className='btn btn-solid'
            onClick={() => BuynowClicked(item, quantity)}>
            GET BEST PRICE
          </Link>
        </div>

        <div className='border-product'>
          <h6 className='product-title'>share it</h6>
          <div className='product-icon'>
            <ul className='product-social'>
              <li>
                <a
                  class='facebook'
                  href='https://www.facebook.com/'
                  target='_blank'>
                  <i className='fa fa-facebook' />
                </a>
              </li>

              <li>
                <a href='https://twitter.com/' target='_blank'>
                  <i className='fa fa-twitter' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target='_blank'>
                  <i className='fa fa-instagram' />
                </a>
              </li>
              <li>
                <a href='https://plus.google.com/discover' target='_blank'>
                  <i className='fa fa-whatsapp' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => onCloseModal()} center>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                {item.name_english ? item.name_english : ''}{' '}
              </h5>
            </div>
            <div className='modal-body'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`}
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsWithPrice;
