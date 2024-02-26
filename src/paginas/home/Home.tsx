import React from 'react';
import './Home.css';
import laptopLogo from '../../assets/laptop.jpg'

function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src= {laptopLogo} className='img' alt='imagem da tela inicial'/>
            
           
        </>
    )
}

export default Home