import React from 'react';
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skill-section py-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <divv className="heading-wrapper">
              <h1 >My Skills</h1>
            </divv>
          </div>
          <div className='col-lg-6'>
            <div className='skill-bar-box'>
              <h4>HTML 5</h4>
              <div className='d-flex skill-bar '>
                <h4>95%</h4>
                <span className='html'></span>
              </div>
            </div>
            <div className='skill-bar-box '>
              <h4>CSS 3</h4>
              <div className='d-flex skill-bar '>
                <h4>90%</h4>
                <span className='css'></span>
              </div>
            </div>
            <div className='skill-bar-box '>
              <h4>BootStrap</h4>
              <div className='d-flex skill-bar '>
                <h4>80%</h4>
                <span className='bootstrap'></span>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='skill-bar-box'>
              <h4>JavaScript</h4>
              <div className='d-flex skill-bar '>
                <h4>80%</h4>
                <span className='javascript'></span>
              </div>
            </div>
            <div className='skill-bar-box'>
              <h4>ReactJs</h4>
              <div className='d-flex skill-bar '>
                <h4>85%</h4>
                <span className='reactjs'></span>
              </div>
            </div>
            <div className='skill-bar-box'>
              <h4>Redux</h4>
              <div className='d-flex skill-bar'>
                <h4>75%</h4>
                <span className='redux'></span>
              </div>
            </div>

          </div>
          <div className='col-md-12 mt-5'>
            <divv className="heading-wrapper">
              <h1>Education</h1>
            </divv>
          </div>
          <div className='col-md-12'>
            <div className='container-fluid education-part'>
              <div className='row py-2 px-1'>
                <div className='col-sm-3'>
                  <span className='study-duration'>2019-2020</span>
                </div>
                <div className='col-sm-9'>
                  <h4>Senior Secondary</h4>
                  <h5>CBSE Board</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro</p>
                </div>
              </div>
              <div className='row py-2 px-1'>
                <div className='col-sm-3'>
                  <span className='study-duration'>2021-2024</span>
                </div>
                <div className='col-sm-9'>
                  <h4>Bachelor of Computer Application</h4>
                  <h5>Ganga Institute of Technology and Management</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Skills