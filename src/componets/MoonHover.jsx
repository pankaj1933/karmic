import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import service1 from '../assets/images/svg/service1.svg'
import service2 from '../assets/images/svg/service2.svg'
import service3 from '../assets/images/svg/service3.svg'
import service4 from '../assets/images/svg/service4.svg'
import moon from '../assets/images/svg/Ellipse22.svg'
import white_circle2 from '../assets/images/svg/white_circle.svg'
import AOS from "aos";
import "aos/dist/aos.css";
const MoonHover = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='position-relative overflow-hidden'>
           <div className="white_blur_circle2">
                <img src={white_circle2} alt="" />
            </div>
            <Container>
                <h4 className='d-flex justify-content-center clr_primary fs_lg fw-light ff_sunflower pt-5 service_top_bottomline'>SERVICES</h4>
                <Row className='py-5 my-5 '>
                    <Col lg={3} md={6} data-aos="zoom-in-down" className='position-relative col-hover z-1'>
                        <img className="position-absoulte moon" src={moon} alt="#" />
                        <div className="card-box p-4 card-box-border">
                            <img className="mb-3" src={service1} alt="" />
                            <h2 className="clr_primary ff_space fs_md fw-bold">Smart Contract </h2>
                            <p className="clr_primary fs_sm fw-normal ff_space">Eu faucibus libero leo, malesuada justo,
                                tortor
                                pellentesque
                                quis sit. Dui
                                viverra at odio
                                sodales duis integer rhoncus pulvinar. Commodo massa aliquam.</p>
                        </div>
                    </Col>

                    <Col lg={3} md={6} data-aos="zoom-in-down" className='position-relative col-hover z-1'>
                        <img className="position-absoulte moon" src={moon} alt="#" />
                        <div className="card-box p-4 card-box-border">
                            <img className="mb-3" src={service2} alt="" />
                            <h2 className="clr_primary ff_space fs_md fw-bold">Proof </h2>
                            <p className="clr_primary fs_sm fw-normal ff_space">Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper. </p>
                        </div>
                    </Col>

                    <Col lg={3} md={6} data-aos="zoom-in-down" className='position-relative col-hover z-1'>
                        <img className="position-absoulte moon" src={moon} alt="#" />
                        <div className="card-box p-4 card-box-border">
                            <img className="mb-3" src={service3} alt="" />
                            <h2 className="clr_primary ff_space fs_md fw-bold">NFT solutions </h2>
                            <p className="clr_primary fs_sm fw-normal ff_space">Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
                        </div>
                    </Col>

                    <Col lg={3} md={6} data-aos="zoom-in-down" className='position-relative col-hover z-1'>
                        <img className="position-absoulte moon" src={moon} alt="#" />
                        <div className="card-box p-4 card-box-border">
                            <img className="mb-3" src={service4} alt="" />
                            <h2 className="clr_primary ff_space fs_md fw-bold">Support</h2>
                            <p className="clr_primary fs_sm fw-normal ff_space">Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus sem egestas volutpat cras phasellus cursus augue sagittis, enim. Sit et cras.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MoonHover