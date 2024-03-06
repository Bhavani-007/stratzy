import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Strategies from './Strategies';
import Carousel from './Carousel';

function App() {
  return (
    <>
    <div style={{paddingBottom: '1rem',background: 'rgb(33, 26, 42)',minHeight: '100vh',display:'flex',flexDirection:'column'}}>
      <Navbar />
      <Hero />
      <Strategies />
      <Carousel />
    </div>
    <div style={{position:'fixed', zIndex:'9999',inset:'16px',pointerEvents:'none'}}></div>
    </>
  );
}

export default App;
