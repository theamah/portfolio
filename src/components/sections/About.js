const About = () => {
	return (
		<section className="about main-section flex-column-mobile" id="about">
			{/* INFO HOLDER STARTS */}
			<div className="info flex-column-mobile">
				{/* IMAGE STARTS */}
				<div className="img-container animated-layer image-animation my-photo-container fadeInUp wow" data-wow-offset={200} id="my-photo">
					<div>
						<div>
							<img className="my-photo" src="assets/my-picture.jpg" alt="" />
						</div>
					</div>
				</div>
				{/* IMAGE ENDS */}
				{/* INFO STARTS */}
				<div>
					<h2>
						<span>
							<span className="animated-layer fade-in-up-animation fadeInUp wow">Aditya</span>
						</span>
						<span>
							<span className="animated-layer fade-in-up-animation fadeInUp wow">Ramadhana</span>
						</span>
					</h2>
					<div className="infos">
						<ul>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Age :</span>
										<span>25 Years</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Nationality :</span>
										<span>Indonesia</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Freelance :</span>
										<span>Available</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Language :</span>
										<span>English / Indonesia</span>
									</span>
								</span>
							</li>
						</ul>
						<ul>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Address :</span>
										<span>Bogor, Jawa Barat</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Phone :</span>
										<span>62 812 9944 0855</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Email :</span>
										<span>ramabljredit@gmail.com</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Instagram :</span>
										<span>theamah_</span>
									</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
				{/* INFO ENDS */}
			</div>
			{/* INFO HOLDER ENDS */}
			{/* SKILLS STARTS */}
			<div className="skills flex-column-mobile">
				{/* TITLE STARTS */}
				<div className="custom-title">
					{/* MAIN TITLE STARTS */}
					<h3>
						<span>
							<span className="animated-layer fade-in-left-animation fadeInUp wow">My Skills</span>
						</span>
					</h3>
				</div>
				<div className="skills-content">
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-html5-plain" />
							</span>
							<h4>HTML</h4>
						</div>
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="devicon-laravel-plain" />
							</span>
							<h4>Laravel</h4>
						</div>
					</div>
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-php-plain" />
							</span>
							<h4>PHP</h4>
						</div>
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="devicon-jquery-plain" />
							</span>
							<h4>jQuery</h4>
						</div>
					</div>
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-javascript-plain" />
							</span>
							<h4>Javascript</h4>
						</div>
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="devicon-nextjs-plain" />
							</span>
							<h4>NextJS</h4>
						</div>
					</div>
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-mysql-plain" />
							</span>
							<h4>MySQL</h4>
						</div>
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="devicon-react-plain" />
							</span>
							<h4>React</h4>
						</div>
					</div>
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-wordpress-plain" />
							</span>
							<h4>Wordpress</h4>
						</div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-nodejs-plain" />
							</span>
							<h4>NodeJS</h4>
						</div>
					</div>
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-aftereffects-plain" />
							</span>
							<h4>After Effect</h4>
						</div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-photoshop-plain" />
							</span>
							<h4>Photoshop</h4>
						</div>
					</div>
					<div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-premierepro-plain" />
							</span>
							<h4>Premiere</h4>
						</div>
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="devicon-illustrator-plain" />
							</span>
							<h4>Illustrator</h4>
						</div>
					</div>
				</div>
			</div>
			{/* SKILLS ENDS */}
			{/* RESUME STARTS */}
			<div className="resume flex-column-mobile">
				{/* TITLE STARTS */}
				<div className="custom-title fadeInUp wow">
					{/* MAIN TITLE STARTS */}
					<h3>
						<span>
							<span className="animated-layer fade-in-left-animation">My Resume</span>
						</span>
					</h3>
					{/* MAIN TITLE ENDS */}
				</div>
				{/* TITLE ENDS */}
				{/* TIMELINE STARTS */}
				<div className="timeline">
					<ol className="animated-layer fade-in-animation">
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Fullstack Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2018 - 2019</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Kibostore</span>
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Fullstack Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2022</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Hanara Nurseries</span>
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Fullstack Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2022</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Bumi Intan Grha</span>
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Fullstack Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2022</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Askara Landscape</span>
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Fullstack Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2022</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Costus Garden</span>
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Fullstack Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2023 - Now</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>DBeauty House</span>
									</p>
								</div>
							</div>
						</li>
						<li />
					</ol>
				</div>
				{/* TIMELINE ENDS */}
			</div>
			{/* RESUME ENDS */}
			<img alt="" className="separator hide-mobile" src="assets/separator.png" />
		</section>
	);
};
export default About;
