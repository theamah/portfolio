const Contact = () => {
	return (
		<section className="contact main-section flex-column-mobile" id="contact">
			{/* TITLE STARTS */}
			<div className="custom-title">
				{/* MAIN TITLE STARTS */}
				<h3>
					<span>
						<span className="animated-layer fade-in-left-animation fadeInUp wow">Get in touch</span>
					</span>
				</h3>
				{/* MAIN TITLE ENDS */}
			</div>
			{/* TITLE ENDS */}
			{/* CONTACTS STARTS */}
			<div className="boxes">
				<div>
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-down-animation fadeInUp wow">
						<i className="fa fa-phone" />
						<p>
							<span className="small-text">phone</span>
							+62 812 9944 0855
						</p>
					</div>
					{/* CONTACT ITEM ENDS */}
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-up-animation fadeInUp wow">
						<i className="fa fa-location-dot" />
						<p>
							<span className="small-text">address</span>
							Bogor, Jawa Barat, Indonesia
						</p>
					</div>
					{/* CONTACT ITEM ENDS */}
				</div>
				<div>
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-down-animation fadeInUp wow">
						<i className="fa fa-envelope" />
						<p>
							<span className="small-text">email</span>
							ramabljredit@gmail.com
						</p>
					</div>
					{/* CONTACT ITEM ENDS */}
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-up-animation fadeInUp wow">
						<i className="fa fa-share-nodes" />
						<span className="small-text">follow me</span>
						<ul className="social">
							<li>
								<a href="#">
									<i className="fa-brands fa-github" />
								</a>
							</li>
							<li>
								<a href="https://instagram.com/theamah_">
									<i className="fa-brands fa-instagram" />
								</a>
							</li>
							<li>
								<a href="https://discordapp.com/users/203091437582155776">
									<i className="fa-brands fa-discord" />
								</a>
							</li>
							<li>
								<a href="https://wa.me/6281299440855">
									<i className="fa-brands fa-whatsapp" />
								</a>
							</li>
						</ul>
					</div>
					{/* CONTACT ITEM ENDS */}
				</div>
			</div>
			{/* CONTACTS ENDS */}
			<img alt="" className="separator hide-mobile" src="assets/separator.png" />
		</section>
	);
};
export default Contact;
