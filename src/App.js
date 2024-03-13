import './assets/css/tailwind.output.css';

import Footer from './_components/Footer';
import RouteContainer from './routes';


function App() {
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        <div className='container mx-auto space-y-6'>
          <RouteContainer />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
