import Start from './pages/start/Start';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import CreateRecipe from './pages/create/CreateRecipe';
import Page404 from './pages/Page404';
import { Route, Routes } from 'react-router-dom';

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
