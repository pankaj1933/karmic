import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import project1 from '../assets/images/svg/project1.svg'
import project2 from '../assets/images/svg/project2.svg'
import project3 from '../assets/images/svg/project3.svg'
import project4 from '../assets/images/svg/project4.svg'
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='overflow-hidden'>
            <Container className=' mt-5 pt-5'>
                <h2 className='d-flex justify-content-center clr_primary fs_lg fw-light ff_sunflower upcoming_top_bottomline'>UPCOMING PROJECTS </h2>
                <Row className='pt-5'>
                    <Col lg={3} md={6}data-aos="flip-down"><div className='project_boxes flex-column d-flex'>
                        <img src={project1} alt="" />
                        <div className="d-flex justify-content-between align-items-center pt-2 ">


                            <h3 className=' mb-0 clr_primary fs_md fw-medium ff-sunflower'>Candle Queen</h3>
                            <p className='pt-2 mb-0 clr_primary fs_sm fw-bold ff_sunflower '>15 : 54 : 12</p>
                        </div>
                        <p className='clr_primary ff_space fw-light fs_sm '>NFT</p>
                    </div></Col>
                    <Col lg={3} md={6} data-aos="flip-down"><div className='project_boxes flex-column d-flex'>
                        <img src={project2} alt="" />
                        <div className="d-flex justify-content-between align-items-center pt-2 ">

                            <h3 className=' mb-0 clr_primary fs_md fw-medium ff-sunflower'>Candle Queen</h3>
                            <p className='pt-2 mb-0 clr_primary fs_sm fw-bold ff_sunflower '>15 : 54 : 12</p>
                        </div>
                        <p className='clr_primary ff_space fw-light fs_sm '>NFT</p>
                    </div></Col>
                    <Col lg={3} md={6} data-aos="flip-down"><div className='project_boxes flex-column d-flex'>
                        <img src={project3} alt="" />
                        <div className="d-flex justify-content-between align-items-center pt-2 ">


                            <h3 className=' mb-0 clr_primary fs_md fw-medium ff-sunflower'>Candle Queen</h3>
                            <p className='pt-2 mb-0 clr_primary fs_sm fw-bold ff_sunflower '>15 : 54 : 12</p>
                        </div>
                        <p className='clr_primary ff_space fw-light fs_sm '>NFT</p>

                    </div></Col>
                    <Col lg={3} md={6} data-aos="flip-down"><div className='project_boxes flex-column d-flex'>
                        <img src={project4} alt="" />
                        <div className="d-flex justify-content-between align-items-center pt-2 ">


                            <h3 className=' mb-0 clr_primary fs_md fw-medium ff-sunflower'>Candle Queen</h3>
                            <p className='pt-2 mb-0 clr_primary fs_sm fw-bold ff_sunflower '>15 : 54 : 12</p>
                        </div>
                        <p className='clr_primary ff_space fw-light fs_sm '>NFT</p>

                    </div></Col>
                </Row>
                <div className="d-flex justify-content-center my-5  py-5">

                    <Link className='view_btn clr_primary fs_sm ff_sunflower fw-medium'> View All</Link>
                </div>
            </Container>
        </div>
    )
}

export default ProjectSection