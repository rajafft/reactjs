import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import { connect } from 'react-redux';

import BlogSection from './common/blogsection';
// import custom Components
import Service from './common/service';
import BrandBlock from './common/brand-block';
import NewProduct from '../common/new-product';
import Breadcrumb from '../common/breadcrumb';
import DetailsWithPrice from './common/product/details-price';
import DetailsTopTabs from './common/details-top-tabs';
import { addToCart, addToCartUnsafe, addToWishlist } from '../../actions';
import ImageZoom from './common/product/image-zoom';
import SmallImages from './common/product/small-image';
import { _productDescription } from '../../services/api/product';
const RightSideBar = ({ match }) => {
  const id = match.params.id
  console.log(id, 'OOOOOOOOO')
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true
  };
  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true
  };

  const [productdetails, setproductdetails] = useState({});
  useEffect(() => {
    loadList();
  }, []);
  const loadList = async () => {
    _productDescription({ id: id }, function (
      error,
      response,
    ) {
      if (response !== null) {
        setproductdetails(response);
      }
    });
  };
  return (
    <div>
      <div class='breadcrumb-section'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6'>
              <div class='page-title'>
                <h2> Product / Product Name</h2>
              </div>
            </div>
            <div class='col-md-6'>
              <nav aria-label='breadcrumb' class='theme-breadcrumb'>
                <ol class='breadcrumb'>
                  <li class='breadcrumb-item'>
                    <a href='/'>Home</a>
                  </li>
                  <li class='breadcrumb-item active' aria-current='page'>
                    {' '}
                    Product /Product Name
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/*Section Start*/}
      {productdetails ? (
        <section className='section-b-space'>
          <div className='collection-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-9 col-sm-12 col-xs-12'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-xl-12'>
                        <div className='filter-main-btn mb-2'>
                          <span className='filter-btn'>
                            <i className='fa fa-filter' aria-hidden='true' />{' '}
                            filter
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6 product-thumbnail'>
                        <Slider
                          {...products}
                          asNavFor={null}
                          // ref={(slider) => (slider1 = slider)}
                          className='product-slick'>
                          {console.log(productdetails)}   {
                            productdetails &&
                            productdetails.images && productdetails.images.length > 0 &&
                            productdetails.images.map((vari, index) => (
                              <div key={index}>
                                <ImageZoom
                                  image={'https://toppng.com/uploads/preview/t-shirt-picsart-t-shirt-11563273533yrctixk3vb.png'
                                  }
                                  className='img-fluid image_zoom_cls-0'
                                />
                              </div>
                            ))}
                        </Slider>
                        <SmallImages
                          item={productdetails}
                          settings={productsnav}
                          navOne={null}
                        />
                      </div>

                      <DetailsWithPrice
                        symbol={'€'}
                        item={productdetails}
                        navOne={''}
                        addToCartClicked={addToCart}
                        BuynowClicked={addToCartUnsafe}
                        addToWishlistClicked={addToWishlist}
                      />
                    </div>
                  </div>
                  <DetailsTopTabs item={productdetails} />
                  <section id='core' className='main-feature section-b-space'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-12 text-center'>
                          <div className='heading-title'>
                            <h2 class='title-inner1'>Similar products</h2>

                            <p className='pb-3'>
                              And there is many more features..{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='row key-feature'>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      id='buttonenew'
                      className='btn btn-solid'
                      type='submit'>
                      View More
                    </button>
                  </section>

                  <section id='core' className='main-feature section-b-space'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-12 text-center'>
                          <div className='heading-title'>
                            <h2 class='title-inner1'>
                              Suppliers sells similar products
                            </h2>

                            <p className='pb-3'>
                              And there is many more features..{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='row key-feature'>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>Product name</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      id='buttonenew'
                      className='btn btn-solid'
                      type='submit'>
                      View More
                    </button>
                  </section>

                  <section id='core' className='main-feature section-b-space'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-12 text-center'>
                          <div className='heading-title'>
                            <h2 class='title-inner1'>Related Categories</h2>

                            <p className='pb-3'>
                              And there is many more features..{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='row key-feature'>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                        <div className='col-xl-3  col-md-3 col-6'>
                          <div className='theme-collection'>
                            <div>
                              <div className='image-contain'>
                                <div className='set-image'>
                                  <img
                                    src={`${process.env.PUBLIC_URL
                                      }/assets/images/landing-page/icon/3.png`}
                                    alt='fetures'
                                  />
                                </div>
                              </div>
                              <h5>category name</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      id='buttonenew'
                      className='btn btn-solid'
                      type='submit'>
                      View More
                    </button>
                  </section>

                  <section className='section-b-space  ratio2_3'>
                    {/* Blog Section Section*/}
                    <div className='container section-b-space '>
                      <div className='row'>
                        <div className='col'>
                          <div className='title1 title5'>
                            <h4>Recent Story</h4>
                            <h2 className='title-inner1'>from the blog</h2>
                            <hr role='tournament6' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className='section-b-space p-t-0 ratio2_3'>
                    <BlogSection />
                  </section>
                  {/* Blog Section End*/}
                </div>
                <div className='col-sm-3 collection-filter'>
                  {/* <BrandBlock/> */}
                  {/*<Service/>*/}
                  {/*side-bar single product slider start*/}
                  <NewProduct />
                  {/*side-bar single product slider end*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ''
      )}
      {/*Section End*/}
    </div>
  );
};
export default RightSideBar;
