import React from 'react';
import "./Style.css"
import logo from "../image/logo.png"
import Award from "../image/1.png"
import owner from "../image/2.png"
import pump from "../image/3.png"
const Home = () => {
    return (
        <div className='boxcontainer'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='HeroBanner'>
                <div>
                    <img className='img1' src={Award} alt="" />
                </div>
                <div className='m2'>
                    <h4>
                        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                    </h4>
                    <ul>
                        <li> C.R.I.'s energy efficient products are well recognized by various Government
                            Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL
                            (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy
                            efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                    <img className='img2' src={owner} alt="" />
                    <p>
                        Government of India has awarded the <span>"National Energy Conservation Award 2018".</span>
                        Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
                        Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                </div>
            </div>
            <div className='middle'>
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF
                    MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <img src={pump} alt="" />
                <p className='p2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <div className='bottomcontent'>
                <h4>
                    C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </h4>
                <p>
                    CHEMICALS <span>|</span> PROCESS POWER WATER <span>|</span> WASTE WATER OILS <span>|</span> GAS PHARMA SUGARS <span>|</span> DISTILLERIES PAPER <span>|</span> PULP MARINE <span>|</span> DEFENCE METAL <span>|</span> MINING FOOD <span>|</span> BEVERAGE PETROCHEMICAL
                    <span>|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span>|</span> RESIDENTIAL
                </p>
            </div>
            <div className='footer'>
                <div className='parent'>
                    <div> <i className="fa fa-phone"></i>Toll free 1800 200 1234</div>
                    <div><i className="fa-brands fa-facebook"></i>Toll free 1800 200 1234</div>
                    <div><i className="fa-solid fa-globe"></i>Toll free 1800 200 1234</div>
                </div>
            </div>
        </div >
    )
}

export default Home