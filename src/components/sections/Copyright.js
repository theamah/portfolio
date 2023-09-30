const Copyright = () => {
	return (
		<section className="copyright">
			<img alt="" className="z-1 hide-mobile" src="assets/separator.png" />
			<div>
				<span>© 2022 Theamah.</span>
				<span>
					Designed By{" "}
					<a target="_blank" href="https://instagram.com/theamah_">
						Aditya R
					</a>
				</span>
				<ul>
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
		</section>
	);
};
export default Copyright;
