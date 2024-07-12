import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages";
import CadastroProdutosPage from "./pages/cadastro-produtos";
import { Layout } from "./features/layout.tsx";
import ProductPage from "./pages/produto/[id]/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <IndexPage />
      </Layout>
    ),
  },
  {
    path: "/cadastro-produtos",
    element: (
      <Layout>
        <CadastroProdutosPage />
      </Layout>
    ),
  },
  {
    path: "/produtos/:id",
    errorElement: (
      <Layout>
        <p className="text-2xl font-bold">
          Produto desconhecido ou fora de estoque.
        </p>
      </Layout>
    ),
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
