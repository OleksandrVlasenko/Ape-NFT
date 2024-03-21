// import logo from './logo.svg';
import "./App.css";
import { About } from "./components/About/About";
import { Arts } from "./components/Arts/Arts";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { MindMap } from "./components/MindMap/MindMap";

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
