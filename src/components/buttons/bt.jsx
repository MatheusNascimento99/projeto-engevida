"use client";
import Link from 'next/link';
import style from './style.css'

const Btn = () => {
    return (
        <div className='Directions'>
            <Link id='Home' className='lks' href="/">Início</Link>
            <Link className='lks' href="/service">Serviços</Link>
            <Link className='lks' href="/cliente">Clientes</Link>
            <Link className='lks' href="/port">Portifólio</Link>
            <Link className='lks' href="/contato">Contato</Link>
            <Link className='lks' href="/chamado">Abertura de Chamado</Link>
            <Link className='lks' href="/venda">Produtos</Link>
            <hr className='Hr' />
        </div>
    )
}

export default Btn;