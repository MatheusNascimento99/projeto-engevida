"use client";
import Image from 'next/image'
import Logo from '../header/Logo.png'
import Facebook from '../../img/Facebook.png'
import Instagram from '../../img/Instagram.png'
import Linkedin from '../../img/Linkedin.png'
import Blogger from '../../img/Blogger.png'

import style from './style.css'


const Header = () => {
    return (
        <div>
            <div className="full">
                <Image className='img' src={Logo} alt='Foto Logo'/>
                <h1>EngeVida - Engenharia para Vida!</h1>
                <div className='links'>
                    <ul>
                        <a href=""> <li> <Image className='img_icons' src={Facebook} alt='Foto Logo'/></li></a>
                        <a href=""> <li> <Image className='img_icons' src={Instagram} alt='Foto Logo'/></li></a>
                        <a href=""> <li> <Image className='img_icons' src={Linkedin} alt='Foto Logo'/></li></a>
                        <a href=""> <li> <Image className='img_icons' src={Blogger} alt='Foto Logo'/></li></a>
                        


                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Header;