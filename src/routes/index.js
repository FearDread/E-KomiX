import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from '../_components/Navbar';

//const Product = lazy(() => import('../_pages/Product'));
const Home = lazy(() => import('../_pages/Home'));
//const Shop = lazy(() => import('../_pages/Shop'));
//const Cart = lazy(() => import('../_pages/Cart'));
//const Signin = lazy(() => import('../_pages/Signin'));
//const Signup = lazy(() => import('../_pages/Signup'));
const Page404 = lazy(() => import('../_pages/Page404'));

const RouteContainer = () => {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='/*' element={ <Page404 />} />
      </Routes>
    </Router>
  );
};
/*
 <Navbar />
<Route exact path='/shop/:category' element={Shop} />
<Route exact path='/product/:slug' element={Product} />
<Route exact path='/cart' element={Cart} />
<Route exact path='/signin' element={Signin} />
<Route exact path='/signup' element={Signup} />
*/
export default RouteContainer;
