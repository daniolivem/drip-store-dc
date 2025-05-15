import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));
const ProductViewPage = lazy(() => import('./pages/ProductViewPage'));

const App = () => {
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

export default App;
