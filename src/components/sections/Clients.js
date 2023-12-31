import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
	return (
		<section className="clients" id="clients">
			<div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
				<h3>My Clients</h3>
				<Swiper {...salimovSlider.clients} className="swiper swiper-clients fadeInUp wow">
					{/* SWIPER ITEM STARTS */}
					<SwiperSlide className="swiper-slide">
						<div>
							<img src="assets/logos/logo-hanara.png" alt="client" />
						</div>
						<div>
							<img src="assets/logos/logo-bumi-intan.png" alt="client" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div>
							<img src="assets/logos/logo-askara.png" alt="client" />
						</div>
						<div>
							<img src="assets/logos/logo-costus.png" alt="client" />
						</div>
					</SwiperSlide>
					<div className="swiper-pagination" />
				</Swiper>
			</div>
			<img alt="" className="z-1 hide-mobile opposite-separator" src="assets/separator-opposite.png" />
		</section>
	);
};
export default Clients;
