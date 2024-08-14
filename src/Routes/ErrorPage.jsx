import React from 'react';
import { Link } from 'react-router-dom';
import errorGif from '../assets/404.gif'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="error-page">
      <img src={errorGif} alt="Error" />
      <h1 className='text-3xl mb-4  font-bold'>Oops! Something went wrong.</h1>
      <Link className='text-xl text-red-600 font-serif ' to="/">Go back to Home</Link>
    </div>
    );
};

export default ErrorPage;