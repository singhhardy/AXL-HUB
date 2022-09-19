import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className='icon-container'>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                </div>
                <div className='pages'>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
                <div className='copyright'>
                AXL HUB Copyright © 2021 AXL - All rights reserved</div>
            </footer>
        </div>
    )
}

export default Footer