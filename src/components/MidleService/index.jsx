'use client';
import Image from 'next/image'
import ImgHService from '../../img/negocio .webp';
import style from './style.css'

const MidleService = () => {
    return (
        <div className='MidleService'>
            <hr className='Hr' />
            <Image className='MidleHome_Service_img' src={ImgHService} alt='Foto Logo' />
            <p className='p_service'>

                Serviços:

                Mapeamento de parque tecnológico
                Inventario com as informações principais dos equipamentos como marca, modelo, número de série, imobilizado, local de instalação, ano de fabricação


                Realização de cronograma para Manutenções Preventivas (MP) e Calibrações;



                Levantamento de partes e peças para realização de MP;



                Auxílio na estruturação tecnológica - buscando através do levantamento atual do parque as prioridades e necessidades de substituição, bem como implementação de novas tecnologias;



                Realização de Manutenção Preventiva e Manutenção Corretiva;



                Implementação de serviço de Engenharia Clínica;



                Consultoria em processos de aquisição de dispositivos médicos - através de verbas parlamentares, utilizando sistemas como SICONV;



                Suporte técnico na especificação de partes e peças;



                Levantamento de necessidades de treinamentos de equipes quanto a utilização adequada dos equipamentos;



                Treinamentos a equipes quanto a utilização de equipamentos.
            </p>
        </div>
    )

}


export default MidleService;