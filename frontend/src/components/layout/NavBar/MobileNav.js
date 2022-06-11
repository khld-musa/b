import NavLinks from "./NavLinks";
import './Nav.css';
import {useState} from 'react';



function MobileNav () {

  const [show, setShow] = useState(false) 
  const openIcons = <i class="fa fa-bars hamburger" aria-hidden="true" onClick={() => setShow(!show)}></i> 
  const closeIcons =  <i class="fa-solid fa-xmark hamburger"  onClick={() => setShow(!show)}></i>    
                        
  const closeMobileMenu = () => setShow(false);                      

  return (

    <nav className="MobileNav">

      {show ? closeIcons : openIcons}

     {show && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/> }

     </nav>
  )
}

export default MobileNav;