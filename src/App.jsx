import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import FilmProvider from './pages/FilmContext';

import People from './pages/People';
import PeopleDetails from './pages/PeopleDetails';
import PeopleProvider from './pages/PeopleContext';


const App = () => {

    return(
      <BrowserRouter>
      <Navbar />
        <FilmProvider>
          <PeopleProvider> 
            <Routes>
                <Route path='/'element={<Home />} />
                <Route path='/films' element={<Films />} />
                <Route path='/films/:id' element={<FilmDetails />} />
                <Route path='/people' element={<People />} />
                <Route path='/people/:id' element={<PeopleDetails />} />
            </Routes>
          </PeopleProvider>
        </FilmProvider>
      </BrowserRouter>
    );
};

export default App;