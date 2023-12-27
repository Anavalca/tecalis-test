import '../stylesheets/App.scss';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import vector from '../images/Frame 284.png'

export const App = () => {
  return (
    <div className="App">
      <img src={vector} class="App__vector" alt="vector" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}