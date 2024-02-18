import Image from 'next/image';
import Equip1 from '../../img/equip/monitor.webp';
import Equip2 from '../../img/equip/eletro.webp';
import Equip3 from '../../img/equip/statim.webp';
import Equip4 from '../../img/equip/ventoul.webp';
import Equip5 from '../../img/equip/anest.webp';
import Equip6 from '../../img/equip/faco.webp';
import Equip7 from '../../img/equip/bcontrarte.webp';
import Equip8 from '../../img/equip/digitalizador.webp';
import Equip9 from '../../img/equip/ultrassom.webp';
import Equip10 from '../../img/equip/autoclave.webp';
import Equip11 from '../../img/equip/lavadora.webp';
import Equip12 from '../../img/equip/arco.webp';

import style from './style.css';

const MidlePort = () => {
    return (
        <div className='MidlePort'>
            <div className='Port_img_div'>
                <div className='card'>
                    <h3>Monitor Multiparâmetros</h3>
                    <Image className='port_img' src={Equip1} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Eletrocardiógrafo</h3>
                    <Image className='port_img' src={Equip2} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Autoclave de Bancada</h3>
                    <Image className='port_img' src={Equip3} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Ventilador Pulmonar</h3>
                    <Image className='port_img' src={Equip4} alt='Foto Logo' />
                </div>
                    
                <div className='card'>
                    <h3>Sistema de Anestesia</h3>
                    <Image className='port_img' src={Equip5} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Facoestimulador</h3>
                    <Image className='port_img' src={Equip6} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Bomba Injetora</h3>
                    <Image className='port_img' src={Equip7} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Digitalizador</h3>
                    <Image className='port_img' src={Equip8} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Ultrassom</h3>
                    <Image className='port_img' src={Equip9} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Autoclave</h3>
                    <Image className='port_img' src={Equip10} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Lavadora Ultrassônica</h3>
                    <Image className='port_img' src={Equip11} alt='Foto Logo' />
                </div>

                <div className='card'>
                    <h3>Arco Cirúrgico</h3>
                    <Image className='port_img' src={Equip12} alt='Foto Logo' />
                </div>
            </div>
        </div>
    );
};

export default MidlePort;
