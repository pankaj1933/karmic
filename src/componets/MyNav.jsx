import React, { useState } from 'react'
import navlogo from "../assets/images/svg/navlogo.svg"
import { Container, Row } from 'react-bootstrap'
import white_circle3 from '../assets/images/svg/white_circle1.svg'
import { Link } from "react-router-dom"
// import { GiGiHamburgerMenu } from 'react-icons/gi';
// import { FaBeer } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import{RxHamburgerMenu} from 'react-icons/rx'


const MyNav = () => {

    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }


    return (
        <div className='position-relative overflow-hidden'>
            <div className="white_blur_circle3">
                <img src={white_circle3} alt="" />
            </div>
            <Container>
                <div className='d-flex justify-content-between py-4 align-items-center' >
                    <img src={navlogo} alt="nav" />
                    {/* <input type="checkbox" id="menubox" /> */}
                    


                    <h3 className='position-relative z-3 d-lg-none' onClick={first ? shownav : hidenav}>  {first ? <RxHamburgerMenu/> : <RxCross1 />}  </h3>
                    <ul className={first ? 'd-flex gap-5 nav_bar pt-2' : "d-flex gap-5 nav_bar pt-2 show"} >
                        <li className='pt-2'><Link className='nav_li fs_sm clr_primary fw-bold ff_sunflower' >Home</Link></li>
                        <li className='pt-2'><Link className='nav_li fs_sm clr_primary fw-bold ff_sunflower'>Services</Link></li>
                        <li className='pt-2'><Link className='nav_li fs_sm clr_primary fw-bold ff_sunflower'>Projects</Link></li>
                        <li className='pt-2'><Link className='nav_li fs_sm clr_primary fw-bold ff_sunflower'>About</Link></li>
                        <Link className='fs_sm clr_secondary wallet_btn font-weight-bold ff_sunflower'>Connect Wallet</Link>

                    </ul>

                </div>
            </Container>
        </div>
    )
}

export default MyNav