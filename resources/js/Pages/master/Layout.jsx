import { Head } from '@inertiajs/inertia-react';
import React from 'react';
import Footer from './Footer';
import Navigration from './Navigration';

const Layout = (props) => {
    const navbar = document.querySelector('header');
    const search = document.querySelector('.search');
    const text = document.querySelector('.menu-link');
    const text1 = document.querySelector('.menu-link1');
    const text2 = document.querySelector('.menu-link2');
    const text3 = document.querySelector('.menu-link3');
    const text4 = document.querySelector('.menu-link4');
    window.onscroll = () => {
        if(window.scrollY > 100) {
            //alert("dd");
            navbar.classList.add('bg-white');
            search.classList.add('block');
            search.classList.add('md:hidden');
            search.classList.remove('hidden');
            text.classList.remove('md:text-white');
            text1.classList.remove('md:text-white');
            text2.classList.remove('md:text-white');
            text3.classList.remove('md:text-white');
            text4.classList.remove('md:text-white');
            
        }else {
           // alert("eee");
            navbar.classList.remove('bg-white');
            search.classList.remove('block');
            search.classList.add('hidden');
            text.classList.add('md:text-white');
            text1.classList.add('md:text-white');
            text2.classList.add('md:text-white');
            text3.classList.add('md:text-white');
            text4.classList.add('md:text-white');





        }
    }
    return (
        <div>
            
            <Navigration data={props.children.props}/>
            <Head><title>{`${props.title? props.title:'Others'} - FurHouz `}</title></Head>
                {props.children}
        <Footer data ={props.children.props.logo}/>
        </div>
    );
}

export default Layout;
