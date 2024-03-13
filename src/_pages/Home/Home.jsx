//import ProductsContainer from '../../_components/Products';
import Hero from '../../_components/Hero';
//import { useProducts } from 'hooks/useProducts';
import { ProductsSkeleton } from '../../_components/Skelton';
import Navbar from '../../_components/Navbar'
const Home = () => {
//const { data: products, isLoading } = useProducts();

  return (
    <>
      <Navbar />
      <Hero />
      <ProductsSkeleton />
    </>
  );
};

export default Home;
