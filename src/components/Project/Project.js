import React from 'react'
import { Link } from 'react-router-dom';
import "./Project.css";
import Ecommercewebsite from "../../assests/Ecommerwebsite.png";
import PortfolioImage from "../../assests/portfolioImage.jpg"

const Project = () => {
  return (
    <div className='project-section py-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className="heading-wrapper">
              <h1 >Projects</h1>
            </div>
          </div>
          <div className='row'>
            <div className="col-lg-6 col-md-6 col-12 mt-30 my-5">
              <div className="mi-blog image-box">
                <div className="mi-blog-image px-4" >
                  <Link to="https://splendid-liger-8e84fc.netlify.app/">
                    <img className='img-fluid' src={Ecommercewebsite} alt="ecommerce website" /></Link>
                  <div className="mi-blog-date p">
                    <span className="date">20</span><span className="month">Feb</span>
                  </div>
                </div>
                <div className="mi-blog-content px-4">
                  <h5><a href="/blogs/1/markdown-html-supported-blog">Ecommerce Website Using ReactJS</a></h5>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 mt-30 my-5 project-description'>
              <h3>Ecommerce Project</h3>
              <p>This ecommerce project using ReactJS have a homepage with a banner section, product listing, product detail, shopping cart, . this project is developer using many packages like React- router-dom , Bootstrap ,Axios , and for state management Redux and React-Thunk . fakeapi is used as product api for product Data</p>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-6 col-md-6 col-12 mt-30 my-5 project-description order-2 order-md-1'>
              <h3>Dev Portfolio Project</h3>
              <p>This Portfolio is built using Reactjs and some npm packages. This portfolio has 5 section Home , About , Skills , Project and Contact Sections.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-30 my-5 order-1 order-md-2">
              <div className="mi-blog image-box">
                <div className="mi-blog-image px-4" >
                  <Link to="">
                    <img className='img-fluid' src={PortfolioImage} alt="ecommerce website" /></Link>
                  <div className="mi-blog-date p">
                    <span className="date">20</span><span className="month">Feb</span>
                  </div>
                </div>
                <div className="mi-blog-content px-4">
                  <h5><a href="/blogs/1/markdown-html-supported-blog">Ecommerce Website Using ReactJS</a></h5>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Project