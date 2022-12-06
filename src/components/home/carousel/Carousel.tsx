import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Header from "../../common/header/Header";

const Carousel = () => {
  const renderSlider = () => {
    const results = [];
    for (let i = 1; i < 7; i++) {
      results.push(
        <SplideSlide key={i}>
          <img src={require(`../../images/hero0${i}_en.jpg`)} alt="Image 1" />
        </SplideSlide>
      );
    }
    return results;
  };

  return (
    <>
      <Splide
        options={{
          type: "loop",
          gap: "10",
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 4,

          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.18,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {renderSlider()}
      </Splide>
      <Header />
    </>
  );
};

export default Carousel;