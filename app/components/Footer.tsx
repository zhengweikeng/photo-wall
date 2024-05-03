import React from 'react';
import { Footer as FBFooter, FooterCopyright } from "flowbite-react";
import { FaBlogger, FaRss } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <FBFooter container className='max-w-screen-xl mx-auto shadow-none'>
            <FooterCopyright href="#" by="Seed™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FBFooter.Icon href="https://blog.seedzz.top" icon={FaBlogger} />
                <FBFooter.Icon href="feed" icon={FaRss} />
            </div>
        </FBFooter>
    )
};

export default Footer;
