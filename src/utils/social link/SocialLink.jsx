import React from 'react';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import './sociallink.css'

const SocialLink = () => {

    const socialLinks=[
        {id:1,icon:<FaFacebookF />,href:"" },
        {id:2,icon:<FaTwitter />,href:"" },
        {id:3,icon:<FaPinterestP />,href:"" },
        {id:3,icon:<IoLogoInstagram />,href:"" },
    ]
    return (
        <>
        <div className="social-link">
            {
                socialLinks.map((link,index)=>(
                    <a key={index}
                     href={link.href} 
                     className=' text-[#Ffffff] text-[18px] flex '
                     > {link.icon} </a>
                ))
            }
        </div>
        </>
    );
};

export default SocialLink;