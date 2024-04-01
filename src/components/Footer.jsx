import './footer.css'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { VscLocation } from "react-icons/vsc";




function Footer (){
    return(
        <div className="footer_container">
            <div className="all">
            <div className="footer_layout">

                <div className="footer_contact">
                    <p className='title'>For questions <br /> and suggestions</p>
                    <div className="email">
                    <TfiEmail size={30} />
                    <p>email@shelter.com</p>
                    </div>

                    <div className="call">
                    <FaPhoneVolume size={30} />
                    <p>+13 674 567 75 54</p>
                    </div>
                </div>


                <div className="footer_location">
                    <p className='title'>We are waiting <br /> for your visit</p>
                    <div className="location_boston">
                    <VscLocation size={35} />
                    <p>1 Central Street, Boston <br /> (entrance from the store)</p>
                    </div>

                    <div className="location_london">
                    <VscLocation size={35} />
                    <p>18 South Park, London </p>
                    </div>
                </div>


                <div className="footer_pic">
                    <img src="../footer-puppy.png" alt="Puppy img" />
                </div>



            </div>
            </div>
        </div>
    )
}

export { Footer }