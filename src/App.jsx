<<<<<<< HEAD
import Footer from './components/Footer';
import { Layout } from './pages/Layout';


export const App = () => {
=======
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));
const ProductViewPage = lazy(() => import('./pages/ProductViewPage'));

const App = () => {
>>>>>>> 0e28891c5bff7776beb94394cd87089fd74eff81
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/produtos'
          element={
            <Layout>
              <ProductListingPage />
            </Layout>
          }
        />
        <Route
          path='/produtos/:id'
          element={
            <Layout>
              <ProductViewPage />
            </Layout>
          }
        />

        <Route
          path='/categorias'
          element={
            <Layout>
              <div>Categoria</div>
            </Layout>
          }
        />

        <Route
          path='/orders'
          element={<Layout>{<div>Meus Pedidos</div>}</Layout>}
        />
        <Route
          path='/login'
          element={<Layout>{<div>Já tem uma conta? Faça Login!</div>}</Layout>}
        />
        <Route
          path='/register'
          element={<Layout>{<div>Não possui conta? Cadastre-se!</div>}</Layout>}
        />
      </Routes>
    </Suspense>
  );
};
<<<<<<< HEAD
export default App; 
=======

export default App;
>>>>>>> 0e28891c5bff7776beb94394cd87089fd74eff81
