import React from 'react';

import '../../Reset.css';
import './NavBar.css';

import {Icon} from 'antd';
import Button from 'antd/es/button';

import {Link} from 'react-router-dom';

import MobileDrawer from '../MobileDrawer/MobileDrawer';

export default function NavBar(){
    return (
        <div className='navWrapper'>
            <ul className='nav1'>
                <a style={{fontSize: '40px'}} href="#"><Icon type="camera" />PICS</a>
                <Link to='/about'>About</Link>
                <a href="#">Portraits</a>
                <a href="#">Commercial</a>
                <a href="#">Weddings</a>
                <a href="#">Contact</a>
                <a href="#">(801) 756-8824</a>
            </ul>
            <ul className='nav2'>
                <a style={{fontSize: '40px'}} href="#"><Icon type="camera" />PICS</a>
                <div>
                    {/* <Button><Icon type="menu" /></Button> */}
                    <MobileDrawer/>
                    <Button><Icon type="phone" theme="filled" /></Button>
                </div>
            </ul>
            <hr></hr>
        </div>
    )
}