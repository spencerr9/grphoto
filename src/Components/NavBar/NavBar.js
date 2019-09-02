import React from 'react';

import '../../Reset.css';
import './NavBar.css';

import {Icon} from 'antd';
import Button from 'antd/es/button';

export default function NavBar(){
    return (
        <div>
            <ul className='nav1'>
                <a style={{fontSize: '40px'}} href="#"><Icon type="camera" />PICS</a>
                <a href="#">About</a>
                <a href="#">Portraits</a>
                <a href="#">Commercial</a>
                <a href="#">Weddings</a>
                <a href="#">Contact</a>
                <a href="#">(801) 756-8824</a>
            </ul>
            <ul className='nav2'>
                <a style={{fontSize: '50px'}} href="#"><Icon type="camera" />PICS</a>
                <div>
                    <Button><Icon type="menu" /></Button>
                    <Button><Icon type="phone" theme="filled" /></Button>
                </div>
            </ul>
            <hr></hr>
        </div>
    )
}