"use client";
import Link from 'next/link';
import style from './style.css'

const Btn = () => {
    return (
        <div className='Directions'>
            <Link className='lks' href="/">Home</Link>
            <Link className='lks' href="/service">Serviços</Link>
            <Link className='lks' href="/cliente">Clientes</Link>
            <Link className='lks' href="/port">Portifólio</Link>
            <Link className='lks' href="/contato">Contato</Link>
            <Link className='lks' href="/chamado">Abertura de Chamado</Link>
            <Link className='lks' href="/">Mais +</Link>
        </div>
    )
}

export default Btn;