import React, { Component, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import '../common/index.scss';
import { ToastContainer, toast } from "react-toastify";
import { _login } from '../../services/api/login';

const Login = (props) => {
  const [data, setdata] = useState({ email: '', password: '', })
  const login = async (evt) => {
    evt.preventDefault();
    try {
      _login(data, function (error, response) {
        if (response !== null) {
          window.localStorage.setItem("data", JSON.stringify(response));
          (response.role.englishname).trim().toLowerCase() == 'seller' && props.history.push({ pathname: '/seller-Dashboard' });
          (response.role.englishname).trim().toLowerCase() == 'buyer' && props.history.push({ pathname: '/buyer-Dashboard' });
        } else if (error !== null) {
          toast.error(error);
        }
      });

    } catch (err) {
      toast.error(err);
    }
  }
  const handleinputchange = (key, event) => {

    setdata({ ...data, [key]: event.target.value });

  };
  return (
    <div>
      <Breadcrumb title={'Login'} />
      <ToastContainer />

      {/*Login section*/}
      <section className='login-page section-b-space'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h3>Login</h3>
              <div className='theme-card'>
                <form className='theme-form'>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='email'
                      placeholder='Email'
                      required=''
                      onChange={(e) => handleinputchange('email', e)}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='review'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      id='review'
                      placeholder='Enter your password'
                      required=''
                      onChange={(e) => handleinputchange('password', e)}

                    />
                  </div>
                  <button className='btn btn-solid' onClick={login}>
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className='col-lg-6 right-login'>
              <h3>New Customer</h3>
              <div className='theme-card authentication-right'>
                <h6 className='title-font'>Create A Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is
                  quick and easy. It allows you to be able to order from our
                  shop. To start shopping click register.
                  </p>
                <a href='pages/buyerRegister' className='btn btn-solid s4'>
                  Buyer
                  </a>

                <a href='pages/register' className='btn btn-solid'>
                  Seller
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Login;
