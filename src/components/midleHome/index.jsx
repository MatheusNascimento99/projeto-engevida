"use client";
import Image from 'next/image'
import ImgHome from '../../img/imgHome.webp';
import Mask from '../../img/icon/Mask.svg';
import Desc from '../../img/icon/Description.svg';
import Eng from '../../img/icon/Engineering.svg';
import Chek from '../../img/icon/Checklist.svg';
import style from './style.css';


const MidleHome = () => {
    return (
        <div className='MidleHome'>
            <hr className='Hr' />
            <Image className='MidleHome_img' src={ImgHome} alt='Foto Logo' />
            <div>
                <p className='paragraph'>
                    Nós acreditamos que a tecnologia deve estar sempre voltada para melhorar a vida das pessoas, começando pela saúde.

                    A EngeVida surge para oferecer nova opção de assistência especializada em Engenharia Clínica.

                    Possuímos ampla experiência, não apenas em manutenção de equipamentos médicos, mas também na diversificação de soluções em serviços na área clínica.
                </p>
                <br />
                <ul className='Home_list'>
                    <li className='Home_list_item'>
                        <h4 id='title'>Nossa área de atuação é:</h4>
                    </li>
                    <li className='Home_list_item'>
                        <Image className='icon_img' src={Mask} alt='Foto Logo' />
                        <h4>Engenharia Clínica;</h4>
                    </li>
                    <li className='Home_list_item'>
                        <Image className='icon_img' src={Eng} alt='Foto Logo' />
                        <h4>Gestão de Manutenção;</h4>
                    </li>
                    <li className='Home_list_item'>
                        <Image className='icon_img' src={Chek} alt='Foto Logo' />
                        <h4>Especificação e Aquisição de Equipamentos Biomedicos;</h4>
                    </li>
                    <li className='Home_list_item'>
                        <Image className='icon_img' src={Desc} alt='Foto Logo' />
                        <h4>Consultoria em Processos de Aquisição de Equipamentos (SICONV);</h4>
                    </li>
                </ul>

            </div>
        </div>
    )
}
export default MidleHome;