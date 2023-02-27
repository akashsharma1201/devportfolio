import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearchPlus } from "react-icons/fa";
import "./About.css";

import { IoBrushOutline } from "react-icons/io";
import {BiCodeAlt} from "react-icons/bi";
import {CiMobile2} from "react-icons/ci"

// import { serviceData } from '../../data';

const About = () => {

const serviceData = [
        {
            // icon: IoBrushOutline,
            title: "Web Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            // icon: BiCodeAlt,
            title: "Web Development",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            // icon: CiMobile2,
            title: "Responsive Layout",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        }
    ]
    return (
        <div className='about-section py-5'>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-md-12'>
                        <divv className="heading-wrapper">
                            <h1 >About Me</h1>
                        </divv>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex align-items-center'>
                            <img className='img-fluid' src='https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926__340.jpg' alt="auther-image" />
                            <FaSearchPlus />
                        </div>
                    </div>
                    <div className='col-md-6 py-3'>

                        <div className='details'>
                            <h3>I am <span>Aakash Sharma</span></h3>
                            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                            <ul>
                                <li><span>Full Name</span>: Aakash Sharma</li>
                                <li><span>Age</span>: 22 Years</li>
                                <li><span>Nationality</span>: India</li>
                                <li><span>Languages</span>: English, Hindi</li>
                                {/* <li><span>Address</span>: 121 King Street, Melbourne, Australia</li> */}
                                <li><span>Join</span>: Immediately </li>
                            </ul>

                            <Link to="#" className='download-cv' download>DOWNLOAD CV</Link>

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <divv className="heading-wrapper">
                            <h1 >Service</h1>
                        </divv>
                    </div>
                    {
                        serviceData.map((card) => {
                            console.log(card.icon);
                            return (
                                <div className='col-md-6 col-lg-4'>
                                    <div className='card-service'>
                                        {/* <card.icon style={{ color: "white" }} /> */}
                                        <h4>{card.title}</h4>
                                        <p>{card.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About