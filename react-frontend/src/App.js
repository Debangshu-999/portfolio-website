import { About, Header, Skills, Work } from "./Container/exportFiles";
import Footer from './Container/Footer/Footer'
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <br />
      <br />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
