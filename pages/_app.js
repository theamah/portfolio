import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/TheamahHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<SalimovHead />
			{/* <Switcher /> */}
			<Preloader />
			<Component {...pageProps} />
		</Fragment>
	);
};
export default App;
