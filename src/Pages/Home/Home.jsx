import ProductsContainer from 'components/Products';
import Hero from 'components/Hero_2';
//import { useProducts } from 'hooks/useProducts';
import { ProductsSkeleton } from 'components/Skelton';

const Home = () => {
//const { data: products, isLoading } = useProducts();

  return (
    <>
      <Hero />
      <ProductsSkeleton />
    </>
  );
};

export default Home;
