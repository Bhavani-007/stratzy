import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Strategies from './Strategies';
import Carousel from './Carousel';
import Layout from './Layout';

function App() {
  return (
    <>
      <div style={{paddingBottom: '1rem',background: 'rgb(33, 26, 42)',minHeight: '100vh',display:'flex',flexDirection:'column'}}>
        <Navbar />
        <Hero />
        <Strategies />
        <Carousel />
      </div>
    </>
  );
}

export default App;
