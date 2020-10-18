import React from 'react';
import { Link } from 'react-router-dom';
import './mobileNav.css';

export default function MobileNav() {
    return (
        <div className='mobile-navbar uk-position-fixed uk-width-1-1 uk-flex'>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link to='/' className='uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1 active'>
                    <span uk-icon="icon: user; ratio: 1.25"></span>
                    <span>About</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link to='/portfolio' className='uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1'>
                    <span uk-icon="icon: code; ratio: 1.25"></span>
                    <span>Portfolio</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link to='/graphic-design' className='uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1'>
                    <span uk-icon="icon: folder; ratio: 1.25"></span>
                    <span>Design</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link to='/posts' className='uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1'>
                    <span uk-icon="icon: commenting; ratio: 1.25"></span>
                    <span>Posts</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link to='/contact' className='uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1'>
                    <span uk-icon="icon: mail; ratio: 1.25"></span>
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    )
}
