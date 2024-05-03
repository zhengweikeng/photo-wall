'use client';

import { FaBlogger, FaRss } from "react-icons/fa";
import { MdPhotoSizeSelectActual, MdAddAPhoto } from "react-icons/md";
import Link from 'next/link'
import { Navbar } from "flowbite-react";

const NavBar = () => {
    return (
        <Navbar fluid rounded className="max-w-screen-xl mx-auto bg-gray-100">
            <Navbar.Brand as={Link} href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <MdAddAPhoto />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Photos by Seed</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" className="flex items-center space-x-2 border-b py-2">
                    <MdPhotoSizeSelectActual className="text-xl" />
                    <span className="lg:hidden visible text-gray-500">Home</span>
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    href="https://blog.seedzz.top"
                    className="flex items-center space-x-2 border-b py-2">
                    <FaBlogger className="text-xl" />
                    <span className="lg:hidden visible text-gray-500">Seed blog</span>
                </Navbar.Link>
                <Navbar.Link
                    href="/feed"
                    className="flex items-center space-x-2 border-b py-2"
                >
                    <FaRss className="text-xl" />
                    <span className="lg:hidden visible text-gray-500">RSS</span>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar