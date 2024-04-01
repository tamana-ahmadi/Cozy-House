import './donation.css'
import { CiCreditCard1 } from "react-icons/ci";


function Donation (){
    return(
        <div className='donation_container'>
            <div className="all">
            <div className="donation_layout">
                <div className="donatio_pic">
                    <img src="../donation-dog.png" alt="donation img" />
                </div>

                <div className="donation_text">
                    <div className="donation_title">
                    <p>You can also <br /> make a donation</p>
                    </div>
                <div className="donation_subTitle">
                    <p>Name of the bank / Type of bank account</p>
                </div>  
                <div className="donation_code">
                    <p><CiCreditCard1 size={26} />8380 2880 8028 8791 7435</p>
                </div>
                <div className="donation_info">
                    <p>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>

                </div>
            </div>
            </div> 
        </div>
    )
}
export { Donation };