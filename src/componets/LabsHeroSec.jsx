import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import herosec_img from '../assets/images/png/candle_queen.png'
import arrow from '../assets/images/svg/Arrow2.svg'
import arrow2 from '../assets/images/svg/Arrow1.svg'
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

const LabsHeroSec = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className='box_hero_sec mt-5 overflow-hidden'>
            <Container>
                <Row className='mt-5 pt-5 rotate_1'>
                    <Col lg={6} className='pt-5 mt-5' data-aos="flip-left">
                        <h1 className='clr_primary fs_xl ff_sunflower fw-light text-uppercase'>We are believers decentralization <span className='whitespace_nowrap'>and Web3. </span></h1>
                        <p className='clr_primary fs_sm ff_space fw-normal'>Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac. </p>
                        <div className='gap-3 d-lg-flex '>
                          
                           <Link className='get_btn clr_secondary ff_sunflower fs_sm fw-bold mb-3 mb-lg-0'> Get Started <span><img src={arrow} alt="#" /></span></Link>
                           
                         
                           <Link className='read_btn ff_sunflower fs_sm fw-light clr_primary'> Read More</Link>
                          
                        </div>
                    </Col>
                    <Col lg={6} className=' pt-5 d-flex hover_translatey' data-aos="flip-right">
                        <img className='ps-5 m-auto' src={herosec_img} alt="" />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5 pt-4">
                    <img src={arrow2} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default LabsHeroSec