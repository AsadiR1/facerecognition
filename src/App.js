import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.js'



import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank /> 
      <ImageLinkForm />
    </div>
  );
}

export default App;
