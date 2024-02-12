"use client";
import Image from 'next/image'

import ImgHome from '../../img/imgHome.webp';

import style from './style.css';
const MidleHome = () => {
    return (
        <div className='MidleHome'>
            <hr className='Hr'/>
            <Image className='MidleHome_img' src={ImgHome} alt='Foto Logo'/>
            <p>
                Nós acreditamos que a tecnologia deve estar sempre voltada para melhorar a vida das pessoas, começando pela saúde.

                A EngeVida surge para oferecer nova opção de assistência especializada em Engenharia Clínica.

                Possuímos ampla experiência, não apenas em manutenção de equipamentos médicos, mas também na diversificação de soluções em serviços na área clínica.

                Nossa área de atuação é: Engenharia Clínica; Gestão de Manutenção; Especificação e Aquisição de Equipamentos Biomedicos e Consultoria em Processos de Aquisição de Equipamentos (SICONV).
            </p>
        </div>
    )
}
export default MidleHome;