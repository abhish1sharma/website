import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Section id="welcome" heading={"Welcome"} />
      <Section id="about" heading={"About Us"} />
      <Section id="testimonial" heading={"Testimonials"} />
      <Section id="contact" heading={"Contact Us"} />
      <Footer />
    </div>
  );
}

export default App;
