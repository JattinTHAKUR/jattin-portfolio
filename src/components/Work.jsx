import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = [
  {
    title: "Crypto App",
    imgSrc: "https://crypto-app-coral-phi.vercel.app/static/media/btc.04101b0b163c035fa57e.png",
    description: "Discover cryptocurrencies with real-time exchange data, detailed info, interactive charts, and dual themes for a comprehensive crypto exploration.",
    url: "https://crypto-app-coral-phi.vercel.app/",
  },
  {
    title: "Real Time Weather App",
    imgSrc: "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png",
    description: "Get real-time weather updates for any location. Key features include user-friendly interface, location-based search, (Celsius/Fahrenheit/Kelvin)options.",
    url: "https://weather-app-two-ashen.vercel.app/",
  },
  {
    title: "Video Playing App",
    imgSrc: "https://lh3.googleusercontent.com/osEvn6xL6LcVkYnnh0q64vta0eYsGIm67m3d_cW5Hi2NC-aIVj2MM6BrwpItZzg6UXc",
    description: " Immerse yourself in stunning videos with our Simple Video Player App.Collection of pre-uploaded high-definition content in user-friendly interface.",
    url: "https://video-player-hub.vercel.app/videos",
  },
];

const Work = () => {
  return (
    <div id="work">
      <h2>Recent Projects</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.map((item) => (
              <div key={item.title} className="workItem">
                <img src={item.imgSrc} alt={item.title} />
                <aside>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a target={"_blank"} href={item.url} rel="noopener noreferrer">
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
