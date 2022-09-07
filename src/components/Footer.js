import github from "../images/github.png";
import instagram from "../images/instagram.png";
import codepen from "../images/codepen.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div class="location_wrapper">
        <div className="location">
          <h2>Find US</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            soluta.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>+91-84***-15441</p>
        </div>
        <div class="social">
          <h2>Connect with me</h2>
          <div class="social_links">
            <a target="_blank" href="https://github.com/abhish1sharma">
              <img src={github} alt="github_logo" />
            </a>
            <a target="_blank" href="#">
              <img src={codepen} alt="codepen_logo" />
            </a>
            <a target="_blank" href="#">
              <img src={instagram} alt="instagram_logo" />
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        Copyright @2022 | Designed With <span> ❤ </span>
        by Abhish1sharma
      </div>
    </div>
  );
};

export default Footer;
