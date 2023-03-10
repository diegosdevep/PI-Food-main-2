import Start from './pages/start/Start';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import CreateRecipe from './pages/create/CreateRecipe';
import Page404 from './pages/page404/Page404';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Start />} />
      <Route path='/home' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/create' element={<CreateRecipe />} />
      <Route path='/*' element={<Page404 />} />
    </Routes>
  );
}

export default App;
