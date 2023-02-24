import React from 'react';
import {FiFacebook ,FiGithub} from "react-icons/fi"
import {MdOutlineMarkEmailRead} from "react-icons/md"
import "./Home.css"

const Home = () => {
    return (
        <div className='home-section h-100'>
            <div className='container-fluid h-100'>
                <div className='row h-100 h-100'>
                    <div className='col-lg-12 h-100'>
                        <div className='content-box h-100'>
                            <h1 >Hi, I am <span className='typewriter d-block'>Aakash Sharma</span></h1>
                            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                            <div className='social-link'>
                                <FiFacebook />
                                <FiGithub />
                                <MdOutlineMarkEmailRead />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home