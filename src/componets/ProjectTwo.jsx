import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import projecttwo1 from '../assets/images/png/project_two1.png'
import projecttwo2 from '../assets/images/png/project_two2.png'
import projecttwo3 from '../assets/images/png/project_two3.png'
import projecttwo4 from '../assets/images/png/project_two4.png'
import projecttwo5 from '../assets/images/png/project_two5.png'
import projecttwo6 from '../assets/images/png/project_two6.png'
import projecttwo7 from '../assets/images/png/project_two7.png'
import projecttwo8 from '../assets/images/png/project_two8.png'
import white_circle from '../assets/images/svg/white_circle1.svg'
import {Link} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";


const ProjectTwo = () => {
   useEffect(() => {
       AOS.init();
   }, []);
   return (
      <div className='white_bgbox position-relative overflow-hidden'>
         <div className="white_blur_circle1">
            <img  src={white_circle} alt="" />
         </div>
         <Container>
            <h5 className='d-flex justify-content-center pt-5 rotate_0 clr_secondary fs_lg fw-light ff_sunflower projects_top_bottomline'>PROJECTS</h5>
            <p className='rotate_0 max_width550 text-center m-auto fs_sm fw-normal clr-secondary  ff_space pb-5 pt-3'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>

            <div className="grid_container rotate_0">
               <div className='pt-3 grid_images' >
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo1} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images'>
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo5} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images' >
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo2} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images'>
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo6} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images' >
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo3} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images'>
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo7} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images' >
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo4} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>
               <div className='pt-3 grid_images'>
                  <img  data-aos="zoom-out-down" className="w-100 " src={projecttwo8} alt="#" />
                  <div className="overlay1 ">
                     <p className='d-flex justify-content-center align-items-center pb-0 pt-1 ff_sunflower fs_md fw-bold clr_primary'>The Tokyo  Tem</p>
                  </div>
               </div>





            </div>
            <div className="d-flex justify-content-center pt-5 mt-5 pb-3 rotate_0">
              
               <Link  className='  view_btn_black clr_secondary ff_sunflower fs_sm fw-medium '>View All</Link>
            </div>

         </Container>
      </div>
   )
}

export default ProjectTwo