import { Layout } from '../src/modules/Layout/Layout';
import { Routes, Route } from 'react-router-dom'
import { Main } from './modules/Main/Main';
import { CatalogApp } from './modules/Catalog/CatalogApp';
import { Cart } from './modules/Cart/Cart';
import { AboutUs } from './modules/AboutUs/AboutUs';
import { Reviews } from './modules/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index path='/' element={<Main />} />

          <Route path='catalog/*' element={<CatalogApp />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='reviews' element={<Reviews />} />
          
          <Route path='cart' element={<Cart />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;