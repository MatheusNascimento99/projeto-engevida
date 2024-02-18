'use client';
import Image from 'next/image'
import ImgHService from '../../img/negocio .webp';
import style from './style.css'

import Eng from '../../img/icon/Engineering.svg';
import Chek from '../../img/icon/Checklist.svg';
import CorrePrev from '../../img/icon/CorrePrev.svg';
import Equip from '../../img/icon/Equip.svg';
import Tech from '../../img/icon/Tech.svg';
import Log from '../../img/icon/Log.svg';
import Map from '../../img/icon/Map.svg';
import Work from '../../img/icon/Work.svg';


const MidleService = () => {
    return (
        <div className='MidleService'>
            <hr className='Hr' />
            <Image className='MidleService_Service_img' src={ImgHService} alt='Foto Logo' />
            <h2 className='p_service'>
                Serviços
            </h2>
            <ul className='Service_list'>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={CorrePrev} alt='Foto Logo' />
                        <h4>Realização de Manutenção Preventiva e Manutenção Corretiva;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Eng} alt='Foto Logo' />
                        <h4>Suporte técnico na especificação de partes e peças;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Chek} alt='Foto Logo' />
                        <h4>Realização de cronograma para Manutenções Preventivas (MP) e Calibrações;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Equip} alt='Foto Logo' />
                        <h4>Treinamentos a equipes quanto a utilização de equipamentos;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Log} alt='Foto Logo' />
                        <h4>Auxílio na estruturação tecnológica - buscando através do levantamento atual do parque as prioridades e necessidades de substituição, bem como implementação de novas tecnologias;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Tech} alt='Foto Logo' />
                        <h4>Mapeamento de parque tecnológico Inventario com as informações principais dos equipamentos como marca, modelo, número de série, imobilizado, local de instalação, ano de fabricação;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Map} alt='Foto Logo' />
                        <h4>Levantamento de necessidades de treinamentos de equipes quanto a utilização adequada dos equipamentos;</h4>
                    </li>
                    <li className='Service_list_item'>
                        <Image className='icon_img' src={Work} alt='Foto Logo' />
                        <h4>Implementação de serviço de Engenharia Clínica; Consultoria em processos de aquisição de dispositivos médicos - através de verbas parlamentares, utilizando sistemas como SICONV; </h4>
                    </li>
                </ul>
        </div>
    )

}


export default MidleService;