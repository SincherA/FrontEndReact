
import FacebookIcon from "./facebookIcon.png"; 
import TwitterIcon from "./twitterIcon.png"; 
import InstagramIcon from "./instagramIcon.png";
import WhatsappIcon from "./whatsappIcon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.watsapp.com">
          <img src={WhatsappIcon} alt="Whatsapp" />
        </a>
      </div>
      <p> &copy; 2023 LaVita </p>
    </div>
  );
};

export default Footer;