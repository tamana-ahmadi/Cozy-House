import { Dropdown } from './Dropdown';
import './header.css'

const Header = ()=> {
    return (
        <div className='header_container'>
            <div className="all">

           <nav>
                <div className='logo'>
                    <h2>Cozy House</h2>
                    <p>Shelter for pets in Boston</p>
                </div>
                <div>
                    <ul className='menu'>
                        <li>About the shelter</li>
                        <li>Our pets</li>
                        <li>Help the shelter</li>
                        <li>Contacts</li>
                    </ul>
                    <div className="drop_down">
                    <Dropdown />
                    </div>
                </div>

           </nav>

           <div className='main_header'>
            <div className='header_layout'>
                <div className='header_text'>
                    <p className='title'>Not only people <br/> need a house</p>
                    <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                    <button className='header-btn'>Make a friend</button>

                </div>
                <div className='Header_img'>
                    <img src="../start.png" alt="header img" />
                </div>
            </div>
           </div>

           </div>
        </div>
    )
};

export {Header};