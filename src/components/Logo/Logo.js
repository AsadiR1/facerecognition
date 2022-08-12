import Tilt from 'react-parallax-tilt'
import './Logo.css'
import Brain from './Brain.png'

const Logo = () => {
  return (
    <div className="ma4 mt0 ">
      <Tilt>
        <div className='Tilt br2 shadow-2' style={{ height: 100, width:100,  opacity:0.6 }}>
          <div className='Tilt-inner pa3'> <img style={{paddingTop:'5px'}} alt='logo' src={Brain} /> </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
