'use client';
import Image from 'next/image'
import ImgClient from '../../img/marks/union.jpg';
import Client1 from '../../img/marks/cl1.webp';
import Client2 from '../../img/marks/cl2.webp';
import Client3 from '../../img/marks/cl3.webp';
import Client4 from '../../img/marks/cl4.webp';
import Client5 from '../../img/marks/cl5.webp';
import Client6 from '../../img/marks/cl6.webp';
import Client7 from '../../img/marks/cl7.webp';
import style from './style.css'

const MidleClient = () => {
    return (
        <div className='MidleClient'>

            <hr className='Hr' />

            <div className='table'>

                <div className="left">
                    <Image className='l_img' src={Client1} alt='Foto Logo' />
                    <Image className='l_img' src={Client2} alt='Foto Logo' />
                    <Image className='l_img' src={Client7} alt='Foto Logo' />

                </div>

                <div className='center'>
                    <Image className='MidleClient_img' src={ImgClient} alt='Foto Logo' />
                    <Image className='c_img' src={Client5} alt='Foto Logo' />
                </div>



                <div className="right">
                    <Image className='l_img' src={Client3} alt='Foto Logo' />
                    <Image className='l_img' src={Client4} alt='Foto Logo' />
                    <Image className='l_img' src={Client6} alt='Foto Logo' />

                </div>


            </div>

        </div>
    )

}


export default MidleClient;