'use client';
import Image from 'next/image'
import ECG from '../../img/marks/dcg.webp';
import spo2 from '../../img/marks/spo2.webp';
import style from './style.css'
const item1 = "Cabo Ecg"
const item2 = "Cabo SpO2"



const MidleVenda = () => {
    return (

        <div className='fullVendas'>
            <div className='MidleVenda'>

                <div className='card'>
                    <Image className='MidleService_Service_img' src={ECG} alt='Foto Logo' />
                    <h2 className='p_venda'>
                         {item1} diversas marcas
                    </h2>
                    <p> R$ 300,00</p>
                </div>

                <div className='card'>
                    <Image className='MidleService_Service_img' src={spo2} alt='Foto Logo' />
                    <h4 className='p_venda'>
                    {item2} diversas marcas

                    </h4>
                    <p> R$ 320,00</p>
                </div>

            </div>

        </div>
    )

}


export default MidleVenda;