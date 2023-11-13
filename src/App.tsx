import Billboard from './components/Billboard/Billboard';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Titles from './components/Titles/Titles';

import './Style.css';

function App() {
  return (
    <div>
      <Navigation />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
