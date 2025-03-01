import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content" id="home">
            <div className="text-content">
                <h1>Mojri</h1>
                <p><br />
                Crafting Marwari juti ,<br />
                Where Artisans Meet Artistry.<br /></p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt=""/>
        </div>
    </div>;
};

export default Banner;
