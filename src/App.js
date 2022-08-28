import './App.css';
import About from "./components/About"
import ProfilePic from "./components/ProfilePic"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="main-card">
    <ProfilePic/>
    <Buttons/>
    <About/>
    <Footer/>
  </div>
  );
}

export default App;
