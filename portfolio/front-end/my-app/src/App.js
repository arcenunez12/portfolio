import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import './CSS/body.css';
import Footer from './Components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
