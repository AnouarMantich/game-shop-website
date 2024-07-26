// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./GameSwiper.css";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { useState } from "react";
import { GameSlide } from "./GameSlide";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = () => {
    setActive((currentState) => !currentState);
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={`auto`}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="swiper"
    >
      {games.map((game) => (
        <SwiperSlide key={game._id}>
          <GameSlide
            game={game}
            active={active}
            toggleVideo={handleToggleVideo}
            setIsPlaying={setIsPlaying}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;
