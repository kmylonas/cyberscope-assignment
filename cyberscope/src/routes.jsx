import { createBrowserRouter } from "react-router-dom";

import CoinsGrid from "./components/CoinsGrid";
import CoinDetailsCard from "./components/CoinDetailsCard";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <CoinsGrid /> },
      { path: "/:id", element: <CoinDetailsCard /> },
    ],
  },
]);

export default router;
