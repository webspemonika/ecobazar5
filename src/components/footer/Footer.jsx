import React from 'react';
import { Link } from 'react-router';
import SocialLink from '../../utils/social link/SocialLink';

const Footer = () => {
    return (
        <footer className='py-10 px-5  lg:pt-20 lg:pb-14 bg-[url(./bg-images/footer-bg-image.png)] bg-cover bg-no-repeat bg-center '>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-7">
                {/*company details  */}
                <div className="lg:col-span-2">
                    <Link to='/'>  <img src="/logos/footer-logo.png" /> </Link>
                    <p></p>
                    <SocialLink  />
                </div>
                {/*  */}
                <div className=" lg:col-span-1 bg-amber-500">3</div>
                <div className=" lg:col-span-1 bg-amber-900">4</div>
                <div className=" lg:col-span-1 bg-amber-300">2</div>
                {/*  */}
                <div className="lg:col-span-2 bg-red-400">5</div>
            </div>
        </footer>
    );
};

export default Footer;