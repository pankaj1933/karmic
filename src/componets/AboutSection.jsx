import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import about1 from '../assets/images/png/project_two7.png'
import about2 from '../assets/images/png/project_two6.png'
import about3 from '../assets/images/png/project_two8.png'
import logofooter from'../assets/images/svg/logofooter.svg'
import insta from '../assets/images/svg/insta.svg'
import twitter from '../assets/images/svg/twitter.svg'
import facebook from '../assets/images/svg/facebook.svg'
import youtube from '../assets/images/svg/youtube.svg'
import white from'../assets/images/svg/white_circle.svg'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='position-relative overflow-hidden'>
            <div className="white_blur_circle">
                <img src={white} alt="" />
            </div>
            <Container>
                <h6 className='d-flex justify-content-center clr_primary fs_lg text-uppercase ff_sunflower fw-light pt-5 about_top_bottomline '>About</h6>
                <p className=' max_width550 text-center m-auto clr_primary fw-normal fs_sm ff_space pb-5 pt-3'><span  className='fw-bold'>Eros,</span> amet, feugiat sit nec duis. <span className='fw-bold'>Tellus</span> in faucibus consectetur dapibus. Eget sem eget nec tincidunt. Urna nulla <span className='fw-bold'>scelerisque</span> pretium diam aliquam montes, <span className='fw-bold'>interdum malesuada.</span> </p>
                <Row className='pb-5 mb-5'>
                    <Col lg={4} data-aos="zoom-out-down" className='about_images pt-lg-0 pt-3'>
                        <img className='w-100' src={about1} alt="#" />
                    </Col>
                    <Col lg={4} data-aos="zoom-out-down" className='about_images pt-lg-0 pt-3'>
                        <img className='w-100' src={about2} alt="#" />
                    </Col>
                    <Col lg={4} data-aos="zoom-out-down" className='about_images pt-lg-0 pt-3'>
                        <img className='w-100' src={about3} alt="#" />
                    </Col>
                </Row>

               <div className="d-flex justify-content-center py-5 mt-5">
               <img src={logofooter} alt="#" />
               </div>

                <div className="d-flex justify-content-center gap-3">
                    <img className='media_hover' src={insta} alt="#" />
                    <img className='media_hover' src={twitter} alt="#" />
                    <img className='media_hover' src={facebook} alt="#" />
                    <img className='media_hover' src={youtube} alt="#" />
                </div>
            </Container>
            <p className='ff_space fs_sm fw-normal clr_primary d-flex justify-content-center pt-5 mt-5 footer_upperline'>© Karmic labs 2022</p>
        </div>

    )
}

export default AboutSection