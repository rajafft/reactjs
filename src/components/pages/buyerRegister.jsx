import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import ImageUploader from 'react-images-upload';
import { _buyerRegistration } from '../../services/api/register';
import { ToastContainer, toast } from "react-toastify";

const Register = (props) => {
  const [formInfo, setformInfo] = useState({ profile: [] });
  const [regresult, setregresult] = useState({
    error: false,
    message: '',
  });
  const [validation, setvalidation] = useState(false);
  const handleuploadimage = (pictureFiles, pictureDataURLs) => {
    setformInfo({
      ...formInfo,
      profile: [...pictureFiles],
    });
  };
  const handleinputchange = (key, event) => {
    if (key == 'confirmpassword') {
      formInfo.password === event.target.value
        ? setvalidation(false)
        : setvalidation(true);
    }
    setformInfo({
      ...formInfo,
      [key]: event.target.value,
    });
  };

  const submit = async (evt) => {
    evt.preventDefault();
    var data = new FormData();
    for (var key in formInfo) {
      if (key !== 'profile') {
        data.append(key, formInfo[key]);
      }
    }
    formInfo.profile.forEach((tag) => data.append('profile', tag));
    try {
      _buyerRegistration(data, function (error, response) {
        if (response !== null) {
          toast.success("Successfully Registered !");
          // setregresult({ message: 'Successfully Register !' });
          props.history.push({ pathname: '/pages/login' });
        } else if (error.response.status == 500) {
          toast.error('Email Id already exist');
        } else {
          toast.error(error);
        }
      })
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <div>
      <Breadcrumb title={'create account'} />
      <ToastContainer />

      {/*Regsiter section*/}
      <section className='register-page section-b-space'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3>create account</h3>
              <div className='theme-card'>
                <form className='theme-form'>
                  {/* <a href='pages/register1' class='btn btn-solid'>
                    buyer
                  </a>{' '}
                  <a href='pages/register' class='btn btn-solid'>
                    seller
                  </a> */}
                  <div>
                    {' '}
                    <ImageUploader
                      withIcon={false}
                      withPreview={true}
                      label=''
                      buttonText='Upload profile Images'
                      onChange={handleuploadimage}
                      maxFileSize={1048576}
                      fileSizeError=' file size is too big'
                    />
                    <br />
                  </div>

                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='firstname'>First Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='firstname'
                        placeholder='First Name'
                        required
                        onChange={(e) => handleinputchange('firstname', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        required
                        onChange={(e) => handleinputchange('email', e)}
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        id='password'
                        placeholder='password'
                        required
                        onChange={(e) => handleinputchange('password', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='confirmpassword'>Confirm password</label>
                      <input
                        type='password'
                        className='form-control is-invalid'
                        id='password'
                        placeholder='password'
                        required
                        onChange={(e) =>
                          handleinputchange('confirmpassword', e)
                        }
                      />{' '}
                      <small id='passwordHelp' class='text-danger'>
                        {validation ? 'Confirm password does not match' : ''}
                      </small>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='mobile'>Mobile</label>
                      <input
                        type='text'
                        className='form-control'
                        id='mobile'
                        placeholder='Mobile'
                        required
                        onChange={(e) => handleinputchange('mobile', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='country'>Country</label>
                      <div class='product-page-per-view'>
                        <select
                          onChange={(e) => handleinputchange('country_id', e)}>
                          <option value='Afganistan'>Select Country</option>
                          <option value='Albania'>Albania</option>
                          <option value='Algeria'>Algeria</option>
                          <option value='American Samoa'>American Samoa</option>
                          <option value='Andorra'>Andorra</option>
                          <option value='Angola'>Angola</option>
                          <option value='Anguilla'>Anguilla</option>
                          <option value='Antigua & Barbuda'>
                            Antigua & Barbuda
                          </option>
                          <option value='Argentina'>Argentina</option>
                          <option value='Armenia'>Armenia</option>
                          <option value='Aruba'>Aruba</option>
                          <option value='Australia'>Australia</option>
                          <option value='Austria'>Austria</option>
                          <option value='Azerbaijan'>Azerbaijan</option>
                          <option value='Bahamas'>Bahamas</option>
                          <option value='Bahrain'>Bahrain</option>
                          <option value='Bangladesh'>Bangladesh</option>
                          <option value='Barbados'>Barbados</option>
                          <option value='Belarus'>Belarus</option>
                          <option value='Belgium'>Belgium</option>
                          <option value='Belize'>Belize</option>
                          <option value='Benin'>Benin</option>
                          <option value='Bermuda'>Bermuda</option>
                          <option value='Bhutan'>Bhutan</option>
                          <option value='Bolivia'>Bolivia</option>
                          <option value='Bonaire'>Bonaire</option>
                          <option value='Bosnia & Herzegovina'>
                            Bosnia & Herzegovina
                          </option>
                          <option value='Botswana'>Botswana</option>
                          <option value='Brazil'>Brazil</option>
                          <option value='British Indian Ocean Ter'>
                            British Indian Ocean Ter
                          </option>
                          <option value='Brunei'>Brunei</option>
                          <option value='Bulgaria'>Bulgaria</option>
                          <option value='Burkina Faso'>Burkina Faso</option>
                          <option value='Burundi'>Burundi</option>
                          <option value='Cambodia'>Cambodia</option>
                          <option value='Cameroon'>Cameroon</option>
                          <option value='Canada'>Canada</option>
                          <option value='Canary Islands'>Canary Islands</option>
                          <option value='Cape Verde'>Cape Verde</option>
                          <option value='Cayman Islands'>Cayman Islands</option>
                          <option value='Central African Republic'>
                            Central African Republic
                          </option>
                          <option value='Chad'>Chad</option>
                          <option value='Channel Islands'>
                            Channel Islands
                          </option>
                          <option value='Chile'>Chile</option>
                          <option value='China'>China</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='location'>Location</label>
                      <input
                        type='text'
                        className='form-control'
                        id='lname'
                        placeholder='Location'
                        required
                        onChange={(e) => handleinputchange('location', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='address'>Address</label>
                      <input
                        type='text'
                        className='form-control'
                        id='lname'
                        placeholder='Address'
                        required
                        onChange={(e) => handleinputchange('address', e)}
                      />
                    </div>
                  </div>
                  <button className='btn btn-solid' onClick={submit}>
                    Submit
                  </button>
                </form>
                <h4
                  class='text-center font-weight-bold'
                  style={{ color: regresult.error ? '#f44336' : '#90BE17' }}>
                  {regresult.message}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
