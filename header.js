import Img from './Frame.png'
import Menu from './menu.png'
import Close from './close.png'
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import Fea from './feature'

function Header(){

    const [openMenu, setOpenMenu] = useState(false)
    function openMenuFunction(el){
        const close = document.querySelector('.close')
        el.target.style.display='none'
        close.style.display='block'
        setOpenMenu(openMenu=> true)
    }

    function closeMenuFunction(el){
        const menu = document.querySelector('.menu--')
        el.target.style.display='none'
        menu.style.display='block'
        setOpenMenu(openMenu=> false)
    }

    

    return(
        <div className="header flex flex-dir gap16" >
            <div className='nav flex flex-1 pad16'>
                <h2 className='logo'>Tarsem singh</h2>
                <div className='mid bigMenu flex flex-2 gap24'>
                    <a href='#fea' className='link'>Features</a>
                    <a href='#prj' className='link'>Projects</a>
                    <a href='#open' download='./API.png' className='link'>Open projects</a>
                    <a href='#foot' className='link'>Contact me</a>
                </div>
                <a href='https://www.linkedin.com/in/tarsem-singh-a57022204/' className='bigMenu btn'>Hire me !</a>
                <div className='menus'>
                    <img onClick={openMenuFunction} src={Menu} className='menu menu--' alt='menu'/>
                    <img onClick={closeMenuFunction} src={Close} className='menu close' alt='close'/>
                </div>
                {openMenu ? <div className='menuItems'>
                    <div className='menuBar flex flex-dir flex-2 gap24'>
                        <a href='#fea' className='link link__update'>Features</a>
                        <a href='#prj' className='link link__update'>Projects</a>
                        <a href='#open' download='./API.png' className='link link__update'>Open projects</a>
                        <a href='#foot' className='link link__update'>Contact me</a>
                        <a href='https://www.linkedin.com/in/tarsem-singh-a57022204/' className='btn'>Hire me !</a>
                    </div>
                </div>:''}
                
            </div>
            <div className='content grid grid-2-col '>
                <div className='left pad96 flex flex-dir gap24'>
                    <h1 className='Heading'>Hey! Tarsem singh here a <br></br> <span>Professional "MERN" stack developer.</span></h1>
                    <p className='des'>Hello everyone wanna build some really cool web application, that will boost your business, hire me to see the growth!.</p>
                    <div className='btnspanel flex flex-3 gap16'>
                        <a href='https://www.linkedin.com/in/tarsem-singh-a57022204/' className="btn">Hire me !</a>
                        <a href='#prj' className="btn btn--">See projects</a>
                    </div>
                </div>
                <div className='right pad96'>
                    <img src={Img} className='img img__update' alt='img'/>
                    <div className='design'></div>
                </div>
            </div>
            <div className='displayTech pad16 flex flex-dir gap24'>
                <h2 className='stack'>&mdash; Tech Stack &mdash;</h2>
                <div className='running-counter flex flex-2 gap16'>
                    <p className='tech'>HTML</p>
                    <p className='tech'>CSS</p>
                    <p className='tech'>JavaScript</p>
                    <p className='tech'>Express.js</p>
                    <p className='tech'>Mongo DB</p>
                    <p className='tech'>React.js</p>
                    <p className='tech'>Git</p>
                    <p className='tech'>DSA</p>
                    <p className='tech'>CPP</p>
                </div>
            </div>
        </div>
    )
}

export default Header;