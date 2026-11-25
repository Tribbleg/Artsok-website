import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Howitworks from "./Components/Howitworks";
import ArtworkCard from "./Components/ArtworkCard";
import Footer from "./Components/Footer";
import Lastfooter from "./Components/Lastfooter";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Howitworks />
      <ArtworkCard />
      <Footer />
      <Lastfooter />
    </div>
  );
}

export default App;
