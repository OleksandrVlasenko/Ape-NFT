// import logo from './logo.svg';
// import "./App.css";
import { About } from "./sections/About/About";
import { Arts } from "./sections/Arts/Arts";
import { ContactUs } from "./sections/ContactUs/ContactUs";
import { FAQ } from "./sections/FAQ/FAQ";
import { Footer } from "./sections/Footer/Footer";
import { Header } from "./sections/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { MindMap } from "./sections/MindMap/MindMap";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<MindMap />
				<FAQ />
        <Arts />
        <ContactUs/>
      </main>
      <Footer/>
		</>
	);
}

export default App;
