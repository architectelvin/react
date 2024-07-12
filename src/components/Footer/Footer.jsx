import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
       </div>
        </div>
        <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
        </div>
        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <l1>+254768877330</l1>
    <l1>architectelvin94@gmail.com</l1>
</ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 - All Rights Reserved </p>
    </div>
  )
}

export default Footer
