import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
	return (
		<section className="portfolio main-section flex-column-mobile" id="portfolio">
			{/* TITLE STARTS */}
			<div className="custom-title">
				{/* MAIN TITLE STARTS */}
				<h3>
					<span>
						<span className="animated-layer fade-in-left-animation fadeInUp wow">My Portfolio</span>
					</span>
				</h3>
				{/* MAIN TITLE ENDS */}
			</div>
			{/* TITLE ENDS */}
			<Swiper {...salimovSlider.portfolio} className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow" data-wow-offset={200}>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/hanara-nurseries.png" alt="Hanara Nurseries" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>E-Commerce Portfolio</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Website</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>Harana Nurseries</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>5 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="https://hanaranurseries.com/" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/bumi-intan-grha.png" alt="Bumi Intan Grha" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>Company Portfolio</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Website</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>Bumi Intan Grha</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>2 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="https://bumiintangrha.com/" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/askara-landscape.png" alt="Askara Landscape" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>Company Portfolio</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Website</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>Askara Landscape</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>1 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="https://askaralandscape.com/" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/costus-garden.png" alt="Costus Garden Indonesia" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>Company Portfolio</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Website</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>Costus Garden Indonesia</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>2 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="https://www.costusgarden.com/" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/employee-app.png" alt="DBeauty Employee App" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>Employee Mobile APP</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Mobile PWA</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>DBeauty House</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>6 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="#" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/account-finance.png" alt="Accounting & Finance" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>Accounting & Finance</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Website Backend</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>DBeauty House</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>2 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="#" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<SwiperSlide className="single-item swiper-slide">
					{/* ITEM MAIN CONTENT STARTS */}
					<div className="main-content">
						<img className="img-fluid" src="assets/portfolio/costus-garden.png" alt="Costus Garden Indonesia" />
					</div>
					{/* ITEM MAIN CONTENT ENDS */}
					{/* ITEM DETAILS STARTS */}
					<div className="details">
						<h4>Employee Mobile APP</h4>
						<div>
							<ul>
								<li>
									<span>
										<i className="fa-regular fa-file-lines" /> Project :
									</span>
									<span>Website</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-user" /> Client :
									</span>
									<span>DBeauty House</span>
								</li>
								<li>
									<span>
										<i className="fa-regular fa-hourglass" /> Duration :
									</span>
									<span>6 months</span>
								</li>
								<li>
									<span>
										<i className="fa-solid fa-code-branch" /> Frameworks :
									</span>
									<span>Laravel</span>
								</li>
							</ul>
						</div>
						<a href="https://www.costusgarden.com/" target="_blank" className="custom-btn">
							<span>
								preview <i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
					{/* ITEM DETAILS ENDS */}
				</SwiperSlide>
				<div className="nav-item next-item animated-btn">
					<span />
				</div>
				<div className="nav-item prev-item animated-btn">
					<span />
				</div>
			</Swiper>
			<img alt="" className="separator hide-mobile" src="assets/separator.png" />
		</section>
	);
};
export default Portfolio;
