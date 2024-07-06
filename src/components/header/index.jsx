"use client";
import Image from 'next/image'
import Logo from '../../img/logo.JPG'
import Facebook from '../../img/Facebook.png'
import Whats from '../../img/marks/Zap.png'
import Linkedin from '../../img/Linkedin.png'
import Blogger from '../../img/Blogger.png'

import style from './style.css'


const Header = () => {
    return (
        <div>
            <div className="full">
                <Image priority={true}  className='img' src={Logo} alt='Foto Logo'/>
                <h1>EngeVida - Engenharia para Vida!</h1>
                <div className='links'>
                    <ul>
                        <a target="_blank" href="https://www.facebook.com/engenhariaparavida/"> <li> <Image className='img_icons' src={Facebook} alt='Foto Logo'/></li></a>
                        <a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=5512997232184&text=Gostaria%20de%20um%20or%C3%A7amento!"> <li> <Image className='img_icons' src={Whats} alt='Foto Logo'/></li></a>
                        <a target="_blank" href="https://www.linkedin.com/company/engevida/"> <li> <Image className='img_icons' src={Linkedin} alt='Foto Logo'/></li></a>
                        <a target="_blank" href="https://www.engevida.com/blog"> <li> <Image className='img_icons' src={Blogger} alt='Foto Logo'/></li></a>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Header;
