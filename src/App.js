import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.js";
import ParticlesComponent from "./components/Particles/ParticlesComponent.js"




import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <ParticlesComponent/>
      

    </div>
  );
}

export default App;
