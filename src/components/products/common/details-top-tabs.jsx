import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import { Link } from 'react-router-dom';

const DetailsTopTabs = (props) => {
  const { item } = props;

  return (
    <section className='tab-product m-0'>
      <div className='row'>
        <div className='col-sm-12 col-lg-12'>
          <Tabs className='tab-content nav-material'>
            <TabList className='nav nav-tabs nav-material'>
              <Tab className='nav-item'>
                <span className='nav-link active'>
                  <i className='icofont icofont-ui-home'></i>
                  Specifications
                </span>
                <div className='material-border'></div>
              </Tab>
              <Tab className='nav-item'>
                <span className='nav-link'>
                  <i className='icofont icofont-man-in-glasses'></i>
                  Company Profile
                </span>
                <div className='material-border'></div>
              </Tab>
              <Tab className='nav-item'>
                <span className='nav-link'>
                  <i className='icofont icofont-contacts'></i>Product Video
                </span>
                <div className='material-border'></div>
              </Tab>
              <Tab className='nav-item'>
                <span className='nav-link'>
                  <i className='icofont icofont-contacts'></i>Product Review
                </span>
                <div className='material-border'></div>
              </Tab>
              <Tab className='nav-item'>
                <span className='nav-link'>
                  <i className='icofont icofont-contacts'></i>Addtional Info
                </span>
                <div className='material-border'></div>
              </Tab>
            </TabList>
            <TabPanel className='tab-pane fade mt-4 show active'>
              <p className='mt-4 p-0'>{item.speacification_english}</p>
              <div></div>
              <table className='table table-striped mb-0'>
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
            </TabPanel>
            <TabPanel>
              <p className='mt-4 p-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </TabPanel>
            <TabPanel>
              <div className='mt-4 text-center'>
                <div className='embed-responsive embed-responsive-16by9'>
                  <iframe
                    src='https://www.youtube.com/embed/BUWzX78Ye_8'
                    allow='autoplay; encrypted-media'
                    allowFullScreen></iframe>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <form className='theme-form mt-4'>
                <div className='form-row'>
                  <div className='col-md-12 '>
                    <div className='media m-0'>
                      <label>Rating</label>
                      <div className='media-body ml-3'>
                        <div className='rating three-star'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Enter Your name'
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='email'
                      placeholder='Email'
                      required
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='review'>Review Title</label>
                    <input
                      type='text'
                      className='form-control'
                      id='review'
                      placeholder='Enter your Review Subjects'
                      required
                    />
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='review'>Review Title</label>
                    <textarea
                      className='form-control'
                      placeholder='Wrire Your Testimonial Here'
                      id='exampleFormControlTextarea1'
                      rows='6'></textarea>
                  </div>
                  <div className='col-md-12'>
                    <button className='btn btn-solid' type='submit'>
                      Submit YOur Review
                    </button>
                  </div>
                </div>
              </form>
            </TabPanel>
            <TabPanel className='tab-pane fade mt-4 show active'>
              <table className='table table-striped mb-0'>
                <tbody>
                  <tr>
                    <th>Country </th>
                    <td>UAE</td>
                  </tr>
                  <tr>
                    <th>Delivery </th>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th>Location </th>
                    <td>{item.location ? item.location : ''}</td>
                  </tr>
                  <tr>
                    <th>Item </th>
                    <td>{item.item_condition ? item.item_condition : ''}</td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DetailsTopTabs;
