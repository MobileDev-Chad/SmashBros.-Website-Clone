import { Splide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";

import "@splidejs/splide/dist/css/splide.min.css";

const SPLIDE_OPTIONS = {
  type: "loop",
  drag: true,
  arrows: false,
  perMove: 1,
  pagination: false,
  start: 6,
  gap: 7,
  cover: true,
  perPage: 3,
  video: {
    autoplay: false,
    mute: false,
  },
};

const VideoCarousel = () => {
  return (
    <>
      <div
        style={{
          padding: "4.5rem 0.25rem 0.5rem 0.8rem",
        }}
      >
        <div id="triangle-topleft">
          <div className="inner">
            Videos
          </div>
        </div>
        <div id="triangle-bottomright"></div>

        <Splide
          onMoved={() => console.log("Slide moved!")}
          options={SPLIDE_OPTIONS}
          extensions={{ Video }}
        >

          <li
            className="splide__slide"
            data-splide-youtube="https://www.youtube.com/watch?v=82Q2XTJ8jWk"
          >
            <img src={require("../../images/img1.jpg")} alt="" />
          </li>
          <li
            className="splide__slide"
            data-splide-youtube="https://www.youtube.com/watch?v=KctzAagM0H8"
          >
            <img src={require("../../images/img2.jpg")} alt="" />
          </li>
          <li
            className="splide__slide"
            data-splide-youtube="https://www.youtube.com/watch?v=sdgdxaIkU5g"
          >
            <img src={require("../../images/img3.jpg")} alt="" />
          </li>
          <li
            className="splide__slide"
            data-splide-youtube="https://www.youtube.com/watch?v=JPxcE1dMqL8"
          >
            <img src={require("../../images/img4.jpg")} alt="" />
          </li>
          <li
            className="splide__slide"
            data-splide-youtube="https://www.youtube.com/watch?v=90Jve_qWnpc"
          >
            <img src={require("../../images/img5.jpg")} alt="" />s
          </li>
          <li
            className="splide__slide"
            data-splide-youtube="https://www.youtube.com/watch?v=dKR_w6C5A5k&t=2s"
          >
            <img src={require("../../images/img6.jpg")} alt="" />
          </li>
        </Splide>

      </div>

        <div className="video-divider"></div>
    </>
  );
};

export default VideoCarousel;
