import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Favorite from './components/pages/Favorite';
import NotFound from './components/pages/NotFound';
import List from './components/List/List';

const App = () => {
  return (
    <main className="main-layout">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
